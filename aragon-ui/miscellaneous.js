'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Does nothing.
 */
function noop() {}
/**
 * A function that only returns the first parameter passed to it.
 * @param {any} x The first parameter
 * @returns {any}
 */

function identity(x) {
  return x;
}
/**
 * Creates a new object from obj that only contains specific keys.
 * @param {object} obj The source object.
 * @param {array}  keys The keys to pick in the source object.
 * @returns {object}
 */

function pick(obj, keys) {
  return keys.reduce(function (filtered, key) {
    if (obj[key] !== undefined) {
      filtered[key] = obj[key];
    }

    return filtered;
  }, {});
}

exports.identity = identity;
exports.noop = noop;
exports.pick = pick;
//# sourceMappingURL=miscellaneous.js.map
