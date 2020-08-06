'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-a8a77f0e.js');
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
var environment = require('./environment.js');
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
  displayName: "Box___StyledDiv",
  componentId: "sc-54p6u6-0"
})(["position:relative;border-radius:", "px;border-style:solid;border-color:", ";border-width:", ";background:", ";color:", ";& + &{margin-top:", "px;}"], function (p) {
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

var _StyledH = _styled__default("h1").withConfig({
  displayName: "Box___StyledH",
  componentId: "sc-54p6u6-1"
})(["display:flex;align-items:center;height:", "px;padding:0 ", "px;border-bottom:1px solid ", ";color:", ";", ";"], function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
}, function (p) {
  return p._css11;
});

var _StyledDiv2 = _styled__default("div").withConfig({
  displayName: "Box___StyledDiv2",
  componentId: "sc-54p6u6-2"
})(["padding:", "px;"], function (p) {
  return p._css12;
});

function Box(_ref) {
  var heading = _ref.heading,
      children = _ref.children,
      padding = _ref.padding,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["heading", "children", "padding"]);

  var theme = Theme.useTheme();

  var _useInside = index$1.o('Split:primary'),
      _useInside2 = slicedToArray.slicedToArray(_useInside, 1),
      insideSplitPrimary = _useInside2[0];

  var _useLayout = Layout.useLayout(),
      layoutName = _useLayout.layoutName;

  var fullWidth = layoutName === 'small';
  var defaultPadding = (fullWidth ? 2 : insideSplitPrimary ? 5 : 3) * constants.GU;

  if (padding === true) {
    environment.warnOnce('Box:padding:true', 'Box: setting true on the padding prop is deprecated. Omit it, or set it to undefined instead.');
    padding = defaultPadding;
  }

  if (padding === false) {
    environment.warnOnce('Box:padding:false', 'Box: setting false on the padding prop is deprecated. Use 0.');
    padding = 0;
  }

  var contentPadding = padding === undefined ? defaultPadding : padding;
  return /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Box"
  }, /*#__PURE__*/React__default.createElement(_StyledDiv, _extends._extends_1({
    as: heading ? 'section' : 'div'
  }, props, {
    _css: fullWidth ? 0 : constants.RADIUS,
    _css2: theme.border,
    _css3: fullWidth ? '1px 0' : '1px',
    _css4: theme.surface,
    _css5: theme.surfaceContent,
    _css6: 2 * constants.GU
  }), heading && /*#__PURE__*/React__default.createElement(_StyledH, {
    _css7: 4 * constants.GU,
    _css8: defaultPadding,
    _css9: theme.border,
    _css10: theme.surfaceContentSecondary,
    _css11: textStyles.textStyle('label2')
  }, /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Box:heading"
  }, heading)), /*#__PURE__*/React__default.createElement(_StyledDiv2, {
    _css12: contentPadding
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Box:content"
  }, children)))));
}

Box.propTypes = {
  heading: index.propTypes.node,
  children: index.propTypes.node,
  padding: index.propTypes.oneOfType([index.propTypes.number, // deprecated
  index.propTypes.bool])
};

exports.default = Box;
//# sourceMappingURL=Box.js.map
