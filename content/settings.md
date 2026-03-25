---
title: General settings
xtype: custom
description: >
  Prooftoys general settings.
---
# Prooftoys general settings

## Cache controls

Aggressive HTTP caching to support offline use, supported by a service
worker.  Cached resources are never evicted from the cache except when
the entire cache is flushed.  Shift-reload reloads without using the
cache.  The service worker has a list of URLs that it will cache if the
browser fetches them.

**Enable:** The cache is initially disabled, meaning that the worker
does not intercept requests for eligible resources.  This enables
request interception.

**Disable:** Disables request interception.  Does not flush the cache.

**Flush:** Empties the cache.  This can be useful if the cache may have
entries that are out of date.

**Refill:** Proactively loads all resources listed as eligible for
storage in this cache, always loading from the network.

**Update worker:** Attempts to load and activate any updated service
worker from the web server.

**Clear log:** Clears the log display.

<button class=enable>Enable</button>
<button class=disable>Disable</button>
<button class=flush>Flush</button>
<button class=refill>Refill</button>
<button class=update>Update worker</button>
<button class=clearLog>Clear log</button>

<style>
  textarea {
    width: 82ch;
    height: calc(20 * 1.5em);
    overflow-y: scroll;
    overflow-x: hidden;
    white-space: pre-wrap;
    word-wrap: break-word;
    resize: both;
    font-family: monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 4px;
    box-sizing: content-box;
  }
</style>

<textarea id=logArea></textarea>

<script>
const logArea = document.querySelector('#logArea');

function logText(message) {
  let text = message;
  if (typeof message !== 'string') {
    text = JSON.stringify(message, null, 1);
  }
  logArea.value += text + '\n';
  logArea.scrollTop = logArea.scrollHeight;
}

async function updateSW() {
  const regs = await navigator.serviceWorker.getRegistrations();
  regs.forEach(reg => reg.update());
}

$(function() {
  $('button.enable').on('click', () => Toy.enableCache());
  $('button.disable').on('click', () => Toy.disableCache());
  $('button.flush').on('click', () => Toy.flushCache());
  $('button.refill').on('click', () => Toy.recache());
  $('button.refill').on('click', () => Toy.recache());
  $('button.update').on('click', updateSW);
  $('button.clearLog').on('click', () => logArea.value = '');

  Toy.messageLogger = logText;

});
</script>
