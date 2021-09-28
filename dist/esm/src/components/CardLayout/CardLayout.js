import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { Inside as i } from '../../../node_modules/use-inside/dist/index.js';
import { useLayout } from '../Layout/Layout.js';
import { GU } from '../../style/constants.js';

function CardLayout({
  children,
  columnWidthMin,
  rowHeight,
  ...props
}) {
  const {
    layoutName
  } = useLayout();
  const fullWidth = layoutName === 'small';
  const gridAutoRowValue = rowHeight === 'auto' ? rowHeight : `${rowHeight}px`;
  return /*#__PURE__*/React.createElement(i, {
    name: "CardLayout"
  }, /*#__PURE__*/React.createElement(_StyledDiv, _extends({}, props, {
    $_css: 2 * GU,
    $_css2: fullWidth ? 'auto-fit' : 'auto-fill',
    $_css3: columnWidthMin,
    $_css4: gridAutoRowValue,
    $_css5: fullWidth ? 2 * GU : 0,
    $_css6: 3 * GU
  }), children));
}

CardLayout.propTypes = {
  children: PropTypes.node,
  columnWidthMin: PropTypes.number,
  rowHeight: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number])
};
CardLayout.defaultProps = {
  columnWidthMin: 21 * GU,
  rowHeight: 21 * GU
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "CardLayout___StyledDiv",
  componentId: "sc-p97qvl-0"
})(["display:grid;grid-gap:", "px;grid-auto-flow:row;grid-template-columns:repeat( ", ",minmax(", "px,1fr) );grid-auto-rows:", ";align-items:start;padding:0 ", "px ", "px;margin:0 auto;"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6);

export { CardLayout, CardLayout as default };
//# sourceMappingURL=CardLayout.js.map
