import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import slicedToArray from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import _styled from 'styled-components';
import React, { useCallback } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import FocusVisible from '../FocusVisible/FocusVisible.js';
import { useTheme } from '../../theme/Theme2.js';
import { KEY_ENTER } from '../../utils/keycodes.js';
import { unselectable } from '../../utils/css.js';
import { RADIUS } from '../../style/constants.js';
import { warnOnce } from '../../utils/environment.js';
import { textStyle } from '../../style/text-styles.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      props = objectWithoutProperties(_ref2, ["disabled", "element", "external", "focusRingRadius", "focusRingSpacing", "focusVisible", "href", "innerRef", "onClick", "onKeyDown", "showFocusRing"]);

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
      _getElementProps2 = slicedToArray(_getElementProps, 2),
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
  return /*#__PURE__*/React.createElement(_StyledButton, _extends_1({
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
  disabled: propTypes.bool,
  external: propTypes.bool,
  focusRingRadius: propTypes.number,
  focusRingSpacing: propTypes.oneOfType([propTypes.number, propTypes.arrayOf(propTypes.number)]),
  focusVisible: propTypes.bool,
  href: propTypes.string,
  innerRef: propTypes.any,
  onClick: propTypes.func,
  onKeyDown: propTypes.func,
  showFocusRing: propTypes.bool,
  element: propTypes.oneOf(['button', 'div', 'a'])
};
ButtonBase.defaultProps = {
  disabled: false,
  focusRingRadius: 0,
  focusRingSpacing: 0,
  showFocusRing: true
};
var ButtonBaseWithFocus = /*#__PURE__*/React.forwardRef(function (_ref3, ref) {
  var onFocusProp = _ref3.onFocus,
      props = objectWithoutProperties(_ref3, ["onFocus"]);

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

    return /*#__PURE__*/React.createElement(ButtonBase, _extends_1({
      innerRef: ref,
      onFocus: handleFocus,
      focusVisible: focusVisible
    }, props));
  });
});
ButtonBaseWithFocus.propTypes = _objectSpread(_objectSpread({}, ButtonBase.propTypes), {}, {
  onFocus: propTypes.func
});
var LinkBase = /*#__PURE__*/React.forwardRef(function (props, ref) {
  warnOnce('LinkBase', 'LinkBase is deprecated: please use ButtonBase with a href prop instead.');
  return /*#__PURE__*/React.createElement(ButtonBase, _extends_1({
    ref: ref
  }, props));
});

export default ButtonBaseWithFocus;
export { LinkBase };
//# sourceMappingURL=ButtonBase.js.map
