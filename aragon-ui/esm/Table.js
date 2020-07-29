import './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import './defineProperty-a0480c32.js';
import './toConsumableArray-127424c2.js';
import _styled from 'styled-components';
import './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import './contains-component.js';
import './css.js';
import './dayjs.min-e57fb69a.js';
import './date.js';
import './miscellaneous.js';
import './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import './web3.js';
import './theme-dark.js';
import './theme-light.js';
import { useTheme } from './Theme.js';
import { _ as _extends } from './extends-db4f0c26.js';
import { _ as _objectWithoutProperties } from './objectWithoutProperties-234758e1.js';

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
      props = _objectWithoutProperties(_ref, ["header", "children", "noSideBorders"]);

  var theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledTable, _extends({}, props, {
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
  children: PropTypes.node,
  header: PropTypes.node,
  noSideBorders: PropTypes.bool
};
Table.defaultProps = {
  noSideBorders: false
};

export default Table;
//# sourceMappingURL=Table.js.map
