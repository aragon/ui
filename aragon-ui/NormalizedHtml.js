'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('./toConsumableArray-d8a4a2c3.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-2a661a20.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
require('./css.js');
require('./dayjs.min-e07657bf.js');
require('./date.js');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
require('./web3.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
var textStyles = require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends$1 = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');

var _StyledDiv = _styled__default("div").withConfig({
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
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["children"]);

  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default.createElement(_StyledDiv, _extends$1._extends({}, props, {
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
  children: index.PropTypes.node.isRequired
};

exports.default = NormalizedHtml;
//# sourceMappingURL=NormalizedHtml.js.map
