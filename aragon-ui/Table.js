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
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends$1 = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');

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
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["header", "children", "noSideBorders"]);

  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default.createElement(_StyledTable, _extends$1._extends({}, props, {
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
  children: index.PropTypes.node,
  header: index.PropTypes.node,
  noSideBorders: index.PropTypes.bool
};
Table.defaultProps = {
  noSideBorders: false
};

exports.default = Table;
//# sourceMappingURL=Table.js.map
