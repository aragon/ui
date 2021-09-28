'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var SidePanel = require('./SidePanel.js');
var Theme = require('./Theme.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./web-17920307.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./index-70e12149.js');
require('./ButtonIcon.js');
require('./Button.js');
require('./Layout.js');
require('./Viewport-b495052b.js');
require('./defineProperty-fdbd3c46.js');
require('./isObject-f0a96713.js');
require('./breakpoints.js');
require('./constants.js');
require('./css.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./text-styles.js');
require('./font.js');
require('./environment.js');
require('./miscellaneous.js');
require('./RootPortal.js');
require('./Root-6628d0a4.js');
require('./IconCross.js');
require('./IconPropTypes-435c57cb.js');
require('./springs.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function SidePanelSplit({
  children,
  ...props
}) {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv, _extends._extends({}, props, {
    $_css: SidePanel["default"].HORIZONTAL_PADDING * 2,
    $_css2: SidePanel["default"].HORIZONTAL_PADDING,
    $_css3: SidePanel["default"].HORIZONTAL_PADDING
  }), /*#__PURE__*/React__default["default"].createElement(Part, null, children[0]), /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
    $_css4: theme.border,
    $_css5: SidePanel["default"].HORIZONTAL_PADDING,
    $_css6: SidePanel["default"].HORIZONTAL_PADDING
  }), /*#__PURE__*/React__default["default"].createElement(Part, null, children[1]));
}

SidePanelSplit.propTypes = {
  children: index.PropTypes.node
};
const Part = _styled__default["default"].div.withConfig({
  displayName: "SidePanelSplit__Part",
  componentId: "sc-d0csv3-0"
})(["width:50%;"]);

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "SidePanelSplit___StyledDiv",
  componentId: "sc-d0csv3-1"
})(["display:flex;width:calc(100% + ", "px);margin:0 -", "px;padding:", "px;"], p => p.$_css, p => p.$_css2, p => p.$_css3);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "SidePanelSplit___StyledDiv2",
  componentId: "sc-d0csv3-2"
})(["display:inline-block;border-right:1px solid ", ";margin:-", "px ", "px;"], p => p.$_css4, p => p.$_css5, p => p.$_css6);

exports["default"] = SidePanelSplit;
//# sourceMappingURL=SidePanelSplit.js.map
