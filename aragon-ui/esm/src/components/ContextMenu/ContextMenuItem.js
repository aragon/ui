import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { useTheme } from '../../theme/Theme2.js';
import { textStyle } from '../../style/text-styles.js';
import { unselectable } from '../../utils/css.js';

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "ContextMenuItem___StyledButtonBase",
  componentId: "sc-6mg7lj-0"
})(["display:flex;align-items:center;padding:5px 16px 5px 10px;cursor:pointer;white-space:nowrap;width:100%;", " ", ";&:active{background:", ";}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var ContextMenuItem = /*#__PURE__*/React.memo(function ContextMenuItem(props) {
  var theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledButtonBase, _extends_1({}, props, {
    _css: textStyle('body2'),
    _css2: unselectable(),
    _css3: theme.surfacePressed
  }));
});

export default ContextMenuItem;
//# sourceMappingURL=ContextMenuItem.js.map
