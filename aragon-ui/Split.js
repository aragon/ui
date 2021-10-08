'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var index$1 = require('./index-37353731.js');
var index = require('./index-c33eeeef.js');
var Layout = require('./Layout.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./extends-023d783e.js');
require('./objectWithoutProperties-c6d3675c.js');
require('./defineProperty-3cad0327.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./Viewport-71f7efe6.js');
require('./getPrototypeOf-55c9e80c.js');
require('./_baseGetTag-6ec23aaa.js');
require('./breakpoints.js');
require('./css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "Split___StyledDiv",
  componentId: "sc-19nz0vo-0"
})(["flex-grow:1;margin-left:", "px;padding-top:", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledDiv2 = _styled__default['default']("div").withConfig({
  displayName: "Split___StyledDiv2",
  componentId: "sc-19nz0vo-1"
})(["flex-shrink:0;flex-grow:0;width:", ";margin-left:", "px;padding-top:", "px;"], function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledDiv3 = _styled__default['default']("div").withConfig({
  displayName: "Split___StyledDiv3",
  componentId: "sc-19nz0vo-2"
})(["display:", ";padding-bottom:", "px;width:100%;"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

function Split(_ref) {
  var primary = _ref.primary,
      secondary = _ref.secondary,
      invert = _ref.invert;

  var _useLayout = Layout.useLayout(),
      layout = _useLayout.name;

  var oneColumn = layout === 'small' || layout === 'medium';
  var inverted = !oneColumn && invert === 'horizontal' || oneColumn && invert === 'vertical';
  var primaryContent = /*#__PURE__*/React__default['default'].createElement(index.i, {
    name: "Split:primary"
  }, /*#__PURE__*/React__default['default'].createElement(_StyledDiv, {
    _css: !oneColumn && inverted ? 2 * constants.GU : 0,
    _css2: oneColumn && inverted ? 2 * constants.GU : 0
  }, primary));
  var secondaryContent = /*#__PURE__*/React__default['default'].createElement(index.i, {
    name: "Split:secondary"
  }, /*#__PURE__*/React__default['default'].createElement(_StyledDiv2, {
    _css3: oneColumn ? '100%' : "".concat(33 * constants.GU, "px"),
    _css4: !oneColumn && !inverted ? 2 * constants.GU : 0,
    _css5: oneColumn && !inverted ? 2 * constants.GU : 0
  }, secondary));
  return /*#__PURE__*/React__default['default'].createElement(index.i, {
    name: "Split"
  }, /*#__PURE__*/React__default['default'].createElement(_StyledDiv3, {
    _css6: oneColumn ? 'block' : 'flex',
    _css7: 3 * constants.GU
  }, inverted ? secondaryContent : primaryContent, inverted ? primaryContent : secondaryContent));
}

Split.propTypes = {
  invert: index$1.propTypes.oneOf(['none', 'horizontal', 'vertical']),
  primary: index$1.propTypes.node,
  secondary: index$1.propTypes.node
};
Split.defaultProps = {
  invert: 'none'
};

exports.Split = Split;
exports.default = Split;
//# sourceMappingURL=Split.js.map
