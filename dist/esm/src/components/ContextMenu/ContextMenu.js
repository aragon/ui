import _styled from 'styled-components';
import React, { useState, useCallback } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { animated as extendedAnimated, Spring } from '../../../node_modules/react-spring/web.js';
import ClickOutHandler from '../../../node_modules/react-onclickout/index.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import IconEllipsis from '../../icons/components/IconEllipsis.js';
import IconDown from '../../icons/components/IconDown.js';
import { useTheme } from '../../theme/Theme2.js';
import { RADIUS } from '../../style/constants.js';
import { springs } from '../../style/springs.js';

const BASE_WIDTH = 46;
const BASE_HEIGHT = 32;

function ContextMenu({
  children,
  zIndex,
  disabled
}) {
  const theme = useTheme();
  const [opened, setOpened] = useState(false);
  const handleClose = useCallback(() => {
    setOpened(false);
  }, []);
  const handleBaseButtonClick = useCallback(() => {
    setOpened(opened => !opened);
  }, []); // Increase the z-index on an opened menu, to make sure it's above any other
  // context menus below it using the same z-index (e.g. when used in a list)

  const appliedZIndex = opened ? zIndex + 1 : zIndex;
  return /*#__PURE__*/React.createElement(ClickOutHandler, {
    onClickOut: handleClose
  }, /*#__PURE__*/React.createElement(Spring, {
    config: springs.smooth,
    to: {
      openProgress: Number(opened)
    },
    native: true
  }, ({
    openProgress
  }) => /*#__PURE__*/React.createElement(_StyledMain, {
    style: {
      boxShadow: openProgress.interpolate(t => `0 4px 4px rgba(0, 0, 0, ${t * 0.03})`)
    },
    $_css: appliedZIndex
  }, /*#__PURE__*/React.createElement(_StyledButton, {
    onClick: handleBaseButtonClick,
    opened: opened,
    disabled: disabled,
    focusRingRadius: RADIUS,
    $_css2: disabled ? theme.disabledContent : opened ? theme.accent : theme.surfaceContent,
    $_css3: disabled ? theme.disabled : theme.surface,
    $_css4: disabled ? '0' : `1px solid ${theme.border}`,
    $_css5: opened ? theme.surface : theme.border,
    $_css6: disabled ? '' : `&:active {
                  background: ${theme.surfacePressed};
                  border-bottom-color: ${opened ? theme.surfacePressed : theme.border};
                }`
  }, /*#__PURE__*/React.createElement(_StyledIconEllipsis, null), /*#__PURE__*/React.createElement(extendedAnimated.div, {
    style: {
      display: 'flex',
      alignItems: 'center',
      transformOrigin: '50% 50%',
      transform: openProgress.interpolate(v => `rotate(${v * 180}deg)`)
    }
  }, /*#__PURE__*/React.createElement(_StyledIconDown, {
    size: "tiny",
    $_css7: disabled ? theme.disabledIcon : theme.surfaceIcon
  }))), opened && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_StyledAnimatedDiv, {
    onClick: handleClose,
    style: {
      opacity: openProgress,
      boxShadow: openProgress.interpolate(t => `0 4px 4px rgba(0, 0, 0, ${t * 0.03})`)
    },
    $_css8: appliedZIndex + 1,
    $_css9: BASE_HEIGHT - 1,
    $_css10: theme.surface,
    $_css11: theme.border
  }, children), /*#__PURE__*/React.createElement(_StyledDiv, {
    $_css12: appliedZIndex + 1,
    $_css13: BASE_WIDTH - 2,
    $_css14: theme.surface
  })))));
}

ContextMenu.propTypes = {
  children: PropTypes.node,
  zIndex: PropTypes.number,
  disabled: PropTypes.bool
};
ContextMenu.defaultProps = {
  zIndex: 0,
  disabled: false
};
const Main = _styled(extendedAnimated.div).withConfig({
  displayName: "ContextMenu__Main",
  componentId: "sc-ris724-0"
})(["position:relative;width:", "px;height:", "px;"], BASE_WIDTH, BASE_HEIGHT);

var _StyledMain = _styled(Main).withConfig({
  displayName: "ContextMenu___StyledMain",
  componentId: "sc-ris724-1"
})(["z-index:", ";"], p => p.$_css);

const Button = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "ContextMenu__Button",
  componentId: "sc-ris724-2"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:", "px;border-radius:", ";box-shadow:", ";"], BASE_HEIGHT, ({
  opened
}) => opened ? `${RADIUS}px ${RADIUS}px 0 0` : `${RADIUS}px`, ({
  disabled
}) => disabled ? 'none' : `0px 1px 3px rgba(0, 0, 0, 0.1)`);

var _StyledButton = _styled(Button).withConfig({
  displayName: "ContextMenu___StyledButton",
  componentId: "sc-ris724-3"
})(["color:", ";background:", ";border:", ";border-bottom-color:", ";", ""], p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6);

var _StyledIconEllipsis = _styled(IconEllipsis).withConfig({
  displayName: "ContextMenu___StyledIconEllipsis",
  componentId: "sc-ris724-4"
})([""]);

var _StyledIconDown = _styled(IconDown).withConfig({
  displayName: "ContextMenu___StyledIconDown",
  componentId: "sc-ris724-5"
})(["color:", ";"], p => p.$_css7);

var _StyledAnimatedDiv = _styled(extendedAnimated.div).withConfig({
  displayName: "ContextMenu___StyledAnimatedDiv",
  componentId: "sc-ris724-6"
})(["z-index:", ";overflow:hidden;position:absolute;top:", "px;right:0;background:", ";border:1px solid ", ";border-radius:3px 0 3px 3px;"], p => p.$_css8, p => p.$_css9, p => p.$_css10, p => p.$_css11);

var _StyledDiv = _styled("div").withConfig({
  displayName: "ContextMenu___StyledDiv",
  componentId: "sc-ris724-7"
})(["z-index:", ";position:absolute;bottom:0;right:1px;height:1px;width:", "px;background:", ";"], p => p.$_css12, p => p.$_css13, p => p.$_css14);

export { ContextMenu as default };
//# sourceMappingURL=ContextMenu.js.map
