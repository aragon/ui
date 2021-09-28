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

function IconZoomIn({
  size,
  ...props
}) {
  const sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends._extends({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default["default"].createElement("g", {
    fill: "currentColor",
    clipPath: "url(#clip0)"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M15.73 6.84A6.244 6.244 0 0011.284 5 6.244 6.244 0 006.84 6.84 6.244 6.244 0 005 11.286c0 1.679.654 3.257 1.84 4.444a6.244 6.244 0 004.445 1.841 6.244 6.244 0 004.444-1.84 6.244 6.244 0 001.841-4.445 6.244 6.244 0 00-1.84-4.444zm-4.445 9.6a5.16 5.16 0 01-5.154-5.155 5.16 5.16 0 015.154-5.154 5.16 5.16 0 015.154 5.154 5.16 5.16 0 01-5.154 5.154z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M18.834 18.035l-3.11-3.11a.566.566 0 00-.8.8l3.11 3.11a.564.564 0 00.8 0 .566.566 0 000-.8zm-7.549-9.46a.566.566 0 00-.565.565v4.29a.566.566 0 001.13 0V9.14a.566.566 0 00-.565-.565z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M13.43 10.72H9.14a.566.566 0 000 1.13h4.29a.565.565 0 100-1.13z"
  })), /*#__PURE__*/React__default["default"].createElement("defs", null, /*#__PURE__*/React__default["default"].createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    fill: "#fff",
    d: "M0 0h14v14H0z",
    transform: "translate(5 5)"
  }))));
}

IconZoomIn.propTypes = IconPropTypes.IconPropTypes;

exports["default"] = IconZoomIn;
//# sourceMappingURL=IconZoomIn.js.map
