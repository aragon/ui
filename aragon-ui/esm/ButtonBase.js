import { _ as _slicedToArray } from './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React, { useCallback } from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import { _ as _defineProperty } from './defineProperty-a0480c32.js';
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
import { warnOnce } from './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import { KEY_ENTER } from './keycodes.js';
import './url.js';
import './web3.js';
import { RADIUS } from './constants.js';
import './breakpoints.js';
import './springs.js';
import { textStyle } from './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import { useTheme } from './Theme.js';
import { _ as _extends } from './extends-db4f0c26.js';
import { _ as _objectWithoutProperties } from './objectWithoutProperties-234758e1.js';
import FocusVisible from './FocusVisible.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var _StyledButton = _styled("button").withConfig({
  displayName: "ButtonBase___StyledButton",
  componentId: "ur1q76-0"
})(["position:relative;display:inline-block;padding:0;white-space:nowrap;", ";text-decoration:none;text-align:center;background:none;border-radius:", "px;border:0;outline:0;cursor:", ";", ";&::-moz-focus-inner{border:0;}&:focus:after{content:'';display:", ";position:absolute;top:", "px;left:", "px;right:", "px;bottom:", "px;border-radius:", "px;border:2px solid ", ";}"], function (p) {
  return p._css;
}, RADIUS, function (p) {
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
      props = _objectWithoutProperties(_ref2, ["disabled", "element", "external", "focusRingRadius", "focusRingSpacing", "focusVisible", "href", "innerRef", "onClick", "onKeyDown", "showFocusRing"]);

  var theme = useTheme(); // `external` defaults to `true` if `href` is present, `false` otherwise.

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
      _getElementProps2 = _slicedToArray(_getElementProps, 2),
      elementType = _getElementProps2[0],
      elementProps = _getElementProps2[1];

  var handleKeyDown = useCallback(function (event) {
    // Only applies to cases where the enter key is not handled already
    if (elementType === 'basic' && event.keyCode === KEY_ENTER && onClick) {
      onClick();
    } // Pass the event up


    if (onKeyDown) {
      onKeyDown(event);
    }
  }, [elementType, onClick, onKeyDown]);
  return /*#__PURE__*/React.createElement(_StyledButton, _extends({
    as: element,
    ref: innerRef,
    onClick: disabled ? undefined : onClick,
    onKeyDown: disabled ? undefined : handleKeyDown
  }, elementProps, props, {
    _css: textStyle('body3'),
    _css2: disabled ? 'default' : 'pointer',
    _css3: elementType === 'basic' ? unselectable : '',
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
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  focusRingRadius: PropTypes.number,
  focusRingSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  focusVisible: PropTypes.bool,
  href: PropTypes.string,
  innerRef: PropTypes.any,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  showFocusRing: PropTypes.bool,
  element: PropTypes.oneOf(['button', 'div', 'a'])
};
ButtonBase.defaultProps = {
  disabled: false,
  focusRingRadius: 0,
  focusRingSpacing: 0,
  showFocusRing: true
};
var ButtonBaseWithFocus = React.forwardRef(function (_ref3, ref) {
  var onFocusProp = _ref3.onFocus,
      props = _objectWithoutProperties(_ref3, ["onFocus"]);

  return /*#__PURE__*/React.createElement(FocusVisible, null, function (_ref4) {
    var focusVisible = _ref4.focusVisible,
        onFocus = _ref4.onFocus;

    // support external onFocus handlers
    var handleFocus = function handleFocus(event) {
      if (onFocusProp) {
        onFocusProp(event);
      }

      onFocus(event);
    };

    return /*#__PURE__*/React.createElement(ButtonBase, _extends({
      innerRef: ref,
      onFocus: handleFocus,
      focusVisible: focusVisible
    }, props));
  });
});
ButtonBaseWithFocus.propTypes = _objectSpread({}, ButtonBase.propTypes, {
  onFocus: PropTypes.func
});
var LinkBase = React.forwardRef(function (props, ref) {
  warnOnce('LinkBase', 'LinkBase is deprecated: please use ButtonBase with a href prop instead.');
  return /*#__PURE__*/React.createElement(ButtonBase, _extends({
    ref: ref
  }, props));
});

export default ButtonBaseWithFocus;
export { LinkBase };
//# sourceMappingURL=ButtonBase.js.map
