import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import ButtonIcon from '../Button/ButtonIcon.js';
import { useTheme } from '../../theme/Theme2.js';
import IconUp from '../../icons/components/IconUp.js';
import IconDown from '../../icons/components/IconDown.js';
import { RADIUS } from '../../style/constants.js';

function ToggleButton({
  onClick,
  opened
}) {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledButtonIcon, {
    label: opened ? 'Close' : 'Open',
    focusRingRadius: RADIUS,
    onClick: onClick,
    $_css: theme.surfaceContentSecondary
  }, /*#__PURE__*/React.createElement(_StyledDiv, {
    $_css2: opened ? 1 : 0,
    $_css3: opened ? 1 : 0
  }, /*#__PURE__*/React.createElement(IconUp, {
    size: "small"
  })), /*#__PURE__*/React.createElement(_StyledDiv2, {
    $_css4: opened ? -1 : 0,
    $_css5: opened ? -1 : 0
  }, /*#__PURE__*/React.createElement(IconDown, {
    size: "small"
  })));
}

ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired
};

var _StyledButtonIcon = _styled(ButtonIcon).withConfig({
  displayName: "ToggleButton___StyledButtonIcon",
  componentId: "sc-1fkpeh6-0"
})(["display:flex;flex-direction:column;color:", ";& > div{display:flex;transform-origin:50% 50%;transition:transform 250ms ease-in-out;}"], p => p.$_css);

var _StyledDiv = _styled("div").withConfig({
  displayName: "ToggleButton___StyledDiv",
  componentId: "sc-1fkpeh6-1"
})(["transform:rotate3d(", ",0,0,180deg);transform:rotate3d(0,0,", ",180deg);"], p => p.$_css2, p => p.$_css3);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "ToggleButton___StyledDiv2",
  componentId: "sc-1fkpeh6-2"
})(["transform:rotate3d(", ",0,0,180deg);transform:rotate3d(0,0,", ",180deg);"], p => p.$_css4, p => p.$_css5);

export { ToggleButton };
//# sourceMappingURL=ToggleButton.js.map
