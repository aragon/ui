'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
var defineProperty = require('./defineProperty-0921a47c.js');
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
var keycodes = require('./keycodes.js');
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
var FocusVisible = require('./FocusVisible.js');

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty._defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getElementProps(_ref) {
  var element = _ref.element,
      href = _ref.href,
      disabled = _ref.disabled,
      external = _ref.external;

  // <button> (handles key events)
  if (element === 'button') {
    return ['button', {
      type: 'button',
      disabled: disabled
    }];
  } // <a href=""> (handles key events)


  if (element === 'a' && href) {
    return ['anchor', disabled ? {} : _objectSpread({
      href: href,
      rel: 'noopener noreferrer'
    }, external ? {
      target: '_blank'
    } : {})];
  } // <a> or <div> (doesn’t handle key events)


  return ['basic', {
    role: 'button',
    tabIndex: disabled ? '-1' : '0'
  }];
}

var _StyledButton = _styled__default("button").withConfig({
  displayName: "ButtonBase___StyledButton",
  componentId: "ur1q76-0"
})(["position:relative;display:inline-block;padding:0;white-space:nowrap;", ";text-decoration:none;text-align:center;background:none;border-radius:", "px;border:0;outline:0;cursor:", ";", ";&::-moz-focus-inner{border:0;}&:focus:after{content:'';display:", ";position:absolute;top:", "px;left:", "px;right:", "px;bottom:", "px;border-radius:", "px;border:2px solid ", ";}"], function (p) {
  return p._css;
}, constants.RADIUS, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
});

function ButtonBase(_ref2) {
  var disabled = _ref2.disabled,
      element = _ref2.element,
      external = _ref2.external,
      focusRingRadius = _ref2.focusRingRadius,
      focusRingSpacing = _ref2.focusRingSpacing,
      focusVisible = _ref2.focusVisible,
      href = _ref2.href,
      innerRef = _ref2.innerRef,
      onClick = _ref2.onClick,
      onKeyDown = _ref2.onKeyDown,
      showFocusRing = _ref2.showFocusRing,
      props = objectWithoutProperties._objectWithoutProperties(_ref2, ["disabled", "element", "external", "focusRingRadius", "focusRingSpacing", "focusVisible", "href", "innerRef", "onClick", "onKeyDown", "showFocusRing"]);

  var theme = Theme.useTheme(); // `external` defaults to `true` if `href` is present, `false` otherwise.

  if (external === undefined) {
    external = Boolean(href);
  }

  if (typeof focusRingSpacing === 'number') {
    focusRingSpacing = [focusRingSpacing, focusRingSpacing];
  }

  if (!element) {
    element = href ? 'a' : 'button';
  }

  var _getElementProps = getElementProps({
    element: element,
    href: href,
    disabled: disabled,
    external: external
  }),
      _getElementProps2 = slicedToArray._slicedToArray(_getElementProps, 2),
      elementType = _getElementProps2[0],
      elementProps = _getElementProps2[1];

  var handleKeyDown = React.useCallback(function (event) {
    // Only applies to cases where the enter key is not handled already
    if (elementType === 'basic' && event.keyCode === keycodes.KEY_ENTER && onClick) {
      onClick();
    } // Pass the event up


    if (onKeyDown) {
      onKeyDown(event);
    }
  }, [elementType, onClick, onKeyDown]);
  return /*#__PURE__*/React__default.createElement(_StyledButton, _extends._extends({
    as: element,
    ref: innerRef,
    onClick: disabled ? undefined : onClick,
    onKeyDown: disabled ? undefined : handleKeyDown
  }, elementProps, props, {
    _css: textStyles.textStyle('body3'),
    _css2: disabled ? 'default' : 'pointer',
    _css3: elementType === 'basic' ? css.unselectable : '',
    _css4: focusVisible && showFocusRing ? 'block' : 'none',
    _css5: -focusRingSpacing[1],
    _css6: -focusRingSpacing[0],
    _css7: -focusRingSpacing[0],
    _css8: -focusRingSpacing[1],
    _css9: focusRingRadius,
    _css10: theme.focus
  }));
}

ButtonBase.propTypes = {
  disabled: index.PropTypes.bool,
  external: index.PropTypes.bool,
  focusRingRadius: index.PropTypes.number,
  focusRingSpacing: index.PropTypes.oneOfType([index.PropTypes.number, index.PropTypes.arrayOf(index.PropTypes.number)]),
  focusVisible: index.PropTypes.bool,
  href: index.PropTypes.string,
  innerRef: index.PropTypes.any,
  onClick: index.PropTypes.func,
  onKeyDown: index.PropTypes.func,
  showFocusRing: index.PropTypes.bool,
  element: index.PropTypes.oneOf(['button', 'div', 'a'])
};
ButtonBase.defaultProps = {
  disabled: false,
  focusRingRadius: 0,
  focusRingSpacing: 0,
  showFocusRing: true
};
var ButtonBaseWithFocus = React__default.forwardRef(function (_ref3, ref) {
  var onFocusProp = _ref3.onFocus,
      props = objectWithoutProperties._objectWithoutProperties(_ref3, ["onFocus"]);

  return /*#__PURE__*/React__default.createElement(FocusVisible.default, null, function (_ref4) {
    var focusVisible = _ref4.focusVisible,
        onFocus = _ref4.onFocus;

    // support external onFocus handlers
    var handleFocus = function handleFocus(event) {
      if (onFocusProp) {
        onFocusProp(event);
      }

      onFocus(event);
    };

    return /*#__PURE__*/React__default.createElement(ButtonBase, _extends._extends({
      innerRef: ref,
      onFocus: handleFocus,
      focusVisible: focusVisible
    }, props));
  });
});
ButtonBaseWithFocus.propTypes = _objectSpread({}, ButtonBase.propTypes, {
  onFocus: index.PropTypes.func
});
var LinkBase = React__default.forwardRef(function (props, ref) {
  environment.warnOnce('LinkBase', 'LinkBase is deprecated: please use ButtonBase with a href prop instead.');
  return /*#__PURE__*/React__default.createElement(ButtonBase, _extends._extends({
    ref: ref
  }, props));
});

exports.LinkBase = LinkBase;
exports.default = ButtonBaseWithFocus;
//# sourceMappingURL=ButtonBase.js.map
