import './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import { _ as _defineProperty } from './defineProperty-a0480c32.js';
import './toConsumableArray-127424c2.js';
import _styled from 'styled-components';
import { _ as _inherits, a as _createClass, b as _classCallCheck, e as _assertThisInitialized, c as _getPrototypeOf, d as _possibleConstructorReturn } from './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import './contains-component.js';
import { unselectable } from './css.js';
import './dayjs.min-e57fb69a.js';
import './date.js';
import './miscellaneous.js';
import './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import './web3.js';
import './constants.js';
import './breakpoints.js';
import { springs } from './springs.js';
import './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import { useTheme } from './Theme.js';
import { _ as _extends } from './extends-db4f0c26.js';
import { _ as _objectWithoutProperties } from './objectWithoutProperties-234758e1.js';
import './objectWithoutPropertiesLoose-9606ad13.js';
import 'react-dom';
import { e as extendedAnimated, S as Spring } from './web-a351a0a1.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var BAR_HEIGHT = 6;
var HANDLE_SIZE = 24;
var HANDLE_SHADOW_MARGIN = 15;
var PADDING = 5;
var MIN_WIDTH = HANDLE_SIZE * 10;
var HEIGHT = Math.max(HANDLE_SIZE, BAR_HEIGHT) + PADDING * 2; // The check on window.DOMRect is needed for the JSDOM environment, which has
// window but not window.DOMRect. JSDOM is used by default in Jest.

var DEFAULT_RECT = typeof window === 'undefined' || typeof window.DOMRect !== 'function' ? {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
} : new window.DOMRect();

var _StyledDiv = _styled("div").withConfig({
  displayName: "Slider___StyledDiv",
  componentId: "sc-94djfe-0"
})(["min-width:", "px;padding:0 ", "px;", ";"], MIN_WIDTH, function (p) {
  return p._css;
}, unselectable);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "Slider___StyledDiv2",
  componentId: "sc-94djfe-1"
})(["position:relative;height:", "px;cursor:pointer;"], HEIGHT);

var _StyledAnimatedDiv = _styled(extendedAnimated.div).withConfig({
  displayName: "Slider___StyledAnimatedDiv",
  componentId: "sc-94djfe-2"
})(["position:absolute;top:50%;left:0;width:", "px;height:", "px;border:1px solid ", ";border-radius:50%;cursor:pointer;pointer-events:auto;"], HANDLE_SIZE, HANDLE_SIZE, function (p) {
  return p._css4;
});

