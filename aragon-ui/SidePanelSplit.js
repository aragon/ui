'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var SidePanel = require('./SidePanel.js');
var Theme = require('./Theme.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./defineProperty-3cad0327.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./web-46d746d6.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./index-c33eeeef.js');
require('./ButtonIcon.js');
require('./Button.js');
require('./Layout.js');
require('./Viewport-71f7efe6.js');
require('./getPrototypeOf-55c9e80c.js');
require('./_baseGetTag-6ec23aaa.js');
require('./breakpoints.js');
require('./constants.js');
require('./css.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./environment.js');
require('./miscellaneous.js');
require('./text-styles.js');
require('./font.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');
require('./RootPortal.js');
require('./Root-07f851a6.js');
require('./IconCross.js');
require('./IconPropTypes-b9997416.js');
require('./springs.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "SidePanelSplit___StyledDiv",
  componentId: "d0csv3-0"
})(["display:flex;width:calc(100% + ", "px);margin:0 -", "px;padding:", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledDiv2 = _styled__default['default']("div").withConfig({
  displayName: "SidePanelSplit___StyledDiv2",
  componentId: "d0csv3-1"
})(["display:inline-block;border-right:1px solid ", ";margin:-", "px ", "px;"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

function SidePanelSplit(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["children"]);

  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default['default'].createElement(_StyledDiv, _extends._extends_1({}, props, {
    _css: SidePanel['default'].HORIZONTAL_PADDING * 2,
    _css2: SidePanel['default'].HORIZONTAL_PADDING,
    _css3: SidePanel['default'].HORIZONTAL_PADDING
  }), /*#__PURE__*/React__default['default'].createElement(Part, null, children[0]), /*#__PURE__*/React__default['default'].createElement(_StyledDiv2, {
    _css4: theme.border,
    _css5: SidePanel['default'].HORIZONTAL_PADDING,
    _css6: SidePanel['default'].HORIZONTAL_PADDING
  }), /*#__PURE__*/React__default['default'].createElement(Part, null, children[1]));
}

SidePanelSplit.propTypes = {
  children: index.propTypes.node
};
var Part = _styled__default['default'].div.withConfig({
  displayName: "SidePanelSplit__Part",
  componentId: "d0csv3-2"
})(["width:50%;"]);

exports.default = SidePanelSplit;
//# sourceMappingURL=SidePanelSplit.js.map
