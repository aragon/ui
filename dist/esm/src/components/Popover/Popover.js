import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../proptypes.js';
import Popper from '../../../node_modules/popper.js/dist/esm/popper.js';
import { animated as extendedAnimated, Transition } from '../../../node_modules/react-spring/web.js';
import RootPortal from '../RootPortal/RootPortal.js';
import { KEY_ESC } from '../../utils/keycodes.js';
import { useTheme } from '../../theme/Theme2.js';
import { useRoot } from '../../providers/Root/Root.js';
import { warn } from '../../utils/environment.js';
import { GU, RADIUS } from '../../style/constants.js';
import { stylingProps } from '../../utils/components.js';
import { noop } from '../../utils/miscellaneous.js';
import { springs } from '../../style/springs.js';

class PopoverBase extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_cardElement", /*#__PURE__*/React.createRef());

    _defineProperty(this, "_popperElement", /*#__PURE__*/React.createRef());

    _defineProperty(this, "_document", null);

    _defineProperty(this, "_popper", null);

    _defineProperty(this, "handleEscape", ({
      keyCode
    }) => {
      if (keyCode === KEY_ESC) {
        // On escape, we always move the focus back to the opener.
        this.props.opener.focus();
        this.attemptClose();
      }
    });

    _defineProperty(this, "handleBlur", event => {
      const {
        closeOnOpenerFocus,
        opener
      } = this.props;
      const focusedElement = event.relatedTarget; // Do not close if:
      // - The blur event is emitted from an element inside of the popover.
      // - The focused target is the opener and closeOnOpenerFocus is true.

      if (this._cardElement.current && this._cardElement.current.contains(focusedElement) || closeOnOpenerFocus && opener && opener.contains(focusedElement)) {
        if (closeOnOpenerFocus && (opener.tagName === 'BUTTON' || opener.tagName === 'INPUT')) {
          warn('Popover: using "closeOnOpenerFocus" with a <button> or <input> may lead to bugs due ' + 'to cross-environment focus event handling. ' + 'See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus ' + 'for more information.');
        }

        return;
      } // Probably a click outside, that doesn’t focus anything else: move the
      // focus back to the opener.


      if (!focusedElement) {
        opener.focus();
      }

      this.attemptClose();
    });
  }

  componentDidMount() {
    this._document = this._popperElement.current.ownerDocument;

    this._document.addEventListener('keydown', this.handleEscape);

    this.focus();
    this.initPopper();
  }

  componentWillUnmount() {
    this.destroyPopper();

    this._document.removeEventListener('keydown', this.handleEscape);

    delete this._document;
    delete this._popper;
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      placement,
      children,
      opener
    } = this.props;

    if (prevProps.placement !== placement || prevProps.children !== children || prevProps.opener !== opener) {
      this.destroyPopper();
      this.initPopper();
    }
  }

  focus() {
    if (this._cardElement.current) {
      this._cardElement.current.focus();
    }
  }

  getPopperSettings() {
    const {
      placement,
      rootBoundary
    } = this.props;
    const settings = {
      placement,
      modifiers: {
        preventOverflow: {
          enabled: true,
          padding: 10,
          boundariesElement: rootBoundary || 'window'
        }
      },
      positionFixed: false
    };

    if (placement !== 'center') {
      return settings;
    }

    return { ...settings,
      placement: 'top-start',
      modifiers: { ...settings.modifiers,
        arrow: {
          enabled: false
        },
        flip: {
          enabled: false
        },
        offset: {
          enabled: true,
          offset: '50% - 50%p, -50%p - 50%'
        }
      }
    };
  }

  initPopper() {
    const {
      opener
    } = this.props;

    if (!this._popper) {
      this._popper = new Popper(opener, this._popperElement.current, this.getPopperSettings());
    }
  }

  destroyPopper() {
    if (this._popper) {
      this._popper.destroy();

      this._popper = null;
    }
  }

  attemptClose() {
    const accepted = this.props.onClose(); // If closing the popover is not accepted, we need to focus it again so
    // that it can react to onBlur events.

    if (accepted === false) {
      this.focus();
    }
  }

  boundaryDimensions() {
    const {
      rootBoundary
    } = this.props;
    const hasWindow = typeof window !== 'undefined';
    return rootBoundary ? [rootBoundary.clientWidth, rootBoundary.clientHeight] : [hasWindow ? window.innerWidth : 0, hasWindow ? window.innerHeight : 0];
  }

  render() {
    const {
      children,
      theme,
      transitionStyles,
      zIndex
    } = this.props;
    const {
      scale,
      opacity
    } = transitionStyles;
    const [maxWidth, maxHeight] = this.boundaryDimensions();
    return /*#__PURE__*/React.createElement(_StyledAnimatedDiv, {
      ref: this._popperElement,
      style: {
        zIndex
      }
    }, /*#__PURE__*/React.createElement(_StyledAnimatedDiv2, _extends({
      tabIndex: "0",
      onBlur: this.handleBlur,
      ref: this._cardElement,
      style: {
        opacity,
        transform: scale.interpolate(v => `scale3d(${v}, ${v}, 1)`),
        maxHeight: `${maxHeight - 2 * GU}px`,
        maxWidth: `${maxWidth - 2 * GU}px`
      }
    }, stylingProps(this), {
      $_css: theme.surface,
      $_css2: theme.border
    }), children));
  }

}

