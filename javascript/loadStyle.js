/**
 * Loads an external CSS stylesheet.
 */
function loadStyle(url) {
  const linkEl = document.createElement('link');

  linkEl.setAttribute('rel', 'stylesheet');
  linkEl.setAttribute('href', url);

  function onLoad() {
    cleanup();
    console.log('Stylesheet loaded:', url);
  }

  function onError(/** @type {Error} */ error) {
    cleanup();
    console.log('Stylesheet error:', error.message);
  }

  function cleanup() {
    linkEl.removeEventListener('load', onLoad, false);
    linkEl.removeEventListener('error', onError, false);
  }

  linkEl.addEventListener('load', onLoad, false);
  linkEl.addEventListener('error', onError, false);

  document.head.appendChild(linkEl);
}
