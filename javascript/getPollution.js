/**
 * Returns an object with all polluting globals.
 *
 * @returns {Record<string, unknown>}
 */
function getPollution() {
  const iframeEl = document.createElement('iframe');
  /** @type {Set<string>} */
  const keys = new Set();

  iframeEl.style.display = 'none';
  document.body.appendChild(iframeEl);

  for (const key in iframeEl.contentWindow) keys.add(key);

  document.body.removeChild(iframeEl);

  /** @type {Record<string, unknown>} */
  const globals = {};

  for (const key in window) {
    if (!keys.has(key)) globals[key] = window[key];
  }

  return globals;
}
