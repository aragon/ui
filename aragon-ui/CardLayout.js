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
var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var index$1 = require('./index-f5a9917e.js');
require('./_baseGetTag-42b4dd3e.js');
require('./Viewport-abbde113.js');
var Layout = require('./Layout.js');

var _StyledDiv = _styled__default("div").withConfig({
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
  return /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "CardLayout"
  }, /*#__PURE__*/React__default.createElement(_StyledDiv, _extends._extends_1({}, props, {
    _css: 2 * constants.GU,
    _css2: fullWidth ? 'auto-fit' : 'auto-fill',
    _css3: columnWidthMin,
    _css4: gridAutoRowValue,
    _css5: fullWidth ? 2 * constants.GU : 0,
    _css6: 3 * constants.GU
  }), children));
}

CardLayout.propTypes = {
  children: index.propTypes.node,
  columnWidthMin: index.propTypes.number,
  rowHeight: index.propTypes.oneOfType([index.propTypes.oneOf(['auto']), index.propTypes.number])
};
CardLayout.defaultProps = {
  columnWidthMin: 21 * constants.GU,
  rowHeight: 21 * constants.GU
};

exports.CardLayout = CardLayout;
exports.default = CardLayout;
//# sourceMappingURL=CardLayout.js.map
