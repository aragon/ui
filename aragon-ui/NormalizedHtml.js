'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./defineProperty-3cad0327.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./getPrototypeOf-55c9e80c.js');
require('./toConsumableArray-cc0d28a9.js');
require('./font.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "NormalizedHtml___StyledDiv",
  componentId: "sc-9jrbs0-0"
})(["h1,h2,h3,h4,h5,h6{margin-bottom:", "px;margin-top:", "px;}h1,h2{padding-bottom:", "px;}h1{", ";}h2{", ";}h3{", ";}h4{", ";}h5{", ";}h6{", ";}p,pre,table,blockquote{margin:", "px 0;&:last-child{margin-bottom:0;}}li p{margin:0;}hr{height:", "px;margin:", "px 0;background:", ";border:0;}blockquote{padding:0 ", "px;border-left:", "px solid ", ";color:", ";}a{color:", ";text-decoration:underline;}pre,a > code,p > code{padding:", "px ", "px;background:", ";border-radius:", "px;}pre{overflow:auto;padding:", "px;border-radius:", "px;}table{border-collapse:collapse;}tr{border-top:1px solid ", ";}th,td{border:1px solid ", ";padding:", "px ", "px;}img{max-width:calc(100% - ", "px);}ul,ol{padding-left:", "px;}ol ol,ul ol{list-style-type:lower-roman;}ol ol ol,ol ul ol,ul ol ol,ul ul ol{list-style-type:lower-alpha;}button[role='checkbox']{position:relative;top:2px;}"], function (p) {
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
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
}, function (p) {
  return p._css11;
}, function (p) {
  return p._css12;
}, function (p) {
  return p._css13;
}, function (p) {
  return p._css14;
}, function (p) {
  return p._css15;
}, function (p) {
  return p._css16;
}, function (p) {
  return p._css17;
}, function (p) {
  return p._css18;
}, function (p) {
  return p._css19;
}, function (p) {
  return p._css20;
}, function (p) {
  return p._css21;
}, constants.RADIUS, function (p) {
  return p._css22;
}, constants.RADIUS, function (p) {
  return p._css23;
}, function (p) {
  return p._css24;
}, function (p) {
  return p._css25;
}, function (p) {
  return p._css26;
}, function (p) {
  return p._css27;
}, function (p) {
  return p._css28;
});

function NormalizedHtml(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["children"]);

  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default['default'].createElement(_StyledDiv, _extends._extends_1({}, props, {
    _css: 2 * constants.GU,
    _css2: 3 * constants.GU,
    _css3: 0.5 * constants.GU,
    _css4: textStyles.textStyle('title1'),
    _css5: textStyles.textStyle('title2'),
    _css6: textStyles.textStyle('title3'),
    _css7: textStyles.textStyle('title4'),
    _css8: textStyles.textStyle('body1'),
    _css9: textStyles.textStyle('body1'),
    _css10: 2 * constants.GU,
    _css11: 0.5 * constants.GU,
    _css12: 1 * constants.GU,
    _css13: theme.border,
    _css14: 2 * constants.GU,
    _css15: 0.5 * constants.GU,
    _css16: theme.border,
    _css17: theme.contentSecondary,
    _css18: theme.link,
    _css19: 0.5 * constants.GU,
    _css20: 0.75 * constants.GU,
    _css21: theme.surfaceHighlight,
    _css22: 2 * constants.GU,
    _css23: theme.border,
    _css24: theme.border,
    _css25: 1 * constants.GU,
    _css26: 2 * constants.GU,
    _css27: 2 * constants.GU,
    _css28: 4 * constants.GU
  }), children);
}

NormalizedHtml.propTypes = {
  children: index.propTypes.node.isRequired
};

exports.default = NormalizedHtml;
//# sourceMappingURL=NormalizedHtml.js.map
