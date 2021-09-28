'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var index$1 = require('./index-70e12149.js');
var Layout = require('./Layout.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./Viewport-b495052b.js');
require('./defineProperty-fdbd3c46.js');
require('./isObject-f0a96713.js');
require('./breakpoints.js');
require('./css.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./font.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Header({
  primary,
  secondary,
  children,
  ...props
}) {
  const theme = Theme.useTheme();
  const {
    layoutName
  } = Layout.useLayout();
  const fullWidth = layoutName === 'small';
  return /*#__PURE__*/React__default["default"].createElement(index$1.i, {
    name: "Header"
  }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv, _extends._extends({}, props, {
    $_css: fullWidth ? 0 : 3 * constants.GU,
    $_css2: fullWidth ? theme.surface : 'none',
    $_css3: fullWidth ? 2 * constants.GU : 0,
    $_css4: fullWidth ? '0px 2px 3px rgba(0, 0, 0, 0.05)' : 'none'
  }), /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
    $_css5: fullWidth ? 8 * constants.GU : 5 * constants.GU,
    $_css6: fullWidth && !children ? 2 * constants.GU : 0
  }, children || /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(index$1.i, {
    name: "Header:primary"
  }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv3, {
    $_css7: secondary ? 2 * constants.GU : 0
  }, typeof primary === 'string' && primary ? /*#__PURE__*/React__default["default"].createElement(Header.Title, null, primary) : primary)), /*#__PURE__*/React__default["default"].createElement(index$1.i, {
    name: "Header:secondary"
  }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv4, null, secondary))))));
}

Header.propTypes = {
  primary: index.PropTypes.node,
  secondary: index.PropTypes.node,
  children: index.PropTypes.node
};

Header.Title = function HeaderTitle({
  children,
  ...props
}) {
  const theme = Theme.useTheme();
  const {
    layoutName
  } = Layout.useLayout();
  const fullWidth = layoutName === 'small';
  return /*#__PURE__*/React__default["default"].createElement(_StyledH, _extends._extends({}, props, {
    $_css8: theme.content,
    $_css9: textStyles.textStyle(fullWidth ? 'title3' : 'title2')
  }), children);
};

Header.Title.propTypes = {
  children: index.PropTypes.node
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "Header___StyledDiv",
  componentId: "sc-euryjq-0"
})(["padding:", "px 0;background:", ";margin-bottom:", "px;box-shadow:", ";"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "Header___StyledDiv2",
  componentId: "sc-euryjq-1"
})(["display:flex;align-items:center;justify-content:space-between;height:", "px;padding:0 ", "px;"], p => p.$_css5, p => p.$_css6);

var _StyledDiv3 = _styled__default["default"]("div").withConfig({
  displayName: "Header___StyledDiv3",
  componentId: "sc-euryjq-2"
})(["display:flex;min-width:0;flex-shrink:1;flex-grow:1;margin-right:", "px;"], p => p.$_css7);

var _StyledDiv4 = _styled__default["default"]("div").withConfig({
  displayName: "Header___StyledDiv4",
  componentId: "sc-euryjq-3"
})(["flex-shrink:0;"]);

var _StyledH = _styled__default["default"]("h1").withConfig({
  displayName: "Header___StyledH",
  componentId: "sc-euryjq-4"
})(["color:", ";overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", ";"], p => p.$_css8, p => p.$_css9);

exports["default"] = Header;
//# sourceMappingURL=Header.js.map