_defineProperty(PopoverBase, "propTypes", {
  children: PropTypes.node,
  closeOnOpenerFocus: PropTypes.bool,
  onClose: PropTypes.func,
  opener: PropTypes._element,
  placement: PropTypes.oneOf( // "center" is a value that doesn’t exist in Popper, but we are using it
  // to define custom Popper settings (see getPopperSettings() below).
  ['center'].concat(...['auto', 'top', 'right', 'bottom', 'left'].map(position => [position, `${position}-start`, `${position}-end`]))),
  rootBoundary: PropTypes._element,
  theme: PropTypes.object,
  transitionStyles: PropTypes.object,
  zIndex: PropTypes.number
});

_defineProperty(PopoverBase, "defaultProps", {
  closeOnOpenerFocus: false,
  opener: null,
  placement: 'center',
  onClose: noop,
  zIndex: 999
});

function Popover({
  scaleEffect,
  visible,
  ...props
}) {
  const theme = useTheme();
  const root = useRoot();
  return /*#__PURE__*/React.createElement(RootPortal, null, /*#__PURE__*/React.createElement(Transition, {
    items: visible,
    config: springs.swift,
    from: {
      scale: scaleEffect ? 0.9 : 1,
      opacity: 0
    },
    enter: {
      scale: 1,
      opacity: 1
    },
    leave: {
      scale: scaleEffect ? 0.9 : 1,
      opacity: 0
    },
    native: true
  }, visible => visible && (transitionStyles => /*#__PURE__*/React.createElement(PopoverBase, _extends({}, props, {
    rootBoundary: root,
    theme: theme,
    transitionStyles: transitionStyles
  })))));
}

Popover.propTypes = { ...PopoverBase.propTypes,
  scaleEffect: PropTypes.bool,
  visible: PropTypes.bool
};
Popover.defaultProps = { ...PopoverBase.defaultProps,
  scaleEffect: true,
  visible: true
};

var _StyledAnimatedDiv = _styled(extendedAnimated.div).withConfig({
  displayName: "Popover___StyledAnimatedDiv",
  componentId: "sc-1hohxqp-0"
})(["position:absolute;top:0;left:0;"]);

var _StyledAnimatedDiv2 = _styled(extendedAnimated.div).withConfig({
  displayName: "Popover___StyledAnimatedDiv2",
  componentId: "sc-1hohxqp-1"
})(["background:", ";border:1px solid ", ";border-radius:", "px;filter:drop-shadow(0 4px 4px rgba(0,0,0,0.15));&:focus{outline:0;}overflow-y:auto;"], p => p.$_css, p => p.$_css2, RADIUS);

export { Popover as default };
//# sourceMappingURL=Popover.js.map
