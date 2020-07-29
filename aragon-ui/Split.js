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
require('./text-styles.js');
require('./extends-40571110.js');
require('./objectWithoutProperties-35db8ab0.js');
var index$1 = require('./index-ecc57c9f.js');
require('./isObject-ec755c87.js');
require('./Viewport-15101437.js');
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
  invert: index.PropTypes.oneOf(['none', 'horizontal', 'vertical']),
  primary: index.PropTypes.node,
  secondary: index.PropTypes.node
};
Split.defaultProps = {
  invert: 'none'
};

exports.Split = Split;
exports.default = Split;
//# sourceMappingURL=Split.js.map
