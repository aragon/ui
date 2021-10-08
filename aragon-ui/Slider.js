'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var getPrototypeOf = require('./getPrototypeOf-55c9e80c.js');
var defineProperty = require('./defineProperty-3cad0327.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var web = require('./web-46d746d6.js');
var Theme = require('./Theme.js');
var css = require('./css.js');
var springs = require('./springs.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return getPrototypeOf.possibleConstructorReturn(this, result); }; }

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

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "Slider___StyledDiv",
  componentId: "sc-94djfe-0"
})(["min-width:", "px;padding:0 ", "px;", ";"], MIN_WIDTH, function (p) {
  return p._css;
}, css.unselectable);

var _StyledDiv2 = _styled__default['default']("div").withConfig({
  displayName: "Slider___StyledDiv2",
  componentId: "sc-94djfe-1"
})(["position:relative;height:", "px;cursor:pointer;"], HEIGHT);

var _StyledAnimatedDiv = _styled__default['default'](web.extendedAnimated.div).withConfig({
  displayName: "Slider___StyledAnimatedDiv",
  componentId: "sc-94djfe-2"
})(["position:absolute;top:50%;left:0;width:", "px;height:", "px;border:1px solid ", ";border-radius:50%;cursor:pointer;pointer-events:auto;"], HANDLE_SIZE, HANDLE_SIZE, function (p) {
  return p._css4;
});

var Slider = /*#__PURE__*/function (_React$Component) {
  getPrototypeOf.inherits(Slider, _React$Component);

  var _super = _createSuper(Slider);

  function Slider() {
    var _this;

    getPrototypeOf.classCallCheck(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty.defineProperty(getPrototypeOf.assertThisInitialized(_this), "state", {
      pressed: false
    });

    defineProperty.defineProperty(getPrototypeOf.assertThisInitialized(_this), "handleRef", function (element) {
      _this._mainElement = element;
      _this._document = element && element.ownerDocument;
    });

    defineProperty.defineProperty(getPrototypeOf.assertThisInitialized(_this), "getRect", function () {
      var now = Date.now(); // Cache the rect if the last poll was less than a second ago

      if (_this._lastRect && now - _this._lastRectTime < 1000) {
        return _this._lastRect;
      }

      _this._lastRectTime = now;
      _this._lastRect = _this._mainElement ? _this._mainElement.getBoundingClientRect() : DEFAULT_RECT;
      return _this._lastRect;
    });

    defineProperty.defineProperty(getPrototypeOf.assertThisInitialized(_this), "dragStart", function (event) {
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

    defineProperty.defineProperty(getPrototypeOf.assertThisInitialized(_this), "dragStop", function () {
      _this.setState({
        pressed: false
      });

      _this._document.removeEventListener('mouseup', _this.dragStop);

      _this._document.removeEventListener('touchend', _this.dragStop);

      _this._document.removeEventListener('mousemove', _this.dragMove);

      _this._document.removeEventListener('touchmove', _this.dragMove);
    });

    defineProperty.defineProperty(getPrototypeOf.assertThisInitialized(_this), "dragMove", function (event) {
      if (!_this.state.pressed) {
        return;
      }

      _this.updateValueFromClientX(_this.clientXFromEvent(event));
    });

    return _this;
  }

  getPrototypeOf.createClass(Slider, [{
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

      var _this$props = this.props;
          _this$props.onUpdate;
          var value = _this$props.value,
          theme = _this$props.theme,
          props = objectWithoutProperties.objectWithoutProperties(_this$props, ["onUpdate", "value", "theme"]);

      return /*#__PURE__*/React__default['default'].createElement(web.Spring, {
        native: true,
        config: springs.springs.swift,
        to: {
          pressProgress: Number(pressed),
          value: Math.max(0, Math.min(1, value))
        }
      }, function (_ref) {
        var value = _ref.value,
            pressProgress = _ref.pressProgress;
        return /*#__PURE__*/React__default['default'].createElement(_StyledDiv, _extends._extends_1({}, props, {
          _css: HANDLE_SIZE / 2 + PADDING
        }), /*#__PURE__*/React__default['default'].createElement(_StyledDiv2, {
          ref: _this2.handleRef,
          onMouseDown: _this2.dragStart,
          onTouchStart: _this2.dragStart
        }, /*#__PURE__*/React__default['default'].createElement(Bars, null, /*#__PURE__*/React__default['default'].createElement(_StyledBar, {
          _css2: theme.surfaceUnder
        }), /*#__PURE__*/React__default['default'].createElement(_StyledBar2, {
          style: _this2.getActiveBarStyles(value, pressProgress),
          _css3: theme.selected
        })), /*#__PURE__*/React__default['default'].createElement(HandleClip, null, /*#__PURE__*/React__default['default'].createElement(HandlePosition, {
          style: _this2.getHandlePositionStyles(value, pressProgress)
        }, /*#__PURE__*/React__default['default'].createElement(_StyledAnimatedDiv, {
          style: _this2.getHandleStyles(pressProgress),
          _css4: theme.border
        })))));
      });
    }
  }]);

  return Slider;
}(React__default['default'].Component);

defineProperty.defineProperty(Slider, "propTypes", {
  value: index.propTypes.number,
  onUpdate: index.propTypes.func,
  theme: index.propTypes.object
});

defineProperty.defineProperty(Slider, "defaultProps", {
  value: 0,
  onUpdate: function onUpdate() {}
});

var Bars = _styled__default['default'](web.extendedAnimated.div).withConfig({
  displayName: "Slider__Bars",
  componentId: "sc-94djfe-3"
})(["position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);overflow:hidden;border-radius:2px;height:", "px;"], BAR_HEIGHT);
var Bar = _styled__default['default'](web.extendedAnimated.div).withConfig({
  displayName: "Slider__Bar",
  componentId: "sc-94djfe-4"
})(["position:absolute;top:0;left:0;right:0;bottom:0;"]);

var _StyledBar2 = _styled__default['default'](Bar).withConfig({
  displayName: "Slider___StyledBar2",
  componentId: "sc-94djfe-5"
})(["transform-origin:0 0;background:", ";"], function (p) {
  return p._css3;
});

var _StyledBar = _styled__default['default'](Bar).withConfig({
  displayName: "Slider___StyledBar",
  componentId: "sc-94djfe-6"
})(["background:", ";"], function (p) {
  return p._css2;
});

var HandleClip = _styled__default['default'].div.withConfig({
  displayName: "Slider__HandleClip",
  componentId: "sc-94djfe-7"
})(["pointer-events:none;overflow:hidden;width:calc(100% + ", "px);height:calc(100% + ", "px);transform-origin:50% 50%;transform:translate( -", "px,-", "px );"], HANDLE_SIZE + HANDLE_SHADOW_MARGIN * 2, HANDLE_SHADOW_MARGIN * 2, HANDLE_SIZE / 2 + HANDLE_SHADOW_MARGIN, HANDLE_SHADOW_MARGIN);
var HandlePosition = _styled__default['default'](web.extendedAnimated.div).withConfig({
  displayName: "Slider__HandlePosition",
  componentId: "sc-94djfe-8"
})(["width:calc(100% - ", "px);height:100%;transform-origin:50% 50%;"], HANDLE_SIZE + HANDLE_SHADOW_MARGIN * 2);
var Slider$1 = (function (props) {
  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default['default'].createElement(Slider, _extends._extends_1({
    theme: theme
  }, props));
});

exports.default = Slider$1;
//# sourceMappingURL=Slider.js.map
