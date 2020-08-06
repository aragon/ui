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
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-55c9e80c.js');
require('./css.js');
require('./miscellaneous.js');
require('./environment.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./extends-023d783e.js');
require('./objectWithoutProperties-c6d3675c.js');
var index$1 = require('./index-f5a9917e.js');
require('./_baseGetTag-42b4dd3e.js');
require('./Viewport-abbde113.js');
var Layout = require('./Layout.js');

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "Split___StyledDiv",
  componentId: "sc-19nz0vo-0"
})(["flex-grow:1;margin-left:", "px;padding-top:", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledDiv2 = _styled__default("div").withConfig({
  displayName: "Split___StyledDiv2",
  componentId: "sc-19nz0vo-1"
})(["flex-shrink:0;flex-grow:0;width:", ";margin-left:", "px;padding-top:", "px;"], function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledDiv3 = _styled__default("div").withConfig({
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
  var primaryContent = /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Split:primary"
  }, /*#__PURE__*/React__default.createElement(_StyledDiv, {
    _css: !oneColumn && inverted ? 2 * constants.GU : 0,
    _css2: oneColumn && inverted ? 2 * constants.GU : 0
  }, primary));
  var secondaryContent = /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Split:secondary"
  }, /*#__PURE__*/React__default.createElement(_StyledDiv2, {
    _css3: oneColumn ? '100%' : "".concat(33 * constants.GU, "px"),
    _css4: !oneColumn && !inverted ? 2 * constants.GU : 0,
    _css5: oneColumn && !inverted ? 2 * constants.GU : 0
  }, secondary));
  return /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Split"
  }, /*#__PURE__*/React__default.createElement(_StyledDiv3, {
    _css6: oneColumn ? 'block' : 'flex',
    _css7: 3 * constants.GU
  }, inverted ? secondaryContent : primaryContent, inverted ? primaryContent : secondaryContent));
}

Split.propTypes = {
  invert: index.propTypes.oneOf(['none', 'horizontal', 'vertical']),
  primary: index.propTypes.node,
  secondary: index.propTypes.node
};
Split.defaultProps = {
  invert: 'none'
};

exports.Split = Split;
exports.default = Split;
//# sourceMappingURL=Split.js.map
