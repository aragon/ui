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

function IconBookmark({
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
    d: "M16.085 4h-8.17a2.283 2.283 0 00-2.28 2.28v13.074a.646.646 0 001.021.526L12 16.063l5.344 3.817a.646.646 0 001.022-.526V6.28A2.283 2.283 0 0016.086 4zm.988 14.098l-4.697-3.356a.646.646 0 00-.752 0l-4.697 3.356V6.28c0-.544.443-.987.988-.987h8.17c.545 0 .988.443.988.987v11.818z"
  }));
}

IconBookmark.propTypes = IconPropTypes.IconPropTypes;

exports["default"] = IconBookmark;
//# sourceMappingURL=IconBookmark.js.map
