import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React, { useMemo } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { useInside as o, Inside as i } from '../../../node_modules/use-inside/dist/index.js';
import { useLayout } from '../Layout/Layout.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { warnOnce, warn } from '../../utils/environment.js';
import { useTheme } from '../../theme/Theme2.js';
import { unselectable } from '../../utils/css.js';
import { textStyle } from '../../style/text-styles.js';
import { RADIUS, GU } from '../../style/constants.js';

// See src/icons/icon-size.js for the corresponding icon sizes.

const SIZE_STYLES = {
  medium: {
    textStyleName: 'body2',
    height: 5 * GU,
    padding: 3 * GU,
    iconPadding: 2 * GU,
    minWidth: 14.5 * GU,
    middleSpace: 1 * GU
  },
  small: {
    textStyleName: 'body2',
    height: 4 * GU,
    padding: 2 * GU,
    iconPadding: 1.5 * GU,
    minWidth: 13 * GU,
    middleSpace: 1 * GU
  },
  mini: {
    textStyleName: 'body4',
    height: 3 * GU,
    padding: 1.5 * GU,
    iconPadding: 1 * GU,
    minWidth: 9.25 * GU,
    middleSpace: 0.5 * GU
  }
};

function getPadding(size, displayIcon, displayLabel) {
  const {
    padding,
    iconPadding
  } = SIZE_STYLES[size];

  if (displayIcon && !displayLabel) {
    return '0';
  }

  if (displayIcon && displayLabel) {
    return `0 ${padding}px 0 ${iconPadding}px`;
  }

  return `0 ${padding}px`;
}

function getWidth(size, displayIconOnly, wide) {
  const {
    height
  } = SIZE_STYLES[size];

  if (wide) {
    return '100%';
  }

  if (displayIconOnly) {
    return `${height}px`;
  }

  return 'auto';
}

function getMinWidth(size, displayLabelOnly) {
  const {
    minWidth
  } = SIZE_STYLES[size];
  return displayLabelOnly ? `${minWidth}px` : '0';
} // CSS styles related to the current size


function sizeStyles(size, wide, displayIcon, displayLabel) {
  const {
    height,
    textStyleName,
    middleSpace
  } = SIZE_STYLES[size];
  return {
    height: `${height}px`,
    middleSpace: displayIcon && displayLabel ? `${middleSpace}px` : '0',
    minWidth: getMinWidth(size, !displayIcon && displayLabel),
    padding: getPadding(size, displayIcon, displayLabel),
    textStyleCss: textStyle(textStyleName),
    width: getWidth(size, displayIcon && !displayLabel, wide)
  };
} // CSS styles related to the current mode


function modeStyles(theme, mode, disabled) {
  if (disabled) {
    return {
      background: theme.disabled,
      color: theme.disabledContent,
      iconColor: theme.disabledContent,
      border: '0'
    };
  }

  if (mode === 'strong') {
    return {
      background: `
        linear-gradient(
          190deg,
          ${theme.accentStart} -100%,
          ${theme.accentEnd} 80%
        )
      `,
      color: theme.accentContent,
      iconColor: theme.accentContent,
      border: '0'
    };
  }

  if (mode === 'positive') {
    return {
      background: theme.positive,
      color: theme.positiveContent,
      iconColor: theme.positiveContent,
      border: '0'
    };
  }

  if (mode === 'negative') {
    return {
      background: theme.negative,
      color: theme.negativeContent,
      iconColor: theme.negativeContent,
      border: '0'
    };
  }

  return {
    background: theme.surfaceInteractive,
    color: theme.surfaceContent,
    iconColor: theme.surfaceIcon,
    border: `1px solid ${theme.border}`
  };
}

