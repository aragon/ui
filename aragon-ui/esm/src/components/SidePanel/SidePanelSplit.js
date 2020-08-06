import React$1 from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import _styled$1 from 'styled-components';
import { useTheme } from '../../theme/Theme2.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import SidePanel$1 from './SidePanel.js';

var _StyledDiv = _styled$1("div").withConfig({
  displayName: "SidePanelSplit___StyledDiv",
  componentId: "d0csv3-0"
})(["display:flex;width:calc(100% + ", "px);margin:0 -", "px;padding:", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledDiv2 = _styled$1("div").withConfig({
  displayName: "SidePanelSplit___StyledDiv2",
  componentId: "d0csv3-1"
})(["display:inline-block;border-right:1px solid ", ";margin:-", "px ", "px;"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

function SidePanelSplit(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties$1(_ref, ["children"]);

  var theme = useTheme();
  return /*#__PURE__*/React$1.createElement(_StyledDiv, _extends_1({}, props, {
    _css: SidePanel$1.HORIZONTAL_PADDING * 2,
    _css2: SidePanel$1.HORIZONTAL_PADDING,
    _css3: SidePanel$1.HORIZONTAL_PADDING
  }), /*#__PURE__*/React$1.createElement(Part, null, children[0]), /*#__PURE__*/React$1.createElement(_StyledDiv2, {
    _css4: theme.border,
    _css5: SidePanel$1.HORIZONTAL_PADDING,
    _css6: SidePanel$1.HORIZONTAL_PADDING
  }), /*#__PURE__*/React$1.createElement(Part, null, children[1]));
}

SidePanelSplit.propTypes = {
  children: propTypes.node
};
var Part = _styled$1.div.withConfig({
  displayName: "SidePanelSplit__Part",
  componentId: "d0csv3-2"
})(["width:50%;"]);

export default SidePanelSplit;
//# sourceMappingURL=SidePanelSplit.js.map
