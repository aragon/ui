import slicedToArray from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { useInside as o } from '../../../node_modules/use-inside/dist/index.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { useTheme } from '../../theme/Theme2.js';
import { RADIUS, GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "BadgeBase___StyledButtonBase",
  componentId: "sc-4zaahn-0"
})(["display:inline-flex;overflow:hidden;color:", ";height:", "px;background:", ";", ";&:active{", ";}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledDiv = _styled("div").withConfig({
  displayName: "BadgeBase___StyledDiv",
  componentId: "sc-4zaahn-1"
})(["overflow:hidden;display:flex;align-items:center;text-decoration:none;", ";"], function (p) {
  return p._css6;
});

var _StyledSpan = _styled("span").withConfig({
  displayName: "BadgeBase___StyledSpan",
  componentId: "sc-4zaahn-2"
})(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;", " ", ""], function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
});

var BadgeBase = /*#__PURE__*/React.memo(function BadgeBase(_ref) {
  var badgeRef = _ref.badgeRef,
      children = _ref.children,
      className = _ref.className,
      compact = _ref.compact,
      disabled = _ref.disabled,
      href = _ref.href,
      icon = _ref.icon,
      label = _ref.label,
      labelStyle = _ref.labelStyle,
      onClick = _ref.onClick,
      style = _ref.style,
      title = _ref.title;
      objectWithoutProperties(_ref, ["badgeRef", "children", "className", "compact", "disabled", "href", "icon", "label", "labelStyle", "onClick", "style", "title"]);

  var theme = useTheme();

  var _useInside = o('DropDown'),
      _useInside2 = slicedToArray(_useInside, 1),
      insideDropDownMenu = _useInside2[0];

  if (insideDropDownMenu) {
    disabled = true;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_StyledButtonBase, {
    ref: badgeRef,
    title: title,
    disabled: disabled,
    element: href || disabled ? 'a' : 'button',
    onClick: !disabled ? onClick : undefined,
    href: !disabled ? href : undefined,
    focusRingRadius: RADIUS,
    _css: theme.badgeContent,
    _css2: 3 * GU,
    _css3: compact ? 'transparent' : theme.badge,
    _css4: insideDropDownMenu ? 'cursor: pointer' : '',
    _css5: !disabled && compact ? "background: ".concat(theme.badgePressed) : ''
  }, /*#__PURE__*/React.createElement(_StyledDiv, {
    className: className,
    style: style,
    _css6: compact ? "\n                  padding: 0 ".concat(1 * GU, "px;\n                  border-radius: 2px;\n                ") : "\n                  padding-left: ".concat((icon ? 0 : 1.5) * GU, "px;\n                  padding-right: ").concat((icon ? 1 : 1.5) * GU, "px;\n                  border-radius: ").concat(RADIUS, "px;\n                ")
  }, icon, /*#__PURE__*/React.createElement(_StyledSpan, {
    _css7: textStyle('body2'),
    _css8: labelStyle
  }, label))), typeof children === 'function' ? children(disabled) // whether popover is disabled
  : children);
});
BadgeBase.propTypes = {
  badgeRef: propTypes.any,
  children: propTypes.oneOfType([propTypes.node, propTypes.func]),
  className: propTypes.string,
  compact: propTypes.bool,
  disabled: propTypes.bool,
  href: propTypes.string,
  icon: propTypes.node,
  label: propTypes.node.isRequired,
  labelStyle: propTypes.string,
  onClick: propTypes.func,
  style: propTypes.object,
  title: propTypes.string
};

export default BadgeBase;
//# sourceMappingURL=BadgeBase.js.map
