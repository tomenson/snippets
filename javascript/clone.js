/**
 * Returns a deep clone of an object.
 *
 * @param {unknown} object
 * @returns {undefined | null | object}
 */
function clone(object) {
  if (object === undefined || object === null || typeof object !== 'object') {
    return object;
  }

  if (Array.isArray(object)) return object.slice();

  /** @type {object} */
  const newObject = Object.create(Object.getPrototypeOf(object));

  for (const key in object) {
    if (object.hasOwnProperty(key)) newObject[key] = clone(object[key]);
  }

  return newObject;
}
