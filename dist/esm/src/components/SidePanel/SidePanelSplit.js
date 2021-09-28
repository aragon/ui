import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import SidePanel from './SidePanel.js';
import { useTheme } from '../../theme/Theme2.js';

function SidePanelSplit({
  children,
  ...props
}) {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledDiv, _extends({}, props, {
    $_css: SidePanel.HORIZONTAL_PADDING * 2,
    $_css2: SidePanel.HORIZONTAL_PADDING,
    $_css3: SidePanel.HORIZONTAL_PADDING
  }), /*#__PURE__*/React.createElement(Part, null, children[0]), /*#__PURE__*/React.createElement(_StyledDiv2, {
    $_css4: theme.border,
    $_css5: SidePanel.HORIZONTAL_PADDING,
    $_css6: SidePanel.HORIZONTAL_PADDING
  }), /*#__PURE__*/React.createElement(Part, null, children[1]));
}

SidePanelSplit.propTypes = {
  children: PropTypes.node
};
const Part = _styled.div.withConfig({
  displayName: "SidePanelSplit__Part",
  componentId: "sc-d0csv3-0"
})(["width:50%;"]);

var _StyledDiv = _styled("div").withConfig({
  displayName: "SidePanelSplit___StyledDiv",
  componentId: "sc-d0csv3-1"
})(["display:flex;width:calc(100% + ", "px);margin:0 -", "px;padding:", "px;"], p => p.$_css, p => p.$_css2, p => p.$_css3);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "SidePanelSplit___StyledDiv2",
  componentId: "sc-d0csv3-2"
})(["display:inline-block;border-right:1px solid ", ";margin:-", "px ", "px;"], p => p.$_css4, p => p.$_css5, p => p.$_css6);

export { SidePanelSplit as default };
//# sourceMappingURL=SidePanelSplit.js.map
