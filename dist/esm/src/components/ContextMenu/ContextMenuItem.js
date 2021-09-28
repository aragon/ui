import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { useTheme } from '../../theme/Theme2.js';
import { textStyle } from '../../style/text-styles.js';
import { unselectable } from '../../utils/css.js';

const ContextMenuItem = /*#__PURE__*/React.memo(function ContextMenuItem(props) {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledButtonBase, _extends({}, props, {
    $_css: textStyle('body2'),
    $_css2: unselectable(),
    $_css3: theme.surfacePressed
  }));
});

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "ContextMenuItem___StyledButtonBase",
  componentId: "sc-6mg7lj-0"
})(["display:flex;align-items:center;padding:5px 16px 5px 10px;cursor:pointer;white-space:nowrap;width:100%;", " ", ";&:active{background:", ";}"], p => p.$_css, p => p.$_css2, p => p.$_css3);

export { ContextMenuItem as default };
//# sourceMappingURL=ContextMenuItem.js.map
