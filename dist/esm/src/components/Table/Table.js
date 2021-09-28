import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { useTheme } from '../../theme/Theme2.js';

function Table({
  header,
  children,
  noSideBorders,
  ...props
}) {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledTable, _extends({}, props, {
    $_css: theme.border,
    $_css2: theme.border,
    $_css3: noSideBorders ? '0' : `1px solid ${theme.border}`,
    $_css4: noSideBorders ? '0' : `1px solid ${theme.border}`,
    $_css5: noSideBorders ? '0' : '3px',
    $_css6: noSideBorders ? '0' : '3px',
    $_css7: noSideBorders ? '0' : '3px',
    $_css8: noSideBorders ? '0' : '3px'
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

var _StyledTable = _styled("table").withConfig({
  displayName: "Table___StyledTable",
  componentId: "sc-uvcan9-0"
})(["width:100%;border-spacing:0;td{border-bottom:1px solid ", ";}tr:first-child td{border-top:1px solid ", ";}td:first-child{border-left:", ";}td:last-child{border-right:", ";}tr:first-child td:first-child{border-top-left-radius:", ";}tr:first-child td:last-child{border-top-right-radius:", ";}tr:last-child td:first-child{border-bottom-left-radius:", ";}tr:last-child td:last-child{border-bottom-right-radius:", ";}"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6, p => p.$_css7, p => p.$_css8);

export { Table as default };
//# sourceMappingURL=Table.js.map
