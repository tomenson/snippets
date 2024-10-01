/**
 * Adds CSS style rules to the document.
 *
 * @param {string} css
 */
function addStyle(css) {
  const styleEl = document.createElement('style');

  styleEl.innerText = css;
  document.head.appendChild(styleEl);
}
