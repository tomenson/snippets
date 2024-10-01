/**
 * Returns an object with all parsed parameters from a query string.
 *
 * @param {string} [query]
 * @returns {Record<string, string>}
 */
function getParams(query) {
  if (!query) {
    query = location.search;

    if (!query) return null;
  }

  if (query.charAt(0) === '?') query = query.substring(1);

  /** @type {Record<string, string>} */
  const params = {};
  const decode = decodeURIComponent;

  query.split('&').forEach((param) => {
    const [name, value] = param.split('=');

    params[decode(name)] = value ? decode(value) : '';
  });

  return params;
}
