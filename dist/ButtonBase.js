'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var FocusVisible = require('./FocusVisible.js');
var Theme = require('./Theme.js');
var keycodes = require('./keycodes.js');
var css = require('./css.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
var environment = require('./environment.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./defineProperty-fdbd3c46.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./font.js');
require('./miscellaneous.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function getElementProps({
  element,
  href,
  disabled,
  external
}) {
  // <button> (handles key events)
  if (element === 'button') {
    return ['button', {
      type: 'button',
      disabled
    }];
  } // <a href=""> (handles key events)


  if (element === 'a' && href) {
    return ['anchor', disabled ? {} : {
      href: href,
      rel: 'noopener noreferrer',
      ...(external ? {
        target: '_blank'
      } : {})
    }];
  } // <a> or <div> (doesn’t handle key events)


  return ['basic', {
    role: 'button',
    tabIndex: disabled ? '-1' : '0'
  }];
}

function ButtonBase({
  disabled,
  element,
  external,
  focusRingRadius,
  focusRingSpacing,
  focusVisible,
  href,
  innerRef,
  onClick,
  onKeyDown,
  showFocusRing,
  ...props
}) {
  const theme = Theme.useTheme(); // `external` defaults to `true` if `href` is present, `false` otherwise.

  if (external === undefined) {
    external = Boolean(href);
  }

  if (typeof focusRingSpacing === 'number') {
    focusRingSpacing = [focusRingSpacing, focusRingSpacing];
  }

  if (!element) {
    element = href ? 'a' : 'button';
  }

  const [elementType, elementProps] = getElementProps({
    element,
    href,
    disabled,
    external
  });
  const handleKeyDown = React.useCallback(event => {
    // Only applies to cases where the enter key is not handled already
    if (elementType === 'basic' && event.keyCode === keycodes.KEY_ENTER && onClick) {
      onClick();
    } // Pass the event up


    if (onKeyDown) {
      onKeyDown(event);
    }
  }, [elementType, onClick, onKeyDown]);
  return /*#__PURE__*/React__default["default"].createElement(_StyledButton, _extends._extends({
    as: element,
    ref: innerRef,
    onClick: disabled ? undefined : onClick,
    onKeyDown: disabled ? undefined : handleKeyDown
  }, elementProps, props, {
    $_css: textStyles.textStyle('body3'),
    $_css2: disabled ? 'default' : 'pointer',
    $_css3: elementType === 'basic' ? css.unselectable : '',
    $_css4: focusVisible && showFocusRing ? 'block' : 'none',
    $_css5: -focusRingSpacing[1],
    $_css6: -focusRingSpacing[0],
    $_css7: -focusRingSpacing[0],
    $_css8: -focusRingSpacing[1],
    $_css9: focusRingRadius,
    $_css10: theme.focus
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
const ButtonBaseWithFocus = /*#__PURE__*/React__default["default"].forwardRef(({
  onFocus: onFocusProp,
  ...props
}, ref) => {
  return /*#__PURE__*/React__default["default"].createElement(FocusVisible["default"], null, ({
    focusVisible,
    onFocus
  }) => {
    // support external onFocus handlers
    const handleFocus = event => {
      if (onFocusProp) {
        onFocusProp(event);
      }

      onFocus(event);
    };

    return /*#__PURE__*/React__default["default"].createElement(ButtonBase, _extends._extends({
      innerRef: ref,
      onFocus: handleFocus,
      focusVisible: focusVisible
    }, props));
  });
});
ButtonBaseWithFocus.propTypes = { ...ButtonBase.propTypes,
  onFocus: index.PropTypes.func
};
const LinkBase = /*#__PURE__*/React__default["default"].forwardRef((props, ref) => {
  environment.warnOnce('LinkBase', 'LinkBase is deprecated: please use ButtonBase with a href prop instead.');
  return /*#__PURE__*/React__default["default"].createElement(ButtonBase, _extends._extends({
    ref: ref
  }, props));
});

var _StyledButton = _styled__default["default"]("button").withConfig({
  displayName: "ButtonBase___StyledButton",
  componentId: "sc-ur1q76-0"
})(["position:relative;display:inline-block;padding:0;white-space:nowrap;", ";text-decoration:none;text-align:center;background:none;border-radius:", "px;border:0;outline:0;cursor:", ";", ";&::-moz-focus-inner{border:0;}&:focus:after{content:'';display:", ";position:absolute;top:", "px;left:", "px;right:", "px;bottom:", "px;border-radius:", "px;border:2px solid ", ";}"], p => p.$_css, constants.RADIUS, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6, p => p.$_css7, p => p.$_css8, p => p.$_css9, p => p.$_css10);

exports.LinkBase = LinkBase;
exports["default"] = ButtonBaseWithFocus;
//# sourceMappingURL=ButtonBase.js.map
