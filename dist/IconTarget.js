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

function IconTarget({
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
    d: "M17.657 6.343A7.947 7.947 0 0012 4a7.948 7.948 0 00-5.657 2.343A7.948 7.948 0 004 12c0 2.137.832 4.146 2.343 5.657A7.948 7.948 0 0012 20a7.948 7.948 0 005.657-2.343A7.948 7.948 0 0020 12a7.948 7.948 0 00-2.343-5.657zM12 18.707A6.715 6.715 0 015.293 12 6.715 6.715 0 0112 5.293 6.715 6.715 0 0118.707 12 6.715 6.715 0 0112 18.707z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: "currentColor",
    d: "M12 6.942A5.064 5.064 0 006.941 12c0 2.79 2.27 5.059 5.059 5.059 2.79 0 5.059-2.27 5.059-5.059 0-2.79-2.27-5.058-5.059-5.058zm0 8.824A3.77 3.77 0 018.234 12 3.77 3.77 0 0112 8.234 3.77 3.77 0 0115.766 12 3.77 3.77 0 0112 15.766z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: "currentColor",
    d: "M12 9.883A2.12 2.12 0 009.883 12 2.12 2.12 0 0012 14.117 2.12 2.12 0 0014.117 12 2.12 2.12 0 0012 9.883zm0 2.941a.825.825 0 010-1.648.825.825 0 010 1.648z"
  }));
}

IconTarget.propTypes = IconPropTypes.IconPropTypes;

exports["default"] = IconTarget;
//# sourceMappingURL=IconTarget.js.map
