/**
 * Returns an object with all cookies.
 *
 * @returns {Record<string, string>}
 */
function getCookies() {
  if (!document.cookie) return {};

  /** @type {Record<string, string>} */
  const cookies = {};
  const decode = decodeURIComponent;

  document.cookie.split(/\s*;\s*/).forEach((cookie) => {
    const [name, value] = cookie.split('=');
    cookies[decode(name)] = value ? decode(value) : '';
  });

  return cookies;
}
