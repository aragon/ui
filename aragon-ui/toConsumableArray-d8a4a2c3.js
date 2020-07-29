'use strict';

var unsupportedIterableToArray = require('./unsupportedIterableToArray-68db1d3b.js');

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return unsupportedIterableToArray.arrayLikeToArray(arr);
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray.unsupportedIterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

exports._toConsumableArray = toConsumableArray;
//# sourceMappingURL=toConsumableArray-d8a4a2c3.js.map
