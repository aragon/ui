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

function IconArrowUp({
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
    d: "M12.566 18.434V5.566a.566.566 0 00-1.132 0v12.869a.566.566 0 101.132 0z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M12 6.366l4.426 4.426a.566.566 0 00.8-.8L12.4 5.166a.566.566 0 00-.8 0L6.774 9.992a.564.564 0 000 .8c.221.22.58.22.8 0L12 6.366z"
  }));
}

IconArrowUp.propTypes = IconPropTypes.IconPropTypes;

exports["default"] = IconArrowUp;
//# sourceMappingURL=IconArrowUp.js.map
