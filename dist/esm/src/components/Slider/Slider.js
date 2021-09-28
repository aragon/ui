import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { Spring, animated as extendedAnimated } from '../../../node_modules/react-spring/web.js';
import { useTheme } from '../../theme/Theme2.js';
import { springs } from '../../style/springs.js';
import { unselectable } from '../../utils/css.js';

const BAR_HEIGHT = 6;
const HANDLE_SIZE = 24;
const HANDLE_SHADOW_MARGIN = 15;
const PADDING = 5;
const MIN_WIDTH = HANDLE_SIZE * 10;
const HEIGHT = Math.max(HANDLE_SIZE, BAR_HEIGHT) + PADDING * 2; // The check on window.DOMRect is needed for the JSDOM environment, which has
// window but not window.DOMRect. JSDOM is used by default in Jest.

const DEFAULT_RECT = typeof window === 'undefined' || typeof window.DOMRect !== 'function' ? {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
} : new window.DOMRect();

class Slider extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      pressed: false
    });

    _defineProperty(this, "handleRef", element => {
      this._mainElement = element;
      this._document = element && element.ownerDocument;
    });

    _defineProperty(this, "getRect", () => {
      const now = Date.now(); // Cache the rect if the last poll was less than a second ago

      if (this._lastRect && now - this._lastRectTime < 1000) {
        return this._lastRect;
      }

      this._lastRectTime = now;
      this._lastRect = this._mainElement ? this._mainElement.getBoundingClientRect() : DEFAULT_RECT;
      return this._lastRect;
    });

    _defineProperty(this, "dragStart", event => {
      this.dragStop();
      const clientX = this.clientXFromEvent(event);
      this.setState({
        pressed: true
      }, () => {
        this.updateValueFromClientX(clientX);
      });

      this._document.addEventListener('mouseup', this.dragStop);

      this._document.addEventListener('touchend', this.dragStop);

      this._document.addEventListener('mousemove', this.dragMove);

      this._document.addEventListener('touchmove', this.dragMove);
    });

    _defineProperty(this, "dragStop", () => {
      this.setState({
        pressed: false
      });

      this._document.removeEventListener('mouseup', this.dragStop);

      this._document.removeEventListener('touchend', this.dragStop);

      this._document.removeEventListener('mousemove', this.dragMove);

      this._document.removeEventListener('touchmove', this.dragMove);
    });

    _defineProperty(this, "dragMove", event => {
      if (!this.state.pressed) {
        return;
      }

      this.updateValueFromClientX(this.clientXFromEvent(event));
    });
  }

  componentWillUnmount() {
    this.dragStop();
  }

  clientXFromEvent(event) {
    return (event.touches ? event.touches.item(0) : event).clientX;
  }

  updateValueFromClientX(clientX) {
    const rect = this.getRect();
    const x = Math.min(rect.width, Math.max(0, clientX - rect.x));
    this.props.onUpdate(x / rect.width);
  }

  getHandleStyles(pressProgress) {
    return {
      transform: pressProgress.interpolate(t => `translate3d(0, calc(${t * 0.5}px - 50%), 0)`),
      boxShadow: pressProgress.interpolate(t => `0 1px 3px rgba(0, 0, 0, ${0.1 - 0.02 * t})`),
      background: pressProgress.interpolate(t => `hsl(0, 0%, ${100 * (1 - t * 0.01)}%)`)
    };
  }

  getHandlePositionStyles(value) {
    return {
      transform: value.interpolate(t => `translate3d(calc(${t * 100}% + ${HANDLE_SHADOW_MARGIN}px), 0, 0)`)
    };
  }

  getActiveBarStyles(value, pressProgress) {
    return {
      transform: value.interpolate(t => `scaleX(${t}) translateZ(0)`)
    };
  }

  render() {
    const {
      pressed
    } = this.state;
    const {
      onUpdate,
      value,
      theme,
      ...props
    } = this.props;
    return /*#__PURE__*/React.createElement(Spring, {
      native: true,
      config: springs.swift,
      to: {
        pressProgress: Number(pressed),
        value: Math.max(0, Math.min(1, value))
      }
    }, ({
      value,
      pressProgress
    }) => /*#__PURE__*/React.createElement(_StyledDiv, _extends({}, props, {
      $_css: HANDLE_SIZE / 2 + PADDING
    }), /*#__PURE__*/React.createElement(_StyledDiv2, {
      ref: this.handleRef,
      onMouseDown: this.dragStart,
      onTouchStart: this.dragStart
    }, /*#__PURE__*/React.createElement(Bars, null, /*#__PURE__*/React.createElement(_StyledBar, {
      $_css2: theme.surfaceUnder
    }), /*#__PURE__*/React.createElement(_StyledBar2, {
      style: this.getActiveBarStyles(value, pressProgress),
      $_css3: theme.selected
    })), /*#__PURE__*/React.createElement(HandleClip, null, /*#__PURE__*/React.createElement(HandlePosition, {
      style: this.getHandlePositionStyles(value, pressProgress)
    }, /*#__PURE__*/React.createElement(_StyledAnimatedDiv, {
      style: this.getHandleStyles(pressProgress),
      $_css4: theme.border
    }))))));
  }

}

