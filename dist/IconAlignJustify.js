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

function IconAlignJustify({
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
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M20.273 9.434H3.727a.727.727 0 000 1.455h16.546a.727.727 0 000-1.455zm0-3.676H3.727a.727.727 0 000 1.454h16.546a.727.727 0 100-1.454zm0 7.353H3.727a.727.727 0 100 1.454h16.546a.727.727 0 100-1.454zm0 3.677H3.727a.727.727 0 100 1.454h16.546a.727.727 0 100-1.454z"
  }));
}

IconAlignJustify.propTypes = IconPropTypes.IconPropTypes;

exports["default"] = IconAlignJustify;
//# sourceMappingURL=IconAlignJustify.js.map
