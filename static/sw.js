// /sw.js
// Caching service worker — simplicity-first implementation.
// Fetches the list of URLs to cache from /cache-urls.txt at runtime.
// Caches all listed URLs automatically on activation.
// Accepts a REFRESH_CACHE message from clients to re-cache on demand.
// Notifies all clients after caching completes so they can reload.
// Guarantees network consultation on every refresh via fetch()
// with cache: 'reload', storing responses manually with cache.put().

const CACHE_NAME = 'app-cache';
const URL_LIST = '/cache-urls.txt';

function swLog(msg) {
  console.log('[SW]', msg);
}

swLog('loading');

// ── Install: take over without waiting for old worker to finish

self.addEventListener('install', () => self.skipWaiting());

// ── Activate: cache all URLs, then claim clients

self.addEventListener('activate', (event) => {
  event.waitUntil(
    self.clients.claim()
      .then(() => swLog('controlling client tabs'))
  );
});

// ── Fetch: serve from cache, fall back to network

// Fetch event listener that also checks for non-GET requests and caches
// on demand.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') {
    swLog(`Ignoring ${req.method} for ${req.url}`);
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      } else {
        return fetch(event.request).then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
          return response;
        }).catch(() => new Response(
          'Offline — resource not available in cache.',
          { status: 503, statusText: 'Service Unavailable' }
        ));
      }
    })
  );
});

// ── Message: handle REFRESH_CACHE command from any client

self.addEventListener('message', (event) => {
  const type = event.data?.type;
  if (type === 'REFRESH_CACHE') {
    const replyPort = event.ports[0]; // optional — caller may omit
    event.waitUntil(refreshCache(replyPort));
  } else if (type === 'FLUSH_CACHE') {
    event.waitUntil(flushCache());
  }
});

// ── Core logic


async function fetchUrlList() {
  swLog('fetching URL list');
  const response = await fetch(
    new Request(URL_LIST, { cache: 'reload' })
  );
  if (!response.ok) {
    throw new Error(
      `Unable to read URL list: `
      + `${response.status} ${response.statusText}`
    );
  }
  const text = await response.text();
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith('#'));
}

/**
 * Flush the cache, in fact delete it.
 * 
 * TODO: Make the cache global, and flush by deleting and reopening it.
 */
async function flushCache() {
  await caches.delete(CACHE_NAME);
  swLog('cache flushed');
}

async function refreshCache(replyPort) {
  swLog('refreshing the snapshot');
  const reply = (msg) => {
    replyPort?.postMessage(msg);
    swLog(msg);
  };

  let urls;
  try {
    urls = await fetchUrlList();
  } catch (err) {
    reply({
      status: 'error',
      message: `Unable to read URL list: ${err.message}`
    });
    return;
  }

  reply({ status: 'started', total: urls.length });

  // Delete the old cache so removed URLs don't linger.
  await caches.delete(CACHE_NAME);
  const cache = await caches.open(CACHE_NAME);

  // Fetch every URL directly from the network, bypassing the HTTP
  // cache, then store the response manually. This is the only way
  // to reliably guarantee network consultation across all browsers.
  //
  // fetch() and cache.put() are caught separately so the reason
  // for each failure is recorded clearly.
  //
  // If NETWORK_DOWN_THRESHOLD consecutive fetch() calls fail we
  // assume the network is down, abort the remaining iterations,
  // and report a network outage rather than a long list of
  // individual URL failures.
  const NETWORK_DOWN_THRESHOLD = 100;
  const failed = [];
  let consecutiveFetchFailures = 0;
  let networkDown = false;

  for (const url of urls) {
    let response;
    try {
      response = await fetch(new Request(url, { cache: 'reload' }));
      consecutiveFetchFailures = 0;
    } catch (err) {
      consecutiveFetchFailures++;
      failed.push({ url, reason: `network: ${err.message}` });
      if (consecutiveFetchFailures >= NETWORK_DOWN_THRESHOLD) {
        networkDown = true;
        break;
      }
      continue;
    }

    try {
      await cache.put(url, response);
    } catch (err) {
      failed.push({ url, reason: `storage: ${err.message}` });
    }
  }

  if (networkDown) {
    // Remaining URLs were never attempted — record them as skipped.
    const attempted = new Set(failed.map((f) => f.url));
    for (const url of urls) {
      if (!attempted.has(url)) {
        failed.push({ url, reason: 'skipped: network down' });
      }
    }
    reply({
      status: 'error',
      message: 'Network appears to be unavailable. '
        + `${urls.length - failed.length} URL(s) cached before failure.`,
      cached: urls.length - failed.length,
      failed,
    });
  } else {
    reply({
      status: 'done',
      cached: urls.length - failed.length,
      failed,
    });
  }

  // Notify all open clients on this origin to refresh themselves.
  const clients = await self.clients.matchAll({
    includeUncontrolled: true,
  });
  for (const client of clients) {
    client.postMessage({ type: 'CACHE_REFRESHED', cacheName: CACHE_NAME });
  }
}

