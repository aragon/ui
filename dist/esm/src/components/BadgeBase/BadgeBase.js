import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { useInside as o } from '../../../node_modules/use-inside/dist/index.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { useTheme } from '../../theme/Theme2.js';
import { RADIUS, GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

const BadgeBase = /*#__PURE__*/React.memo(function BadgeBase({
  badgeRef,
  children,
  className,
  compact,
  disabled,
  href,
  icon,
  label,
  labelStyle,
  onClick,
  style,
  title,
  ...props
}) {
  const theme = useTheme();
  const [insideDropDownMenu] = o('DropDown');

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
    $_css: theme.badgeContent,
    $_css2: 3 * GU,
    $_css3: compact ? 'transparent' : theme.badge,
    $_css4: insideDropDownMenu ? 'cursor: pointer' : '',
    $_css5: !disabled && compact ? `background: ${theme.badgePressed}` : ''
  }, /*#__PURE__*/React.createElement(_StyledDiv, {
    className: className,
    style: style,
    $_css6: compact ? `
                  padding: 0 ${1 * GU}px;
                  border-radius: 2px;
                ` : `
                  padding-left: ${(icon ? 0 : 1.5) * GU}px;
                  padding-right: ${(icon ? 1 : 1.5) * GU}px;
                  border-radius: ${RADIUS}px;
                `
  }, icon, /*#__PURE__*/React.createElement(_StyledSpan, {
    $_css7: textStyle('body2'),
    $_css8: labelStyle
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

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "BadgeBase___StyledButtonBase",
  componentId: "sc-4zaahn-0"
})(["display:inline-flex;overflow:hidden;color:", ";height:", "px;background:", ";", ";&:active{", ";}"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5);

var _StyledDiv = _styled("div").withConfig({
  displayName: "BadgeBase___StyledDiv",
  componentId: "sc-4zaahn-1"
})(["overflow:hidden;display:flex;align-items:center;text-decoration:none;", ";"], p => p.$_css6);

var _StyledSpan = _styled("span").withConfig({
  displayName: "BadgeBase___StyledSpan",
  componentId: "sc-4zaahn-2"
})(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;", " ", ""], p => p.$_css7, p => p.$_css8);

export { BadgeBase as default };
//# sourceMappingURL=BadgeBase.js.map
