/**
 * Returns the real type of a value.
 *
 * @param {unknown} value
 * @returns {string}
 */
function getType(value) {
  return value === undefined || value === null
    ? String(value)
    : Object.prototype.toString.call(value).slice(8, -1);
}
