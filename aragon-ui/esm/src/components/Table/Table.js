import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { useTheme } from '../../theme/Theme2.js';

var _StyledTable = _styled("table").withConfig({
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
      props = objectWithoutProperties(_ref, ["header", "children", "noSideBorders"]);

  var theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledTable, _extends_1({}, props, {
    _css: theme.border,
    _css2: theme.border,
    _css3: noSideBorders ? '0' : "1px solid ".concat(theme.border),
    _css4: noSideBorders ? '0' : "1px solid ".concat(theme.border),
    _css5: noSideBorders ? '0' : '3px',
    _css6: noSideBorders ? '0' : '3px',
    _css7: noSideBorders ? '0' : '3px',
    _css8: noSideBorders ? '0' : '3px'
  }), header && /*#__PURE__*/React.createElement("thead", null, header), /*#__PURE__*/React.createElement("tbody", null, children));
}

Table.propTypes = {
  children: propTypes.node,
  header: propTypes.node,
  noSideBorders: propTypes.bool
};
Table.defaultProps = {
  noSideBorders: false
};

export default Table;
//# sourceMappingURL=Table.js.map
