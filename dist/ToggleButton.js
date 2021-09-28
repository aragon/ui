'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var ButtonIcon = require('./ButtonIcon.js');
var Theme = require('./Theme.js');
var IconUp = require('./IconUp.js');
var IconDown = require('./IconDown.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./extends-5150c1f4.js');
require('./Button.js');
require('./index-70e12149.js');
require('./Layout.js');
require('./Viewport-b495052b.js');
require('./defineProperty-fdbd3c46.js');
require('./isObject-f0a96713.js');
require('./breakpoints.js');
require('./css.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./text-styles.js');
require('./font.js');
require('./environment.js');
require('./miscellaneous.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./IconPropTypes-435c57cb.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ToggleButton({
  onClick,
  opened
}) {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(_StyledButtonIcon, {
    label: opened ? 'Close' : 'Open',
    focusRingRadius: constants.RADIUS,
    onClick: onClick,
    $_css: theme.surfaceContentSecondary
  }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
    $_css2: opened ? 1 : 0,
    $_css3: opened ? 1 : 0
  }, /*#__PURE__*/React__default["default"].createElement(IconUp["default"], {
    size: "small"
  })), /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
    $_css4: opened ? -1 : 0,
    $_css5: opened ? -1 : 0
  }, /*#__PURE__*/React__default["default"].createElement(IconDown["default"], {
    size: "small"
  })));
}

ToggleButton.propTypes = {
  onClick: index.PropTypes.func.isRequired,
  opened: index.PropTypes.bool.isRequired
};

var _StyledButtonIcon = _styled__default["default"](ButtonIcon["default"]).withConfig({
  displayName: "ToggleButton___StyledButtonIcon",
  componentId: "sc-1fkpeh6-0"
})(["display:flex;flex-direction:column;color:", ";& > div{display:flex;transform-origin:50% 50%;transition:transform 250ms ease-in-out;}"], p => p.$_css);

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "ToggleButton___StyledDiv",
  componentId: "sc-1fkpeh6-1"
})(["transform:rotate3d(", ",0,0,180deg);transform:rotate3d(0,0,", ",180deg);"], p => p.$_css2, p => p.$_css3);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "ToggleButton___StyledDiv2",
  componentId: "sc-1fkpeh6-2"
})(["transform:rotate3d(", ",0,0,180deg);transform:rotate3d(0,0,", ",180deg);"], p => p.$_css4, p => p.$_css5);

exports.ToggleButton = ToggleButton;
//# sourceMappingURL=ToggleButton.js.map
