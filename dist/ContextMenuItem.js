'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var ButtonBase = require('./ButtonBase.js');
var Theme = require('./Theme.js');
var textStyles = require('./text-styles.js');
var css = require('./css.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./index-19b0c963.js');
require('./FocusVisible.js');
require('./defineProperty-fdbd3c46.js');
require('./keycodes.js');
require('./constants.js');
require('./environment.js');
require('./miscellaneous.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./font.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const ContextMenuItem = /*#__PURE__*/React__default["default"].memo(function ContextMenuItem(props) {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(_StyledButtonBase, _extends._extends({}, props, {
    $_css: textStyles.textStyle('body2'),
    $_css2: css.unselectable(),
    $_css3: theme.surfacePressed
  }));
});

var _StyledButtonBase = _styled__default["default"](ButtonBase["default"]).withConfig({
  displayName: "ContextMenuItem___StyledButtonBase",
  componentId: "sc-6mg7lj-0"
})(["display:flex;align-items:center;padding:5px 16px 5px 10px;cursor:pointer;white-space:nowrap;width:100%;", " ", ";&:active{background:", ";}"], p => p.$_css, p => p.$_css2, p => p.$_css3);

exports["default"] = ContextMenuItem;
//# sourceMappingURL=ContextMenuItem.js.map
