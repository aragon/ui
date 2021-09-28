import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React, { useCallback } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import FocusVisible from '../FocusVisible/FocusVisible.js';
import { useTheme } from '../../theme/Theme2.js';
import { KEY_ENTER } from '../../utils/keycodes.js';
import { unselectable } from '../../utils/css.js';
import { RADIUS } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';
import { warnOnce } from '../../utils/environment.js';

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
  const theme = useTheme(); // `external` defaults to `true` if `href` is present, `false` otherwise.

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
  const handleKeyDown = useCallback(event => {
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
    $_css: textStyle('body3'),
    $_css2: disabled ? 'default' : 'pointer',
    $_css3: elementType === 'basic' ? unselectable : '',
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
const ButtonBaseWithFocus = /*#__PURE__*/React.forwardRef(({
  onFocus: onFocusProp,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement(FocusVisible, null, ({
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

    return /*#__PURE__*/React.createElement(ButtonBase, _extends({
      innerRef: ref,
      onFocus: handleFocus,
      focusVisible: focusVisible
    }, props));
  });
});
ButtonBaseWithFocus.propTypes = { ...ButtonBase.propTypes,
  onFocus: PropTypes.func
};
const LinkBase = /*#__PURE__*/React.forwardRef((props, ref) => {
  warnOnce('LinkBase', 'LinkBase is deprecated: please use ButtonBase with a href prop instead.');
  return /*#__PURE__*/React.createElement(ButtonBase, _extends({
    ref: ref
  }, props));
});

var _StyledButton = _styled("button").withConfig({
  displayName: "ButtonBase___StyledButton",
  componentId: "sc-ur1q76-0"
})(["position:relative;display:inline-block;padding:0;white-space:nowrap;", ";text-decoration:none;text-align:center;background:none;border-radius:", "px;border:0;outline:0;cursor:", ";", ";&::-moz-focus-inner{border:0;}&:focus:after{content:'';display:", ";position:absolute;top:", "px;left:", "px;right:", "px;bottom:", "px;border-radius:", "px;border:2px solid ", ";}"], p => p.$_css, RADIUS, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6, p => p.$_css7, p => p.$_css8, p => p.$_css9, p => p.$_css10);

export { LinkBase, ButtonBaseWithFocus as default };
//# sourceMappingURL=ButtonBase.js.map
