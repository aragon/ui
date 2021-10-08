import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { Inside as i } from '../../../node_modules/use-inside/dist/index.js';
import { useLayout } from '../Layout/Layout.js';
import { GU } from '../../style/constants.js';

var _StyledDiv = _styled("div").withConfig({
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
      props = objectWithoutProperties(_ref, ["children", "columnWidthMin", "rowHeight"]);

  var _useLayout = useLayout(),
      layoutName = _useLayout.layoutName;

  var fullWidth = layoutName === 'small';
  var gridAutoRowValue = rowHeight === 'auto' ? rowHeight : "".concat(rowHeight, "px");
  return /*#__PURE__*/React.createElement(i, {
    name: "CardLayout"
  }, /*#__PURE__*/React.createElement(_StyledDiv, _extends_1({}, props, {
    _css: 2 * GU,
    _css2: fullWidth ? 'auto-fit' : 'auto-fill',
    _css3: columnWidthMin,
    _css4: gridAutoRowValue,
    _css5: fullWidth ? 2 * GU : 0,
    _css6: 3 * GU
  }), children));
}

CardLayout.propTypes = {
  children: propTypes.node,
  columnWidthMin: propTypes.number,
  rowHeight: propTypes.oneOfType([propTypes.oneOf(['auto']), propTypes.number])
};
CardLayout.defaultProps = {
  columnWidthMin: 21 * GU,
  rowHeight: 21 * GU
};

export default CardLayout;
export { CardLayout };
//# sourceMappingURL=CardLayout.js.map
