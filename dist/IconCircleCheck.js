'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var React = require('react');
var IconPropTypes = require('./IconPropTypes-435c57cb.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./index-70e12149.js');
require('./index-19b0c963.js');
require('./constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function IconCircleCheck({
  size,
  ...props
}) {
  const sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends._extends({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: "currentColor",
    d: "M18.653 10.356a.646.646 0 00-.646.646v.651a6.316 6.316 0 01-1.865 4.495 6.316 6.316 0 01-4.492 1.859h-.004a6.364 6.364 0 01-6.353-6.36 6.316 6.316 0 011.864-4.495 6.316 6.316 0 014.493-1.86h.003a6.32 6.32 0 012.584.551.646.646 0 10.526-1.18A7.601 7.601 0 0011.654 4h-.004a7.6 7.6 0 00-5.406 2.237A7.6 7.6 0 004 11.646a7.6 7.6 0 002.237 5.41 7.6 7.6 0 005.408 2.244h.005a7.6 7.6 0 005.406-2.238 7.6 7.6 0 002.244-5.408v-.652a.646.646 0 00-.647-.646z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: "currentColor",
    d: "M19.81 4.894a.646.646 0 00-.913 0L11.65 12.14l-1.644-1.644a.646.646 0 10-.914.915l2.1 2.1a.644.644 0 00.915 0l7.704-7.703a.646.646 0 000-.914z"
  }));
}

IconCircleCheck.propTypes = IconPropTypes.IconPropTypes;

exports["default"] = IconCircleCheck;
//# sourceMappingURL=IconCircleCheck.js.map
