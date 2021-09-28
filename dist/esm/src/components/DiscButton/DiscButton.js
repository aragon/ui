import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { useTheme } from '../../theme/Theme2.js';
import { GU } from '../../style/constants.js';

const DiscButton = /*#__PURE__*/React.forwardRef(({
  children,
  description,
  size,
  ...props
}, ref) => {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledButtonBase, _extends({
    ref: ref,
    focusRingSpacing: 4,
    focusRingRadius: size,
    title: description
  }, props, {
    $_css: size,
    $_css2: size,
    $_css3: theme.help,
    $_css4: theme.helpContent
  }), children);
});
DiscButton.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  size: PropTypes.number
};
DiscButton.defaultProps = {
  size: 5 * GU
};

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "DiscButton___StyledButtonBase",
  componentId: "sc-1ay99f2-0"
})(["display:flex;align-items:center;justify-content:center;width:", "px;height:", "px;background:", ";color:", ";border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,0.25);transition-property:transform,box-shadow;transition-duration:50ms;transition-timing-function:ease-in-out;&:active{transform:translateY(1px);box-shadow:0px 1px 3px rgba(0,0,0,0.125);}"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4);

export { DiscButton as default };
//# sourceMappingURL=DiscButton.js.map
