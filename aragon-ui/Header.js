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
require('./font.js');
var constants = require('./constants.js');
require('./breakpoints.js');
var textStyles = require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var index$1 = require('./index-f5a9917e.js');
require('./_baseGetTag-42b4dd3e.js');
require('./Viewport-abbde113.js');
var Layout = require('./Layout.js');

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "Header___StyledDiv",
  componentId: "euryjq-0"
})(["padding:", "px 0;background:", ";margin-bottom:", "px;box-shadow:", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

var _StyledDiv2 = _styled__default("div").withConfig({
  displayName: "Header___StyledDiv2",
  componentId: "euryjq-1"
})(["display:flex;align-items:center;justify-content:space-between;height:", "px;padding:0 ", "px;"], function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var _StyledDiv3 = _styled__default("div").withConfig({
  displayName: "Header___StyledDiv3",
  componentId: "euryjq-2"
})(["display:flex;min-width:0;flex-shrink:1;flex-grow:1;margin-right:", "px;"], function (p) {
  return p._css7;
});

var _StyledDiv4 = _styled__default("div").withConfig({
  displayName: "Header___StyledDiv4",
  componentId: "euryjq-3"
})(["flex-shrink:0;"]);

function Header(_ref) {
  var primary = _ref.primary,
      secondary = _ref.secondary,
      children = _ref.children,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["primary", "secondary", "children"]);

  var theme = Theme.useTheme();

  var _useLayout = Layout.useLayout(),
      layoutName = _useLayout.layoutName;

  var fullWidth = layoutName === 'small';
  return /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Header"
  }, /*#__PURE__*/React__default.createElement(_StyledDiv, _extends._extends_1({}, props, {
    _css: fullWidth ? 0 : 3 * constants.GU,
    _css2: fullWidth ? theme.surface : 'none',
    _css3: fullWidth ? 2 * constants.GU : 0,
    _css4: fullWidth ? '0px 2px 3px rgba(0, 0, 0, 0.05)' : 'none'
  }), /*#__PURE__*/React__default.createElement(_StyledDiv2, {
    _css5: fullWidth ? 8 * constants.GU : 5 * constants.GU,
    _css6: fullWidth && !children ? 2 * constants.GU : 0
  }, children || /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Header:primary"
  }, /*#__PURE__*/React__default.createElement(_StyledDiv3, {
    _css7: secondary ? 2 * constants.GU : 0
  }, typeof primary === 'string' && primary ? /*#__PURE__*/React__default.createElement(Header.Title, null, primary) : primary)), /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Header:secondary"
  }, /*#__PURE__*/React__default.createElement(_StyledDiv4, null, secondary))))));
}

Header.propTypes = {
  primary: index.propTypes.node,
  secondary: index.propTypes.node,
  children: index.propTypes.node
};

var _StyledH = _styled__default("h1").withConfig({
  displayName: "Header___StyledH",
  componentId: "euryjq-4"
})(["color:", ";overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", ";"], function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

Header.Title = function HeaderTitle(_ref2) {
  var children = _ref2.children,
      props = objectWithoutProperties.objectWithoutProperties(_ref2, ["children"]);

  var theme = Theme.useTheme();

  var _useLayout2 = Layout.useLayout(),
      layoutName = _useLayout2.layoutName;

  var fullWidth = layoutName === 'small';
  return /*#__PURE__*/React__default.createElement(_StyledH, _extends._extends_1({}, props, {
    _css8: theme.content,
    _css9: textStyles.textStyle(fullWidth ? 'title3' : 'title2')
  }), children);
};

Header.Title.propTypes = {
  children: index.propTypes.node
};

exports.default = Header;
//# sourceMappingURL=Header.js.map