_defineProperty(Slider, "propTypes", {
  value: PropTypes.number,
  onUpdate: PropTypes.func,
  theme: PropTypes.object
});

_defineProperty(Slider, "defaultProps", {
  value: 0,
  onUpdate: () => {}
});

const Bars = _styled(extendedAnimated.div).withConfig({
  displayName: "Slider__Bars",
  componentId: "sc-94djfe-0"
})(["position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);overflow:hidden;border-radius:2px;height:", "px;"], BAR_HEIGHT);
const Bar = _styled(extendedAnimated.div).withConfig({
  displayName: "Slider__Bar",
  componentId: "sc-94djfe-1"
})(["position:absolute;top:0;left:0;right:0;bottom:0;"]);

var _StyledBar2 = _styled(Bar).withConfig({
  displayName: "Slider___StyledBar2",
  componentId: "sc-94djfe-2"
})(["transform-origin:0 0;background:", ";"], p => p.$_css3);

var _StyledBar = _styled(Bar).withConfig({
  displayName: "Slider___StyledBar",
  componentId: "sc-94djfe-3"
})(["background:", ";"], p => p.$_css2);

const HandleClip = _styled.div.withConfig({
  displayName: "Slider__HandleClip",
  componentId: "sc-94djfe-4"
})(["pointer-events:none;overflow:hidden;width:calc(100% + ", "px);height:calc(100% + ", "px);transform-origin:50% 50%;transform:translate( -", "px,-", "px );"], HANDLE_SIZE + HANDLE_SHADOW_MARGIN * 2, HANDLE_SHADOW_MARGIN * 2, HANDLE_SIZE / 2 + HANDLE_SHADOW_MARGIN, HANDLE_SHADOW_MARGIN);
const HandlePosition = _styled(extendedAnimated.div).withConfig({
  displayName: "Slider__HandlePosition",
  componentId: "sc-94djfe-5"
})(["width:calc(100% - ", "px);height:100%;transform-origin:50% 50%;"], HANDLE_SIZE + HANDLE_SHADOW_MARGIN * 2);
var Slider$1 = (props => {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(Slider, _extends({
    theme: theme
  }, props));
});

var _StyledDiv = _styled("div").withConfig({
  displayName: "Slider___StyledDiv",
  componentId: "sc-94djfe-6"
})(["min-width:", "px;padding:0 ", "px;", ";"], MIN_WIDTH, p => p.$_css, unselectable);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "Slider___StyledDiv2",
  componentId: "sc-94djfe-7"
})(["position:relative;height:", "px;cursor:pointer;"], HEIGHT);

var _StyledAnimatedDiv = _styled(extendedAnimated.div).withConfig({
  displayName: "Slider___StyledAnimatedDiv",
  componentId: "sc-94djfe-8"
})(["position:absolute;top:50%;left:0;width:", "px;height:", "px;border:1px solid ", ";border-radius:50%;cursor:pointer;pointer-events:auto;"], HANDLE_SIZE, HANDLE_SIZE, p => p.$_css4);

export { Slider$1 as default };
//# sourceMappingURL=Slider.js.map
