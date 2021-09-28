'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var FloatIndicator = require('./FloatIndicator.js');
var LoadingRing = require('./LoadingRing.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./web-17920307.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./index-70e12149.js');
require('./RootPortal.js');
require('./Root-6628d0a4.js');
require('./Viewport-b495052b.js');
require('./defineProperty-fdbd3c46.js');
require('./isObject-f0a96713.js');
require('./breakpoints.js');
require('./ToastHub.js');
require('./components.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./text-styles.js');
require('./font.js');
require('./springs.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function SyncIndicator({
  children,
  label,
  shift,
  visible,
  ...props
}) {
  return /*#__PURE__*/React__default["default"].createElement(FloatIndicator["default"], _extends._extends({
    visible: visible,
    shift: shift
  }, props), /*#__PURE__*/React__default["default"].createElement(LoadingRing["default"], null), /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
    $_css: 1.5 * constants.GU
  }, children || /*#__PURE__*/React__default["default"].createElement(_StyledSpan, null, label, " \uD83D\uDE4F")));
}

SyncIndicator.propTypes = {
  children: index.PropTypes.node,
  label: index.PropTypes.node,
  shift: index.PropTypes.number,
  visible: index.PropTypes.bool
};
SyncIndicator.defaultProps = {
  label: 'Syncing data…'
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "SyncIndicator___StyledDiv",
  componentId: "sc-19m50aw-0"
})(["margin-left:", "px;"], p => p.$_css);

var _StyledSpan = _styled__default["default"]("span").withConfig({
  displayName: "SyncIndicator___StyledSpan",
  componentId: "sc-19m50aw-1"
})(["white-space:nowrap"]);

exports["default"] = SyncIndicator;
//# sourceMappingURL=SyncIndicator.js.map
