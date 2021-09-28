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

function IconChip({
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
    d: "M16.011 6.006H7.99c-1.094 0-1.984.89-1.984 1.983v8.022c0 1.094.89 1.983 1.984 1.983h8.022c1.094 0 1.983-.89 1.983-1.983V7.99c0-1.094-.89-1.983-1.983-1.983zm.69 10.005a.69.69 0 01-.69.69H7.99a.69.69 0 01-.69-.69V7.99a.69.69 0 01.69-.69h8.022a.69.69 0 01.69.69v8.022z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: "currentColor",
    d: "M14.006 9.348H9.994a.646.646 0 00-.646.646v4.011c0 .357.29.647.646.647h4.012c.357 0 .646-.29.646-.646V9.994a.646.646 0 00-.646-.646zm-.647 4.011h-2.718v-2.718h2.718v2.718zM9.994 4a.646.646 0 00-.646.646v2.006a.646.646 0 001.293 0V4.646A.646.646 0 009.994 4zm4.011 0a.646.646 0 00-.646.646v2.006a.646.646 0 001.293 0V4.646A.646.646 0 0014.006 4zM9.994 16.702a.646.646 0 00-.646.646v2.006a.646.646 0 101.293 0v-2.006a.646.646 0 00-.647-.646zm4.011 0a.646.646 0 00-.646.646v2.006a.646.646 0 101.293 0v-2.006a.646.646 0 00-.646-.646zm5.349-7.354h-2.006a.646.646 0 100 1.293h2.006a.646.646 0 100-1.293zm0 3.342h-2.006a.646.646 0 100 1.293h2.006a.646.646 0 100-1.292zM6.652 9.348H4.646a.646.646 0 000 1.293h2.006a.646.646 0 000-1.293zm0 3.342H4.646a.646.646 0 000 1.293h2.006a.646.646 0 000-1.292z"
  }));
}

IconChip.propTypes = IconPropTypes.IconPropTypes;

exports["default"] = IconChip;
//# sourceMappingURL=IconChip.js.map
