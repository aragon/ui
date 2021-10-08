'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var index$1 = require('./index-37353731.js');
var index = require('./index-c33eeeef.js');
var Layout = require('./Layout.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-1b94f6bc.js');
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
  displayName: "CardLayout___StyledDiv",
  componentId: "p97qvl-0"
})(["display:grid;grid-gap:", "px;grid-auto-flow:row;grid-template-columns:repeat( ", ",minmax(", "px,1fr) );grid-auto-rows:", ";align-items:start;padding:0 ", "px ", "px;margin:0 auto;"], function (p) {
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

function CardLayout(_ref) {
  var children = _ref.children,
      columnWidthMin = _ref.columnWidthMin,
      rowHeight = _ref.rowHeight,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["children", "columnWidthMin", "rowHeight"]);

  var _useLayout = Layout.useLayout(),
      layoutName = _useLayout.layoutName;

  var fullWidth = layoutName === 'small';
  var gridAutoRowValue = rowHeight === 'auto' ? rowHeight : "".concat(rowHeight, "px");
  return /*#__PURE__*/React__default['default'].createElement(index.i, {
    name: "CardLayout"
  }, /*#__PURE__*/React__default['default'].createElement(_StyledDiv, _extends._extends_1({}, props, {
    _css: 2 * constants.GU,
    _css2: fullWidth ? 'auto-fit' : 'auto-fill',
    _css3: columnWidthMin,
    _css4: gridAutoRowValue,
    _css5: fullWidth ? 2 * constants.GU : 0,
    _css6: 3 * constants.GU
  }), children));
}

CardLayout.propTypes = {
  children: index$1.propTypes.node,
  columnWidthMin: index$1.propTypes.number,
  rowHeight: index$1.propTypes.oneOfType([index$1.propTypes.oneOf(['auto']), index$1.propTypes.number])
};
CardLayout.defaultProps = {
  columnWidthMin: 21 * constants.GU,
  rowHeight: 21 * constants.GU
};

exports.CardLayout = CardLayout;
exports.default = CardLayout;
//# sourceMappingURL=CardLayout.js.map
