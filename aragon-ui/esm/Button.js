import { _ as _slicedToArray } from './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React, { useMemo } from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import './defineProperty-a0480c32.js';
import './toConsumableArray-127424c2.js';
import _styled from 'styled-components';
import './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import './contains-component.js';
import { unselectable } from './css.js';
import './dayjs.min-e57fb69a.js';
import './date.js';
import './miscellaneous.js';
import { warnOnce, warn } from './environment.js';
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
import { _ as _extends } from './extends-db4f0c26.js';
import { _ as _objectWithoutProperties } from './objectWithoutProperties-234758e1.js';
import { o, i } from './index-422d37c0.js';
import './isObject-3c6ec07e.js';
import './Viewport-cc7debfb.js';
import { useLayout } from './Layout.js';
import './FocusVisible.js';
import ButtonBase from './ButtonBase.js';

// See src/icons/icon-size.js for the corresponding icon sizes.

var SIZE_STYLES = {
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
  var _SIZE_STYLES$size = SIZE_STYLES[size],
      padding = _SIZE_STYLES$size.padding,
      iconPadding = _SIZE_STYLES$size.iconPadding;

  if (displayIcon && !displayLabel) {
    return '0';
  }

  if (displayIcon && displayLabel) {
    return "0 ".concat(padding, "px 0 ").concat(iconPadding, "px");
  }

  return "0 ".concat(padding, "px");
}

function getWidth(size, displayIconOnly, wide) {
  var height = SIZE_STYLES[size].height;

  if (wide) {
    return '100%';
  }

  if (displayIconOnly) {
    return "".concat(height, "px");
  }

  return 'auto';
}

function getMinWidth(size, displayLabelOnly) {
  var minWidth = SIZE_STYLES[size].minWidth;
  return displayLabelOnly ? "".concat(minWidth, "px") : '0';
} // CSS styles related to the current size


function sizeStyles(size, wide, displayIcon, displayLabel) {
  var _SIZE_STYLES$size2 = SIZE_STYLES[size],
      height = _SIZE_STYLES$size2.height,
      textStyleName = _SIZE_STYLES$size2.textStyleName,
      middleSpace = _SIZE_STYLES$size2.middleSpace;
  return {
    height: "".concat(height, "px"),
    middleSpace: displayIcon && displayLabel ? "".concat(middleSpace, "px") : '0',
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
      background: "\n        linear-gradient(\n          190deg,\n          ".concat(theme.accentStart, " -100%,\n          ").concat(theme.accentEnd, " 80%\n        )\n      "),
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
    border: "1px solid ".concat(theme.border)
  };
}

var _StyledButtonBase = _styled(ButtonBase).withConfig({
  displayName: "Button___StyledButtonBase",
  componentId: "sc-8npd5h-0"
})(["display:", ";align-items:center;justify-content:center;width:", ";height:", ";min-width:", ";padding:", ";", ";", ";background:", ";color:", ";white-space:nowrap;border:", ";box-shadow:", ";transition-property:transform,box-shadow;transition-duration:50ms;transition-timing-function:ease-in-out;&:active{transform:", ";box-shadow:", ";}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, unselectable, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
}, function (p) {
  return p._css11;
}, function (p) {
  return p._css12;
});

var _StyledSpan = _styled("span").withConfig({
  displayName: "Button___StyledSpan",
  componentId: "sc-8npd5h-1"
})(["position:relative;top:-1px;display:flex;color:", ";margin-right:", ";"], function (p) {
  return p._css13;
}, function (p) {
  return p._css14;
});

