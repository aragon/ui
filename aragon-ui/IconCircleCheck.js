'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('styled-components');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
var _extends = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
require('./index-ecc57c9f.js');
var IconPropTypes = require('./IconPropTypes-56de5759.js');

function IconCircleCheck(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default.createElement("svg", _extends._extends({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M18.653 10.356a.646.646 0 00-.646.646v.651a6.316 6.316 0 01-1.865 4.495 6.316 6.316 0 01-4.492 1.859h-.004a6.364 6.364 0 01-6.353-6.36 6.316 6.316 0 011.864-4.495 6.316 6.316 0 014.493-1.86h.003a6.32 6.32 0 012.584.551.646.646 0 10.526-1.18A7.601 7.601 0 0011.654 4h-.004a7.6 7.6 0 00-5.406 2.237A7.6 7.6 0 004 11.646a7.6 7.6 0 002.237 5.41 7.6 7.6 0 005.408 2.244h.005a7.6 7.6 0 005.406-2.238 7.6 7.6 0 002.244-5.408v-.652a.646.646 0 00-.647-.646z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M19.81 4.894a.646.646 0 00-.913 0L11.65 12.14l-1.644-1.644a.646.646 0 10-.914.915l2.1 2.1a.644.644 0 00.915 0l7.704-7.703a.646.646 0 000-.914z"
  }));
}

IconCircleCheck.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconCircleCheck;
//# sourceMappingURL=IconCircleCheck.js.map
