// /sw.js
// Caching service worker — simplicity-first implementation.

const CACHE_NAME = 'app-cache';
const URL_LIST = '/cache-urls.txt';

/** If not truthy, the SW cache is not consulted or updated. */
var cacheEnabled = false;

/**
 * Logs the message to the console with SW prefix.
 */
function swLog(msg) {
  console.log('[SW]', msg);
}

/**
 * Since messages are handled one at a time, the port for sending
 * replies to a client can be stored in a global variable.
 */
var replyPort;

/**
 * Reply through the replyPort and log with swLog.
 */
function reply(msg) {
  replyPort?.postMessage(msg);
  swLog(msg);
};

/**
 * Adds a message handler and serializes calls to it by chaining
 * Promises together.  Should accept any handler suitable for
 * addEventListener for 'message'.  Thank you Claude for the concept.
 */
function addMessageHandler(handler) {
  let queue = Promise.resolve();

  self.addEventListener('message', (event) => {
    // The queue points to the last Promise in the chain to be run.  If
    // some have not yet executed, the handler will run after they
    // finish.
    queue = queue
      .then(() => handler(event))
      .catch((err) => console.error('[SW] message handler error:', err));
  });
}

swLog('loading');

// ── Install: take over without waiting for old worker to finish

self.addEventListener('install', () => self.skipWaiting());

// ── Activate: claim clients

self.addEventListener('activate', (event) => {
  event.waitUntil(
    self.clients.claim()
      .then(() => swLog('controlling all clients'))
  );
});


// ── Fetch: serve from cache, fall back to network

/**
 * This fetch listener does nothing unless cacheEnabled is truthy and
 * the method is GET. If enabled and a matching URL is in the cache, it
 * simply returns it. It greedily caches everything it fetches for
 * future use.
 */
self.addEventListener('fetch', (event) => {
  if (!cacheEnabled) {
    return;
  }
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


// ── Handler for messages from clients.

/**
 * Message event handler.
 */
addMessageHandler(async (event) => {
  // Note that service worker message events are
  // ExtendableMessageEvents.
  const type = event.data?.type;
  replyPort = event.ports[0]; // optional — caller may omit

  // Completely refills the cache with the latest data.
  // Does not complete handling until done.
  // In the future support only REFILL_CACHE.
  if (type === 'REFRESH_CACHE' || type === 'REFILL_CACHE') {
    event.waitUntil(refillCache());

  } else if (type === 'FLUSH_CACHE') {
    event.waitUntil(flushCache());

  } else if (type === 'ENABLE_CACHE') {
    cacheEnabled = true;
    reply('cache enabled');

  } else if (type === 'DISABLE_CACHE') {
    cacheEnabled = false;
    reply('cache disabled');
  }
});


// ── Core logic

/**
 * This fetches the URL list from the net.  The URL of the list must not
 * be included in the list.
 */
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
  reply('cache flushed');
}

/**
 * Completely refills the cache with a new snapshot. If the requestor
 * sets up a channel, the worker may reply to it multiple times, and
 * when successfully completed, notifies all of its clients through
 * another channel.
 * 
 * If a reply port is given, responds to the caller when it starts,
 * and with more details after attempting all URLs.
 * 
 * If completely successful, reports to all clients that the cache is
 * refreshed.
 */
async function refillCache() {
  swLog('refilling the snapshot');

  // Fetch the URL list.
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
  // cache, then store the response manually.
  //
  // fetch() and cache.put() are caught separately so the reason
  // for each failure is recorded clearly.
  //
  // If NETWORK_DOWN_THRESHOLD consecutive fetch() calls fail we
  // assume the network is down, abort the remaining iterations,
  // and report a network outage rather than a long list of
  // individual URL failures.
  const NETWORK_DOWN_THRESHOLD = 10;
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

  if (failed.length === 0){
    // Notify all clients that the snapshot is refilled.
    const clients = await self.clients.matchAll({
      includeUncontrolled: true,
    });
    for (const client of clients) {
      client.postMessage({ type: 'CACHE_REFRESHED', cacheName: CACHE_NAME });
    }
  }
}
