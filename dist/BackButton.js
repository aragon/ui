'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var index$1 = require('./index-70e12149.js');
var Bar = require('./Bar.js');
var ButtonBase = require('./ButtonBase.js');
var Layout = require('./Layout.js');
var Theme = require('./Theme.js');
var IconArrowLeft = require('./IconArrowLeft.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./FocusVisible.js');
require('./defineProperty-fdbd3c46.js');
require('./keycodes.js');
require('./css.js');
require('./text-styles.js');
require('./font.js');
require('./environment.js');
require('./miscellaneous.js');
require('./Viewport-b495052b.js');
require('./isObject-f0a96713.js');
require('./breakpoints.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./IconPropTypes-435c57cb.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function BackButton({
  label,
  ...props
}) {
  const theme = Theme.useTheme();
  const [insideBarPrimary] = index$1.o('Bar:primary');
  const {
    layoutName
  } = Layout.useLayout();
  const compact = layoutName === 'small';
  const horizontalPadding = (compact ? 2 : 3) * constants.GU;
  return /*#__PURE__*/React__default["default"].createElement(_StyledButtonBase, _extends._extends({
    focusRingRadius: constants.RADIUS,
    focusRingSpacing: 1
  }, props, {
    $_css: insideBarPrimary ? -Bar["default"].PADDING : 0,
    $_css2: horizontalPadding,
    $_css3: horizontalPadding - 4,
    $_css4: theme.border,
    $_css5: theme.surfaceContent,
    $_css6: theme.surfaceInteractive,
    $_css7: theme.surfaceHighlight
  }), /*#__PURE__*/React__default["default"].createElement(_StyledSpan, {
    $_css8: theme.accent
  }, /*#__PURE__*/React__default["default"].createElement(IconArrowLeft["default"], null)), /*#__PURE__*/React__default["default"].createElement(_StyledSpan2, {
    $_css9: 1 * constants.GU
  }, label));
}

BackButton.propTypes = {
  label: index.PropTypes.string
};
BackButton.defaultProps = {
  label: 'Back'
};

var _StyledButtonBase = _styled__default["default"](ButtonBase["default"]).withConfig({
  displayName: "BackButton___StyledButtonBase",
  componentId: "sc-ebowg7-0"
})(["display:inline-flex;align-items:center;border-radius:", "px 0 0 ", "px;height:100%;margin-left:", "px;padding:0 ", "px 0 ", "px;border-right:1px solid ", ";color:", ";background:", ";&:active{background:", ";}"], constants.RADIUS, constants.RADIUS, p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6, p => p.$_css7);

var _StyledSpan = _styled__default["default"]("span").withConfig({
  displayName: "BackButton___StyledSpan",
  componentId: "sc-ebowg7-1"
})(["position:relative;top:2px;color:", ";"], p => p.$_css8);

var _StyledSpan2 = _styled__default["default"]("span").withConfig({
  displayName: "BackButton___StyledSpan2",
  componentId: "sc-ebowg7-2"
})(["padding-left:", "px;font-size:16px;font-weight:600;"], p => p.$_css9);

exports["default"] = BackButton;
//# sourceMappingURL=BackButton.js.map
