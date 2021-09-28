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

function IconLayers({
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
    d: "M19.643 7.745l-7.354-3.677a.646.646 0 00-.578 0L4.357 7.745a.646.646 0 000 1.156l7.354 3.677a.647.647 0 00.578 0l7.354-3.677a.646.646 0 000-1.156zM12 11.277L6.09 8.323 12 5.37l5.908 2.954L12 11.277zm7.932 4.111a.646.646 0 00-.868-.29L12 18.632 4.935 15.1a.646.646 0 00-.578 1.156l7.354 3.677a.646.646 0 00.578 0l7.354-3.677a.646.646 0 00.289-.867z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: "currentColor",
    d: "M19.932 11.71a.646.646 0 00-.868-.288L12 14.954l-7.065-3.532a.646.646 0 10-.578 1.156l7.354 3.677a.647.647 0 00.578 0l7.354-3.677a.646.646 0 00.289-.867z"
  }));
}

IconLayers.propTypes = IconPropTypes.IconPropTypes;

exports["default"] = IconLayers;
//# sourceMappingURL=IconLayers.js.map
