'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var Theme = require('./Theme.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Table({
  header,
  children,
  noSideBorders,
  ...props
}) {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(_StyledTable, _extends._extends({}, props, {
    $_css: theme.border,
    $_css2: theme.border,
    $_css3: noSideBorders ? '0' : `1px solid ${theme.border}`,
    $_css4: noSideBorders ? '0' : `1px solid ${theme.border}`,
    $_css5: noSideBorders ? '0' : '3px',
    $_css6: noSideBorders ? '0' : '3px',
    $_css7: noSideBorders ? '0' : '3px',
    $_css8: noSideBorders ? '0' : '3px'
  }), header && /*#__PURE__*/React__default["default"].createElement("thead", null, header), /*#__PURE__*/React__default["default"].createElement("tbody", null, children));
}

Table.propTypes = {
  children: index.PropTypes.node,
  header: index.PropTypes.node,
  noSideBorders: index.PropTypes.bool
};
Table.defaultProps = {
  noSideBorders: false
};

var _StyledTable = _styled__default["default"]("table").withConfig({
  displayName: "Table___StyledTable",
  componentId: "sc-uvcan9-0"
})(["width:100%;border-spacing:0;td{border-bottom:1px solid ", ";}tr:first-child td{border-top:1px solid ", ";}td:first-child{border-left:", ";}td:last-child{border-right:", ";}tr:first-child td:first-child{border-top-left-radius:", ";}tr:first-child td:last-child{border-top-right-radius:", ";}tr:last-child td:first-child{border-bottom-left-radius:", ";}tr:last-child td:last-child{border-bottom-right-radius:", ";}"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6, p => p.$_css7, p => p.$_css8);

exports["default"] = Table;
//# sourceMappingURL=Table.js.map
