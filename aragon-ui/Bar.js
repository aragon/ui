'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
var index = require('./index-46d0e707.js');
require('./defineProperty-3cad0327.js');
require('./toConsumableArray-cc0d28a9.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-55c9e80c.js');
require('./color.js');
require('./css.js');
require('./miscellaneous.js');
require('./environment.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var index$1 = require('./index-f5a9917e.js');
require('./_baseGetTag-42b4dd3e.js');
require('./Viewport-abbde113.js');
var Layout = require('./Layout.js');

var BAR_PADDING = 2 * constants.GU;

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "Bar___StyledDiv",
  componentId: "sc-1tcfrs9-0"
})(["display:flex;justify-content:space-between;width:100%;height:100%;"]);

var _StyledDiv2 = _styled__default("div").withConfig({
  displayName: "Bar___StyledDiv2",
  componentId: "sc-1tcfrs9-1"
})(["display:flex;align-items:center;height:100%;padding-left:", "px;"], BAR_PADDING);

var _StyledDiv3 = _styled__default("div").withConfig({
  displayName: "Bar___StyledDiv3",
  componentId: "sc-1tcfrs9-2"
})(["display:flex;align-items:center;height:100%;padding-right:", "px;"], BAR_PADDING);

var _StyledDiv4 = _styled__default("div").withConfig({
  displayName: "Bar___StyledDiv4",
  componentId: "sc-1tcfrs9-3"
})(["border-radius:", "px;background:", ";border-style:solid;border-color:", ";border-width:", ";height:", "px;margin-bottom:", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

function Bar(_ref) {
  var children = _ref.children,
      primary = _ref.primary,
      secondary = _ref.secondary,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["children", "primary", "secondary"]);

  var theme = Theme.useTheme();

  var _useLayout = Layout.useLayout(),
      layoutName = _useLayout.layoutName;

  var fullScreen = layoutName === 'small';
  var content = children || /*#__PURE__*/React__default.createElement(_StyledDiv, null, /*#__PURE__*/React__default.createElement(_StyledDiv2, null, /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Bar:primary"
  }, primary)), /*#__PURE__*/React__default.createElement(_StyledDiv3, null, /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Bar:secondary"
  }, secondary)));
  return /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Bar"
  }, /*#__PURE__*/React__default.createElement(_StyledDiv4, _extends._extends_1({}, props, {
    _css: fullScreen ? 0 : constants.RADIUS,
    _css2: theme.surface,
    _css3: theme.border,
    _css4: fullScreen ? '1px 0' : '1px',
    _css5: 8 * constants.GU,
    _css6: 2 * constants.GU
  }), content));
}

Bar.propTypes = {
  children: index.propTypes.node,
  primary: index.propTypes.node,
  secondary: index.propTypes.node
};
Bar.PADDING = BAR_PADDING;

exports.default = Bar;
//# sourceMappingURL=Bar.js.map
