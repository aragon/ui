import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import ButtonWithRef from './Button.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { warnOnce } from '../../utils/environment.js';
import { GU } from '../../style/constants.js';

function ButtonIcon({
  label,
  children,
  mode,
  ...props
}) {
  if (mode !== undefined) {
    warnOnce('ButtonIcon:mode', 'ButtonIcon: the mode prop is deprecated. Please use Button with the icon prop instead.');
  }

  if (mode === 'button') {
    return /*#__PURE__*/React.createElement(ButtonWithRef, _extends({
      label: label,
      icon: children,
      display: "icon"
    }, props));
  }

  return /*#__PURE__*/React.createElement(_StyledButtonBase, _extends({
    title: label
  }, props, {
    $_css: 4 * GU,
    $_css2: 4 * GU
  }), children);
}

ButtonIcon.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  // deprecated
  mode: PropTypes.oneOf(['button'])
};

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "ButtonIcon___StyledButtonBase",
  componentId: "sc-1e3i514-0"
})(["display:inline-flex;justify-content:center;align-items:center;width:", "px;height:", "px;&:active{background:rgba(220,234,239,0.3);}"], p => p.$_css, p => p.$_css2);

export { ButtonIcon as default };
//# sourceMappingURL=ButtonIcon.js.map