function Button({
  children,
  disabled,
  display,
  icon,
  iconOnly,
  innerRef,
  label,
  mode,
  size,
  wide,
  ...props
}) {
  // backward compatibility and deprecated props
  if (iconOnly) {
    warnOnce('Button:iconOnly', 'Button: "iconOnly" is deprecated, please use "display".');
    display = 'icon';
  }

  if (mode === 'outline' || mode === 'secondary') {
    warnOnce('Button:mode', `Button: the mode "${mode}" is deprecated, please use "normal".`);
    mode = 'normal';
  }

  if (size === 'normal' || size === 'large') {
    warnOnce('Button:size', `Button: the size "${size}" is deprecated, please use "medium".`);
    size = 'medium';
  } // prop warnings


  if (display === 'icon' && !icon) {
    warn('Button: the display "icon" was used without providing an icon.');
  }

  if (!children && !label) {
    warn('Button: please provide a label.');
  }

  const theme = useTheme();
  const {
    layoutName
  } = useLayout();
  const [insideEmptyStateCard] = o('EmptyStateCard');
  const [insideHeaderSecondary] = o('Header:secondary'); // Always wide + strong when used as an empty state card action

  if (insideEmptyStateCard) {
    mode = 'strong';
    wide = true;
  } // Alternate between icon and label automatically when used in Header


  if (insideHeaderSecondary && display === 'auto' && icon && label) {
    display = layoutName === 'small' ? 'icon' : 'label';
  } // Otherwise, display both


  if (display === 'auto') {
    display = 'all';
  }

  const displayIcon = icon && (display === 'all' || display === 'icon');
  const displayLabel = label && (display === 'all' || display === 'label'); // Mode styles

  const {
    background,
    color,
    iconColor,
    border
  } = useMemo(() => modeStyles(theme, mode, disabled), [mode, theme, disabled]); // Size styles

  const {
    height,
    middleSpace,
    minWidth,
    padding,
    textStyleCss,
    width
  } = useMemo(() => sizeStyles(size, wide, displayIcon, displayLabel), [size, wide, displayIcon, displayLabel]); // Use the label as a title when only the icon is displayed

  if (displayIcon && !displayLabel && label && typeof label === 'string') {
    props.title = label;
  }

  const insideData = {
    size
  };
  return /*#__PURE__*/React.createElement(_StyledButtonBase, _extends({
    ref: innerRef,
    focusRingSpacing: border === '0' ? 0 : 1,
    focusRingRadius: RADIUS,
    disabled: disabled
  }, props, {
    $_css: wide ? 'flex' : 'inline-flex',
    $_css2: width,
    $_css3: height,
    $_css4: minWidth,
    $_css5: padding,
    $_css6: textStyleCss,
    $_css7: background,
    $_css8: color,
    $_css9: border,
    $_css10: disabled ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.1)',
    $_css11: disabled ? 'none' : 'translateY(1px)',
    $_css12: disabled ? 'none' : '0px 1px 2px rgba(0, 0, 0, 0.08)'
  }), /*#__PURE__*/React.createElement(i, {
    name: "Button",
    data: insideData
  }, children || /*#__PURE__*/React.createElement(React.Fragment, null, displayIcon && /*#__PURE__*/React.createElement(i, {
    name: "Button:icon",
    data: insideData
  }, /*#__PURE__*/React.createElement(_StyledSpan, {
    $_css13: iconColor,
    $_css14: middleSpace
  }, icon)), displayLabel && /*#__PURE__*/React.createElement(i, {
    name: "Button:label",
    data: insideData
  }, label))));
}

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  display: PropTypes.oneOf(['auto', 'all', 'icon', 'label']),
  icon: PropTypes.node,
  innerRef: PropTypes.any,
  label: PropTypes.string,
  mode: PropTypes.oneOf(['normal', 'strong', 'positive', 'negative', // deprecated
  'outline', 'secondary', 'text']),
  size: PropTypes.oneOf(['medium', 'small', 'mini', // deprecated
  'large', 'normal']),
  wide: PropTypes.bool,
  // deprecated
  iconOnly: PropTypes.bool
};
Button.defaultProps = {
  disabled: false,
  display: 'auto',
  mode: 'normal',
  size: 'medium',
  wide: false
};
const ButtonWithRef = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(Button, _extends({
  innerRef: ref
}, props)));
ButtonWithRef.Anchor = /*#__PURE__*/React.forwardRef((props, ref) => {
  warnOnce('Button.Anchor', 'Button.Anchor is deprecated: please use Button with a href prop instead.');
  return /*#__PURE__*/React.createElement(ButtonWithRef, _extends({
    ref: ref
  }, props));
});

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "Button___StyledButtonBase",
  componentId: "sc-8npd5h-0"
})(["display:", ";align-items:center;justify-content:center;width:", ";height:", ";min-width:", ";padding:", ";", ";", ";background:", ";color:", ";white-space:nowrap;border:", ";box-shadow:", ";transition-property:transform,box-shadow;transition-duration:50ms;transition-timing-function:ease-in-out;&:active{transform:", ";box-shadow:", ";}"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6, unselectable, p => p.$_css7, p => p.$_css8, p => p.$_css9, p => p.$_css10, p => p.$_css11, p => p.$_css12);

var _StyledSpan = _styled("span").withConfig({
  displayName: "Button___StyledSpan",
  componentId: "sc-8npd5h-1"
})(["position:relative;top:-1px;display:flex;color:", ";margin-right:", ";"], p => p.$_css13, p => p.$_css14);

export { ButtonWithRef as default };
//# sourceMappingURL=Button.js.map
