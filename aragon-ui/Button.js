'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('./toConsumableArray-d8a4a2c3.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-2a661a20.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
var css = require('./css.js');
require('./dayjs.min-e07657bf.js');
require('./date.js');
require('./miscellaneous.js');
var environment = require('./environment.js');
require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
require('./web3.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
var textStyles = require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
var index$1 = require('./index-ecc57c9f.js');
require('./isObject-ec755c87.js');
require('./Viewport-15101437.js');
var Layout = require('./Layout.js');
require('./FocusVisible.js');
var ButtonBase = require('./ButtonBase.js');

// See src/icons/icon-size.js for the corresponding icon sizes.

var SIZE_STYLES = {
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

var _StyledButtonBase = _styled__default(ButtonBase.default).withConfig({
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
}, css.unselectable, function (p) {
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

var _StyledSpan = _styled__default("span").withConfig({
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
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["children", "disabled", "display", "icon", "iconOnly", "innerRef", "label", "mode", "size", "wide"]);

  // backward compatibility and deprecated props
  if (iconOnly) {
    environment.warnOnce('Button:iconOnly', 'Button: "iconOnly" is deprecated, please use "display".');
    display = 'icon';
  }

  if (mode === 'outline' || mode === 'secondary') {
    environment.warnOnce('Button:mode', "Button: the mode \"".concat(mode, "\" is deprecated, please use \"normal\"."));
    mode = 'normal';
  }

  if (size === 'normal' || size === 'large') {
    environment.warnOnce('Button:size', "Button: the size \"".concat(size, "\" is deprecated, please use \"medium\"."));
    size = 'medium';
  } // prop warnings


  if (display === 'icon' && !icon) {
    environment.warn('Button: the display "icon" was used without providing an icon.');
  }

  if (!children && !label) {
    environment.warn('Button: please provide a label.');
  }

  var theme = Theme.useTheme();

  var _useLayout = Layout.useLayout(),
      layoutName = _useLayout.layoutName;

  var _useInside = index$1.o('EmptyStateCard'),
      _useInside2 = slicedToArray._slicedToArray(_useInside, 1),
      insideEmptyStateCard = _useInside2[0];

  var _useInside3 = index$1.o('Header:secondary'),
      _useInside4 = slicedToArray._slicedToArray(_useInside3, 1),
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

  var _useMemo = React.useMemo(function () {
    return modeStyles(theme, mode, disabled);
  }, [mode, theme, disabled]),
      background = _useMemo.background,
      color = _useMemo.color,
      iconColor = _useMemo.iconColor,
      border = _useMemo.border; // Size styles


  var _useMemo2 = React.useMemo(function () {
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
  return /*#__PURE__*/React__default.createElement(_StyledButtonBase, _extends._extends({
    ref: innerRef,
    focusRingSpacing: border === '0' ? 0 : 1,
    focusRingRadius: constants.RADIUS,
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
  }), /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Button",
    data: insideData
  }, children || /*#__PURE__*/React__default.createElement(React__default.Fragment, null, displayIcon && /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Button:icon",
    data: insideData
  }, /*#__PURE__*/React__default.createElement(_StyledSpan, {
    _css13: iconColor,
    _css14: middleSpace
  }, icon)), displayLabel && /*#__PURE__*/React__default.createElement(index$1.i, {
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
var ButtonWithRef = React__default.forwardRef(function (props, ref) {
  return /*#__PURE__*/React__default.createElement(Button, _extends._extends({
    innerRef: ref
  }, props));
});
ButtonWithRef.Anchor = React__default.forwardRef(function (props, ref) {
  environment.warnOnce('Button.Anchor', 'Button.Anchor is deprecated: please use Button with a href prop instead.');
  return /*#__PURE__*/React__default.createElement(ButtonWithRef, _extends._extends({
    ref: ref
  }, props));
});

exports.default = ButtonWithRef;
//# sourceMappingURL=Button.js.map