var Slider = /*#__PURE__*/function (_React$Component) {
  _inherits(Slider, _React$Component);

  var _super = _createSuper(Slider);

  function Slider() {
    var _this;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      pressed: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleRef", function (element) {
      _this._mainElement = element;
      _this._document = element && element.ownerDocument;
    });

    _defineProperty(_assertThisInitialized(_this), "getRect", function () {
      var now = Date.now(); // Cache the rect if the last poll was less than a second ago

      if (_this._lastRect && now - _this._lastRectTime < 1000) {
        return _this._lastRect;
      }

      _this._lastRectTime = now;
      _this._lastRect = _this._mainElement ? _this._mainElement.getBoundingClientRect() : DEFAULT_RECT;
      return _this._lastRect;
    });

    _defineProperty(_assertThisInitialized(_this), "dragStart", function (event) {
      _this.dragStop();

      var clientX = _this.clientXFromEvent(event);

      _this.setState({
        pressed: true
      }, function () {
        _this.updateValueFromClientX(clientX);
      });

      _this._document.addEventListener('mouseup', _this.dragStop);

      _this._document.addEventListener('touchend', _this.dragStop);

      _this._document.addEventListener('mousemove', _this.dragMove);

      _this._document.addEventListener('touchmove', _this.dragMove);
    });

    _defineProperty(_assertThisInitialized(_this), "dragStop", function () {
      _this.setState({
        pressed: false
      });

      _this._document.removeEventListener('mouseup', _this.dragStop);

      _this._document.removeEventListener('touchend', _this.dragStop);

      _this._document.removeEventListener('mousemove', _this.dragMove);

      _this._document.removeEventListener('touchmove', _this.dragMove);
    });

    _defineProperty(_assertThisInitialized(_this), "dragMove", function (event) {
      if (!_this.state.pressed) {
        return;
      }

      _this.updateValueFromClientX(_this.clientXFromEvent(event));
    });

    return _this;
  }

  _createClass(Slider, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.dragStop();
    }
  }, {
    key: "clientXFromEvent",
    value: function clientXFromEvent(event) {
      return (event.touches ? event.touches.item(0) : event).clientX;
    }
  }, {
    key: "updateValueFromClientX",
    value: function updateValueFromClientX(clientX) {
      var rect = this.getRect();
      var x = Math.min(rect.width, Math.max(0, clientX - rect.x));
      this.props.onUpdate(x / rect.width);
    }
  }, {
    key: "getHandleStyles",
    value: function getHandleStyles(pressProgress) {
      return {
        transform: pressProgress.interpolate(function (t) {
          return "translate3d(0, calc(".concat(t * 0.5, "px - 50%), 0)");
        }),
        boxShadow: pressProgress.interpolate(function (t) {
          return "0 1px 3px rgba(0, 0, 0, ".concat(0.1 - 0.02 * t, ")");
        }),
        background: pressProgress.interpolate(function (t) {
          return "hsl(0, 0%, ".concat(100 * (1 - t * 0.01), "%)");
        })
      };
    }
  }, {
    key: "getHandlePositionStyles",
    value: function getHandlePositionStyles(value) {
      return {
        transform: value.interpolate(function (t) {
          return "translate3d(calc(".concat(t * 100, "% + ").concat(HANDLE_SHADOW_MARGIN, "px), 0, 0)");
        })
      };
    }
  }, {
    key: "getActiveBarStyles",
    value: function getActiveBarStyles(value, pressProgress) {
      return {
        transform: value.interpolate(function (t) {
          return "scaleX(".concat(t, ") translateZ(0)");
        })
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var pressed = this.state.pressed;

      var _this$props = this.props,
          onUpdate = _this$props.onUpdate,
          value = _this$props.value,
          theme = _this$props.theme,
          props = _objectWithoutProperties(_this$props, ["onUpdate", "value", "theme"]);

      return /*#__PURE__*/React.createElement(Spring, {
        native: true,
        config: springs.swift,
        to: {
          pressProgress: Number(pressed),
          value: Math.max(0, Math.min(1, value))
        }
      }, function (_ref) {
        var value = _ref.value,
            pressProgress = _ref.pressProgress;
        return /*#__PURE__*/React.createElement(_StyledDiv, _extends({}, props, {
          _css: HANDLE_SIZE / 2 + PADDING
        }), /*#__PURE__*/React.createElement(_StyledDiv2, {
          ref: _this2.handleRef,
          onMouseDown: _this2.dragStart,
          onTouchStart: _this2.dragStart
        }, /*#__PURE__*/React.createElement(Bars, null, /*#__PURE__*/React.createElement(_StyledBar, {
          _css2: theme.surfaceUnder
        }), /*#__PURE__*/React.createElement(_StyledBar2, {
          style: _this2.getActiveBarStyles(value, pressProgress),
          _css3: theme.selected
        })), /*#__PURE__*/React.createElement(HandleClip, null, /*#__PURE__*/React.createElement(HandlePosition, {
          style: _this2.getHandlePositionStyles(value, pressProgress)
        }, /*#__PURE__*/React.createElement(_StyledAnimatedDiv, {
          style: _this2.getHandleStyles(pressProgress),
          _css4: theme.border
        })))));
      });
    }
  }]);

  return Slider;
}(React.Component);

_defineProperty(Slider, "propTypes", {
  value: PropTypes.number,
  onUpdate: PropTypes.func,
  theme: PropTypes.object
});

_defineProperty(Slider, "defaultProps", {
  value: 0,
  onUpdate: function onUpdate() {}
});

var Bars = _styled(extendedAnimated.div).withConfig({
  displayName: "Slider__Bars",
  componentId: "sc-94djfe-3"
})(["position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);overflow:hidden;border-radius:2px;height:", "px;"], BAR_HEIGHT);
var Bar = _styled(extendedAnimated.div).withConfig({
  displayName: "Slider__Bar",
  componentId: "sc-94djfe-4"
})(["position:absolute;top:0;left:0;right:0;bottom:0;"]);

var _StyledBar2 = _styled(Bar).withConfig({
  displayName: "Slider___StyledBar2",
  componentId: "sc-94djfe-5"
})(["transform-origin:0 0;background:", ";"], function (p) {
  return p._css3;
});

var _StyledBar = _styled(Bar).withConfig({
  displayName: "Slider___StyledBar",
  componentId: "sc-94djfe-6"
})(["background:", ";"], function (p) {
  return p._css2;
});

var HandleClip = _styled.div.withConfig({
  displayName: "Slider__HandleClip",
  componentId: "sc-94djfe-7"
})(["pointer-events:none;overflow:hidden;width:calc(100% + ", "px);height:calc(100% + ", "px);transform-origin:50% 50%;transform:translate( -", "px,-", "px );"], HANDLE_SIZE + HANDLE_SHADOW_MARGIN * 2, HANDLE_SHADOW_MARGIN * 2, HANDLE_SIZE / 2 + HANDLE_SHADOW_MARGIN, HANDLE_SHADOW_MARGIN);
var HandlePosition = _styled(extendedAnimated.div).withConfig({
  displayName: "Slider__HandlePosition",
  componentId: "sc-94djfe-8"
})(["width:calc(100% - ", "px);height:100%;transform-origin:50% 50%;"], HANDLE_SIZE + HANDLE_SHADOW_MARGIN * 2);
var Slider$1 = (function (props) {
  var theme = useTheme();
  return /*#__PURE__*/React.createElement(Slider, _extends({
    theme: theme
  }, props));
});

export default Slider$1;
//# sourceMappingURL=Slider.js.map