function Button(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      display = _ref.display,
      icon = _ref.icon,
      iconOnly = _ref.iconOnly,
      innerRef = _ref.innerRef,
      label = _ref.label,
      mode = _ref.mode,
      size = _ref.size,
      wide = _ref.wide,
      props = _objectWithoutProperties(_ref, ["children", "disabled", "display", "icon", "iconOnly", "innerRef", "label", "mode", "size", "wide"]);

  // backward compatibility and deprecated props
  if (iconOnly) {
    warnOnce('Button:iconOnly', 'Button: "iconOnly" is deprecated, please use "display".');
    display = 'icon';
  }

  if (mode === 'outline' || mode === 'secondary') {
    warnOnce('Button:mode', "Button: the mode \"".concat(mode, "\" is deprecated, please use \"normal\"."));
    mode = 'normal';
  }

  if (size === 'normal' || size === 'large') {
    warnOnce('Button:size', "Button: the size \"".concat(size, "\" is deprecated, please use \"medium\"."));
    size = 'medium';
  } // prop warnings


  if (display === 'icon' && !icon) {
    warn('Button: the display "icon" was used without providing an icon.');
  }

  if (!children && !label) {
    warn('Button: please provide a label.');
  }

  var theme = useTheme();

  var _useLayout = useLayout(),
      layoutName = _useLayout.layoutName;

  var _useInside = o('EmptyStateCard'),
      _useInside2 = _slicedToArray(_useInside, 1),
      insideEmptyStateCard = _useInside2[0];

  var _useInside3 = o('Header:secondary'),
      _useInside4 = _slicedToArray(_useInside3, 1),
      insideHeaderSecondary = _useInside4[0]; // Always wide + strong when used as an empty state card action


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

  var displayIcon = icon && (display === 'all' || display === 'icon');
  var displayLabel = label && (display === 'all' || display === 'label'); // Mode styles

  var _useMemo = useMemo(function () {
    return modeStyles(theme, mode, disabled);
  }, [mode, theme, disabled]),
      background = _useMemo.background,
      color = _useMemo.color,
      iconColor = _useMemo.iconColor,
      border = _useMemo.border; // Size styles


  var _useMemo2 = useMemo(function () {
    return sizeStyles(size, wide, displayIcon, displayLabel);
  }, [size, wide, displayIcon, displayLabel]),
      height = _useMemo2.height,
      middleSpace = _useMemo2.middleSpace,
      minWidth = _useMemo2.minWidth,
      padding = _useMemo2.padding,
      textStyleCss = _useMemo2.textStyleCss,
      width = _useMemo2.width; // Use the label as a title when only the icon is displayed


  if (displayIcon && !displayLabel && label && typeof label === 'string') {
    props.title = label;
  }

  var insideData = {
    size: size
  };
  return /*#__PURE__*/React.createElement(_StyledButtonBase, _extends({
    ref: innerRef,
    focusRingSpacing: border === '0' ? 0 : 1,
    focusRingRadius: RADIUS,
    disabled: disabled
  }, props, {
    _css: wide ? 'flex' : 'inline-flex',
    _css2: width,
    _css3: height,
    _css4: minWidth,
    _css5: padding,
    _css6: textStyleCss,
    _css7: background,
    _css8: color,
    _css9: border,
    _css10: disabled ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.1)',
    _css11: disabled ? 'none' : 'translateY(1px)',
    _css12: disabled ? 'none' : '0px 1px 2px rgba(0, 0, 0, 0.08)'
  }), /*#__PURE__*/React.createElement(i, {
    name: "Button",
    data: insideData
  }, children || /*#__PURE__*/React.createElement(React.Fragment, null, displayIcon && /*#__PURE__*/React.createElement(i, {
    name: "Button:icon",
    data: insideData
  }, /*#__PURE__*/React.createElement(_StyledSpan, {
    _css13: iconColor,
    _css14: middleSpace
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
var ButtonWithRef = React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Button, _extends({
    innerRef: ref
  }, props));
});
ButtonWithRef.Anchor = React.forwardRef(function (props, ref) {
  warnOnce('Button.Anchor', 'Button.Anchor is deprecated: please use Button with a href prop instead.');
  return /*#__PURE__*/React.createElement(ButtonWithRef, _extends({
    ref: ref
  }, props));
});

export default ButtonWithRef;
//# sourceMappingURL=Button.js.map
