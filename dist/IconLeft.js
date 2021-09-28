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

function IconLeft({
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
    d: "M15.777 18.392a.737.737 0 000-1.054L9.834 11.5l5.943-5.838a.737.737 0 000-1.055.77.77 0 00-1.074 0l-6.48 6.365a.737.737 0 000 1.055l6.48 6.365a.77.77 0 001.074 0z"
  }));
}

IconLeft.propTypes = IconPropTypes.IconPropTypes;

exports["default"] = IconLeft;
//# sourceMappingURL=IconLeft.js.map
