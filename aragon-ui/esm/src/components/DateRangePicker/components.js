import React$1 from 'react';
import _styled$1, { css } from 'styled-components';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';
import { useTheme } from '../../theme/Theme2.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import IconLeft$1 from '../../icons/components/IconLeft.js';
import IconRight$1 from '../../icons/components/IconRight.js';

var HoverIndicator = _styled$1.span.withConfig({
  displayName: "components__HoverIndicator",
  componentId: "lxakqh-0"
})(["width:100%;height:100%;position:absolute;border-radius:50%;", ""], function (_ref) {
  var theme = _ref.theme,
      selected = _ref.selected;
  return css(["background:", ";border:2px solid ", ";"], selected ? theme.selected : theme.surface, theme.accent);
});

var _StyledButtonBase = _styled$1(ButtonBaseWithFocus).withConfig({
  displayName: "components___StyledButtonBase",
  componentId: "lxakqh-1"
})(["font-size:9px;padding:5px 4px 0 4px;margin-top:-4px;color:", ";&:hover{color:inherit;}"], function (p) {
  return p._css;
});

var ArrowButton = function ArrowButton(props) {
  var theme = useTheme();
  return /*#__PURE__*/React$1.createElement(_StyledButtonBase, _extends_1({
    focusRingRadius: GU * 2
  }, props, {
    _css: theme.hint
  }));
};

var SelectorWrapper = _styled$1.div.withConfig({
  displayName: "components__SelectorWrapper",
  componentId: "lxakqh-2"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:", "px;span{", "}"], 1 * GU, function (_ref2) {
  var small = _ref2.small,
      theme = _ref2.theme;
  return css(["", ";", ""], textStyle(small ? 'label2' : 'body2'), small && css(["color:", ";font-weight:600;"], theme.hint));
}); // eslint-disable-next-line react/prop-types

function Selector(_ref3) {
  var prev = _ref3.prev,
      next = _ref3.next,
      children = _ref3.children,
      small = _ref3.small;
  var theme = useTheme();
  return /*#__PURE__*/React$1.createElement(SelectorWrapper, {
    small: small,
    theme: theme
  }, /*#__PURE__*/React$1.createElement(ArrowButton, {
    onClick: prev
  }, /*#__PURE__*/React$1.createElement(IconLeft$1, {
    size: "small"
  })), /*#__PURE__*/React$1.createElement("span", null, children), /*#__PURE__*/React$1.createElement(ArrowButton, {
    onClick: next
  }, /*#__PURE__*/React$1.createElement(IconRight$1, {
    size: "small"
  })));
}

export { HoverIndicator, Selector };
//# sourceMappingURL=components.js.map
