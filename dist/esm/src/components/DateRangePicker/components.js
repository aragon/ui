import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled, { css } from 'styled-components';
import React from 'react';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { useTheme } from '../../theme/Theme2.js';
import IconLeft from '../../icons/components/IconLeft.js';
import IconRight from '../../icons/components/IconRight.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

const HoverIndicator = _styled.span.withConfig({
  displayName: "components__HoverIndicator",
  componentId: "sc-lxakqh-0"
})(["width:100%;height:100%;position:absolute;border-radius:50%;", ""], ({
  theme,
  selected
}) => css(["background:", ";border:2px solid ", ";"], selected ? theme.selected : theme.surface, theme.accent));

const ArrowButton = props => {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledButtonBase, _extends({
    focusRingRadius: GU * 2
  }, props, {
    $_css: theme.hint
  }));
};

const SelectorWrapper = _styled.div.withConfig({
  displayName: "components__SelectorWrapper",
  componentId: "sc-lxakqh-1"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:", "px;span{", "}"], 1 * GU, ({
  small,
  theme
}) => css(["", ";", ""], textStyle(small ? 'label2' : 'body2'), small && css(["color:", ";font-weight:600;"], theme.hint))); // eslint-disable-next-line react/prop-types

function Selector({
  prev,
  next,
  children,
  small
}) {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(SelectorWrapper, {
    small: small,
    theme: theme
  }, /*#__PURE__*/React.createElement(ArrowButton, {
    onClick: prev
  }, /*#__PURE__*/React.createElement(IconLeft, {
    size: "small"
  })), /*#__PURE__*/React.createElement("span", null, children), /*#__PURE__*/React.createElement(ArrowButton, {
    onClick: next
  }, /*#__PURE__*/React.createElement(IconRight, {
    size: "small"
  })));
}

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "components___StyledButtonBase",
  componentId: "sc-lxakqh-2"
})(["font-size:9px;padding:5px 4px 0 4px;margin-top:-4px;color:", ";&:hover{color:inherit;}"], p => p.$_css);

export { HoverIndicator, Selector };
//# sourceMappingURL=components.js.map
