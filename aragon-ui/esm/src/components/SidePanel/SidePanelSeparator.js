import React$1 from 'react';
import _styled$1 from 'styled-components';
import { useTheme } from '../../theme/Theme2.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import SidePanel$1 from './SidePanel.js';

var _StyledDiv = _styled$1("div").withConfig({
  displayName: "SidePanelSeparator___StyledDiv",
  componentId: "sc-75c7uf-0"
})(["width:calc(100% + ", "px);margin:0 -", "px;height:1px;background:", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

function SidePanelSeparator(props) {
  var theme = useTheme();
  return /*#__PURE__*/React$1.createElement(_StyledDiv, _extends_1({}, props, {
    _css: SidePanel$1.HORIZONTAL_PADDING * 2,
    _css2: SidePanel$1.HORIZONTAL_PADDING,
    _css3: theme.border
  }));
}

export default SidePanelSeparator;
//# sourceMappingURL=SidePanelSeparator.js.map
