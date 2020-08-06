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
require('./miscellaneous.js');
require('./environment.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends$1 = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');

var _StyledTable = _styled__default("table").withConfig({
  displayName: "Table___StyledTable",
  componentId: "uvcan9-0"
})(["width:100%;border-spacing:0;td{border-bottom:1px solid ", ";}tr:first-child td{border-top:1px solid ", ";}td:first-child{border-left:", ";}td:last-child{border-right:", ";}tr:first-child td:first-child{border-top-left-radius:", ";}tr:first-child td:last-child{border-top-right-radius:", ";}tr:last-child td:first-child{border-bottom-left-radius:", ";}tr:last-child td:last-child{border-bottom-right-radius:", ";}"], function (p) {
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
});

function Table(_ref) {
  var header = _ref.header,
      children = _ref.children,
      noSideBorders = _ref.noSideBorders,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["header", "children", "noSideBorders"]);

  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default.createElement(_StyledTable, _extends$1._extends_1({}, props, {
    _css: theme.border,
    _css2: theme.border,
    _css3: noSideBorders ? '0' : "1px solid ".concat(theme.border),
    _css4: noSideBorders ? '0' : "1px solid ".concat(theme.border),
    _css5: noSideBorders ? '0' : '3px',
    _css6: noSideBorders ? '0' : '3px',
    _css7: noSideBorders ? '0' : '3px',
    _css8: noSideBorders ? '0' : '3px'
  }), header && /*#__PURE__*/React__default.createElement("thead", null, header), /*#__PURE__*/React__default.createElement("tbody", null, children));
}

Table.propTypes = {
  children: index.propTypes.node,
  header: index.propTypes.node,
  noSideBorders: index.propTypes.bool
};
Table.defaultProps = {
  noSideBorders: false
};

exports.default = Table;
//# sourceMappingURL=Table.js.map
