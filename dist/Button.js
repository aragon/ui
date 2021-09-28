'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var index$1 = require('./index-70e12149.js');
var Layout = require('./Layout.js');
var ButtonBase = require('./ButtonBase.js');
var environment = require('./environment.js');
var Theme = require('./Theme.js');
var css = require('./css.js');
var textStyles = require('./text-styles.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./Viewport-b495052b.js');
require('./defineProperty-fdbd3c46.js');
require('./isObject-f0a96713.js');
require('./breakpoints.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./miscellaneous.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./font.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

// See src/icons/icon-size.js for the corresponding icon sizes.

const SIZE_STYLES = {
  medium: {
    textStyleName: 'body2',
    height: 5 * constants.GU,
    padding: 3 * constants.GU,
    iconPadding: 2 * constants.GU,
    minWidth: 14.5 * constants.GU,
    middleSpace: 1 * constants.GU
  },
  small: {
    textStyleName: 'body2',
    height: 4 * constants.GU,
    padding: 2 * constants.GU,
    iconPadding: 1.5 * constants.GU,
    minWidth: 13 * constants.GU,
    middleSpace: 1 * constants.GU
  },
  mini: {
    textStyleName: 'body4',
    height: 3 * constants.GU,
    padding: 1.5 * constants.GU,
    iconPadding: 1 * constants.GU,
    minWidth: 9.25 * constants.GU,
    middleSpace: 0.5 * constants.GU
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
    textStyleCss: textStyles.textStyle(textStyleName),
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
    environment.warnOnce('Button:iconOnly', 'Button: "iconOnly" is deprecated, please use "display".');
    display = 'icon';
  }

  if (mode === 'outline' || mode === 'secondary') {
    environment.warnOnce('Button:mode', `Button: the mode "${mode}" is deprecated, please use "normal".`);
    mode = 'normal';
  }

  if (size === 'normal' || size === 'large') {
    environment.warnOnce('Button:size', `Button: the size "${size}" is deprecated, please use "medium".`);
    size = 'medium';
  } // prop warnings


  if (display === 'icon' && !icon) {
    environment.warn('Button: the display "icon" was used without providing an icon.');
  }

  if (!children && !label) {
    environment.warn('Button: please provide a label.');
  }

  const theme = Theme.useTheme();
  const {
    layoutName
  } = Layout.useLayout();
  const [insideEmptyStateCard] = index$1.o('EmptyStateCard');
  const [insideHeaderSecondary] = index$1.o('Header:secondary'); // Always wide + strong when used as an empty state card action

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
  } = React.useMemo(() => modeStyles(theme, mode, disabled), [mode, theme, disabled]); // Size styles

  const {
    height,
    middleSpace,
    minWidth,
    padding,
    textStyleCss,
    width
  } = React.useMemo(() => sizeStyles(size, wide, displayIcon, displayLabel), [size, wide, displayIcon, displayLabel]); // Use the label as a title when only the icon is displayed

  if (displayIcon && !displayLabel && label && typeof label === 'string') {
    props.title = label;
  }

  const insideData = {
    size
  };
  return /*#__PURE__*/React__default["default"].createElement(_StyledButtonBase, _extends._extends({
    ref: innerRef,
    focusRingSpacing: border === '0' ? 0 : 1,
    focusRingRadius: constants.RADIUS,
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
  }), /*#__PURE__*/React__default["default"].createElement(index$1.i, {
    name: "Button",
    data: insideData
  }, children || /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, displayIcon && /*#__PURE__*/React__default["default"].createElement(index$1.i, {
    name: "Button:icon",
    data: insideData
  }, /*#__PURE__*/React__default["default"].createElement(_StyledSpan, {
    $_css13: iconColor,
    $_css14: middleSpace
  }, icon)), displayLabel && /*#__PURE__*/React__default["default"].createElement(index$1.i, {
    name: "Button:label",
    data: insideData
  }, label))));
}

Button.propTypes = {
  children: index.PropTypes.node,
  disabled: index.PropTypes.bool,
  display: index.PropTypes.oneOf(['auto', 'all', 'icon', 'label']),
  icon: index.PropTypes.node,
  innerRef: index.PropTypes.any,
  label: index.PropTypes.string,
  mode: index.PropTypes.oneOf(['normal', 'strong', 'positive', 'negative', // deprecated
  'outline', 'secondary', 'text']),
  size: index.PropTypes.oneOf(['medium', 'small', 'mini', // deprecated
  'large', 'normal']),
  wide: index.PropTypes.bool,
  // deprecated
  iconOnly: index.PropTypes.bool
};
Button.defaultProps = {
  disabled: false,
  display: 'auto',
  mode: 'normal',
  size: 'medium',
  wide: false
};
const ButtonWithRef = /*#__PURE__*/React__default["default"].forwardRef((props, ref) => /*#__PURE__*/React__default["default"].createElement(Button, _extends._extends({
  innerRef: ref
}, props)));
ButtonWithRef.Anchor = /*#__PURE__*/React__default["default"].forwardRef((props, ref) => {
  environment.warnOnce('Button.Anchor', 'Button.Anchor is deprecated: please use Button with a href prop instead.');
  return /*#__PURE__*/React__default["default"].createElement(ButtonWithRef, _extends._extends({
    ref: ref
  }, props));
});

var _StyledButtonBase = _styled__default["default"](ButtonBase["default"]).withConfig({
  displayName: "Button___StyledButtonBase",
  componentId: "sc-8npd5h-0"
})(["display:", ";align-items:center;justify-content:center;width:", ";height:", ";min-width:", ";padding:", ";", ";", ";background:", ";color:", ";white-space:nowrap;border:", ";box-shadow:", ";transition-property:transform,box-shadow;transition-duration:50ms;transition-timing-function:ease-in-out;&:active{transform:", ";box-shadow:", ";}"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6, css.unselectable, p => p.$_css7, p => p.$_css8, p => p.$_css9, p => p.$_css10, p => p.$_css11, p => p.$_css12);

var _StyledSpan = _styled__default["default"]("span").withConfig({
  displayName: "Button___StyledSpan",
  componentId: "sc-8npd5h-1"
})(["position:relative;top:-1px;display:flex;color:", ";margin-right:", ";"], p => p.$_css13, p => p.$_css14);

exports["default"] = ButtonWithRef;
//# sourceMappingURL=Button.js.map
