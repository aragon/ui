import classCallCheck from '../../../node_modules/@babel/runtime/helpers/classCallCheck.js';
import createClass from '../../../node_modules/@babel/runtime/helpers/createClass.js';
import assertThisInitialized from '../../../node_modules/@babel/runtime/helpers/assertThisInitialized.js';
import inherits from '../../../node_modules/@babel/runtime/helpers/inherits.js';
import possibleConstructorReturn from '../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js';
import getPrototypeOf from '../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js';
import defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import throttle_1 from '../../../node_modules/lodash/throttle.js';
import { BREAKPOINTS } from '../../style/breakpoints.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var NO_DOM_WINDOW_SIZE = {
  width: 0,
  height: 0
};

var WINDOW_SIZE_BASE = _objectSpread({
  breakpoints: BREAKPOINTS
}, getCurrentWindowSize());

var ViewportContext = /*#__PURE__*/React.createContext(WINDOW_SIZE_BASE);

function getCurrentWindowSize() {
  return typeof window === 'undefined' ? NO_DOM_WINDOW_SIZE : {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

var ViewportProvider = /*#__PURE__*/function (_React$Component) {
  inherits(ViewportProvider, _React$Component);

  var _super = _createSuper(ViewportProvider);

  function ViewportProvider() {
    var _this;

    classCallCheck(this, ViewportProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "state", {
      windowSize: _this.getWindowSize()
    });

    defineProperty(assertThisInitialized(_this), "updateWindowSize", function () {
      _this.setState({
        windowSize: _this.getWindowSize()
      });
    });

    defineProperty(assertThisInitialized(_this), "within", function (min, max) {
      var width = _this.state.windowSize.width; // Accept "" or -1 indifferently

      if (min === '') min = -1;
      if (max === '') max = -1; // Convert breakpoints into numbers

      if (typeof min === 'string') min = BREAKPOINTS[min];
      if (typeof max === 'string') max = BREAKPOINTS[max];

      if (typeof min !== 'number') {
        throw new Error("Viewport: invalid minimum value (".concat(min, ")."));
      }

      if (typeof max !== 'number') {
        throw new Error("Viewport: invalid maximum value (".concat(max, ")."));
      }

      return (min === -1 || width >= min) && (max === -1 || width < max);
    });

    defineProperty(assertThisInitialized(_this), "above", function (value) {
      return _this.within(value, -1);
    });

    defineProperty(assertThisInitialized(_this), "below", function (value) {
      return _this.within(-1, value);
    });

    return _this;
  }

  createClass(ViewportProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resizeStart();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.resizeStop();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var throttle = this.props.throttle;

      if (prevProps.throttle !== throttle) {
        this.resizeStop();
        this.resizeStart();
      }
    }
  }, {
    key: "resizeStart",
    value: function resizeStart() {
      this._handleResize = throttle_1(this.updateWindowSize, this.props.throttle);
      this.updateWindowSize();

      if (typeof window !== 'undefined') {
        window.addEventListener('resize', this._handleResize);
      }
    }
  }, {
    key: "resizeStop",
    value: function resizeStop() {
      if (!this._handleResize) {
        return;
      }

      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', this._handleResize);
      }

      this._handleResize.cancel();

      delete this._handleResize;
    }
  }, {
    key: "getWindowSize",
    value: function getWindowSize() {
      return _objectSpread(_objectSpread({}, WINDOW_SIZE_BASE), getCurrentWindowSize());
    } // Check if the current width is between two points.
    // Accepts a breakpoint string ('small', 'large') or numbers (width in pixels).
    // `min` is inclusive and `max` is exclusive.

  }, {
    key: "render",
    value: function render() {
      var windowSize = this.state.windowSize;
      var children = this.props.children;
      var within = this.within,
          above = this.above,
          below = this.below;
      return /*#__PURE__*/React.createElement(ViewportContext.Provider, {
        value: _objectSpread(_objectSpread({}, windowSize), {}, {
          within: within,
          above: above,
          below: below
        })
      }, children);
    }
  }]);

  return ViewportProvider;
}(React.Component); // React emits a warning message if `Provider` is attached to `Consumer`, this
// is only to prevent it.


defineProperty(ViewportProvider, "propTypes", {
  children: propTypes.node,
  throttle: propTypes.number
});

defineProperty(ViewportProvider, "defaultProps", {
  throttle: 100
});

var Viewport = function Viewport(props) {
  return /*#__PURE__*/React.createElement(ViewportContext.Consumer, props);
};

Viewport.Provider = ViewportProvider;
var useViewport = function useViewport() {
  return React.useContext(ViewportContext);
};

export default Viewport;
export { Viewport, useViewport };
//# sourceMappingURL=Viewport.js.map
