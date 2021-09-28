'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var index$1 = require('./index-70e12149.js');
var Theme = require('./Theme.js');
var Layout = require('./Layout.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./Viewport-b495052b.js');
require('./defineProperty-fdbd3c46.js');
require('./isObject-f0a96713.js');
require('./breakpoints.js');
require('./css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const BAR_PADDING = 2 * constants.GU;

function Bar({
  children,
  primary,
  secondary,
  ...props
}) {
  const theme = Theme.useTheme();
  const {
    layoutName
  } = Layout.useLayout();
  const fullScreen = layoutName === 'small';
  const content = children || /*#__PURE__*/React__default["default"].createElement(_StyledDiv, null, /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, null, /*#__PURE__*/React__default["default"].createElement(index$1.i, {
    name: "Bar:primary"
  }, primary)), /*#__PURE__*/React__default["default"].createElement(_StyledDiv3, null, /*#__PURE__*/React__default["default"].createElement(index$1.i, {
    name: "Bar:secondary"
  }, secondary)));
  return /*#__PURE__*/React__default["default"].createElement(index$1.i, {
    name: "Bar"
  }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv4, _extends._extends({}, props, {
    $_css: fullScreen ? 0 : constants.RADIUS,
    $_css2: theme.surface,
    $_css3: theme.border,
    $_css4: fullScreen ? '1px 0' : '1px',
    $_css5: 8 * constants.GU,
    $_css6: 2 * constants.GU
  }), content));
}

Bar.propTypes = {
  children: index.PropTypes.node,
  primary: index.PropTypes.node,
  secondary: index.PropTypes.node
};
Bar.PADDING = BAR_PADDING;

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "Bar___StyledDiv",
  componentId: "sc-1tcfrs9-0"
})(["display:flex;justify-content:space-between;width:100%;height:100%;"]);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "Bar___StyledDiv2",
  componentId: "sc-1tcfrs9-1"
})(["display:flex;align-items:center;height:100%;padding-left:", "px;"], BAR_PADDING);

var _StyledDiv3 = _styled__default["default"]("div").withConfig({
  displayName: "Bar___StyledDiv3",
  componentId: "sc-1tcfrs9-2"
})(["display:flex;align-items:center;height:100%;padding-right:", "px;"], BAR_PADDING);

var _StyledDiv4 = _styled__default["default"]("div").withConfig({
  displayName: "Bar___StyledDiv4",
  componentId: "sc-1tcfrs9-3"
})(["border-radius:", "px;background:", ";border-style:solid;border-color:", ";border-width:", ";height:", "px;margin-bottom:", "px;"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6);

exports["default"] = Bar;
//# sourceMappingURL=Bar.js.map
