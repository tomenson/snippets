/**
 * Loads and executes external JavaScript.
 *
 * @param {string} url
 */
function loadScript(url) {
  const scriptEl = document.createElement('script');

  scriptEl.setAttribute('async', '');
  scriptEl.setAttribute('src', url);

  function onLoad() {
    cleanup();
    console.log('Script loaded:', url);
  }

  function onError(/** @type {Error} */ error) {
    cleanup();
    console.log('Script error:', error.message);
  }

  function cleanup() {
    scriptEl.removeEventListener('load', onLoad, false);
    scriptEl.removeEventListener('error', onError, false);
  }

  scriptEl.addEventListener('load', onLoad, false);
  scriptEl.addEventListener('error', onError, false);

  document.body.appendChild(scriptEl);
}
