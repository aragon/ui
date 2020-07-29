import { _ as _slicedToArray } from './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import './defineProperty-a0480c32.js';
import './toConsumableArray-127424c2.js';
import _styled from 'styled-components';
import './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import './contains-component.js';
import './css.js';
import './dayjs.min-e57fb69a.js';
import './date.js';
import './miscellaneous.js';
import './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import './web3.js';
import { RADIUS, GU } from './constants.js';
import './breakpoints.js';
import './springs.js';
import { textStyle } from './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import { useTheme } from './Theme.js';
import './extends-db4f0c26.js';
import { _ as _objectWithoutProperties } from './objectWithoutProperties-234758e1.js';
import { o } from './index-422d37c0.js';
import './FocusVisible.js';
import ButtonBase from './ButtonBase.js';

var _StyledButtonBase = _styled(ButtonBase).withConfig({
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

var BadgeBase = React.memo(function BadgeBase(_ref) {
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
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["badgeRef", "children", "className", "compact", "disabled", "href", "icon", "label", "labelStyle", "onClick", "style", "title"]);

  var theme = useTheme();

  var _useInside = o('DropDown'),
      _useInside2 = _slicedToArray(_useInside, 1),
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
  badgeRef: PropTypes.any,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  className: PropTypes.string,
  compact: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.node.isRequired,
  labelStyle: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  title: PropTypes.string
};

export default BadgeBase;
//# sourceMappingURL=BadgeBase.js.map
