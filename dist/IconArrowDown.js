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

function IconArrowDown({
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
    d: "M11.434 5.566v12.869a.566.566 0 001.132 0V5.565a.566.566 0 10-1.132 0z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M12 17.634L7.574 13.21a.565.565 0 10-.8.8l4.826 4.825a.566.566 0 00.8 0l4.826-4.826a.563.563 0 000-.8.566.566 0 00-.8 0L12 17.634z"
  }));
}

IconArrowDown.propTypes = IconPropTypes.IconPropTypes;

exports["default"] = IconArrowDown;
//# sourceMappingURL=IconArrowDown.js.map
