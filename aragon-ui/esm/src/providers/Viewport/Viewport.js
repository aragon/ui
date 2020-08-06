import React$1 from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import defineProperty$1 from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import classCallCheck$1 from '../../../node_modules/@babel/runtime/helpers/classCallCheck.js';
import createClass$1 from '../../../node_modules/@babel/runtime/helpers/createClass.js';
import inherits$1 from '../../../node_modules/@babel/runtime/helpers/inherits.js';
import assertThisInitialized$1 from '../../../node_modules/@babel/runtime/helpers/assertThisInitialized.js';
import possibleConstructorReturn$1 from '../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js';
import getPrototypeOf$1 from '../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js';
import '../../utils/environment.js';
import { BREAKPOINTS } from '../../style/breakpoints.js';
import throttle_1 from '../../../node_modules/lodash/throttle.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var NO_DOM_WINDOW_SIZE = {
  width: 0,
  height: 0
};

var WINDOW_SIZE_BASE = _objectSpread({
  breakpoints: BREAKPOINTS
}, getCurrentWindowSize());

var ViewportContext = /*#__PURE__*/React$1.createContext(WINDOW_SIZE_BASE);

function getCurrentWindowSize() {
  return typeof window === 'undefined' ? NO_DOM_WINDOW_SIZE : {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

var ViewportProvider = /*#__PURE__*/function (_React$Component) {
  inherits$1(ViewportProvider, _React$Component);

  var _super = _createSuper(ViewportProvider);

  function ViewportProvider() {
    var _this;

    classCallCheck$1(this, ViewportProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty$1(assertThisInitialized$1(_this), "state", {
      windowSize: _this.getWindowSize()
    });

    defineProperty$1(assertThisInitialized$1(_this), "updateWindowSize", function () {
      _this.setState({
        windowSize: _this.getWindowSize()
      });
    });

    defineProperty$1(assertThisInitialized$1(_this), "within", function (min, max) {
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

    defineProperty$1(assertThisInitialized$1(_this), "above", function (value) {
      return _this.within(value, -1);
    });

    defineProperty$1(assertThisInitialized$1(_this), "below", function (value) {
      return _this.within(-1, value);
    });

    return _this;
  }

  createClass$1(ViewportProvider, [{
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
      return /*#__PURE__*/React$1.createElement(ViewportContext.Provider, {
        value: _objectSpread(_objectSpread({}, windowSize), {}, {
          within: within,
          above: above,
          below: below
        })
      }, children);
    }
  }]);

  return ViewportProvider;
}(React$1.Component); // React emits a warning message if `Provider` is attached to `Consumer`, this
// is only to prevent it.


defineProperty$1(ViewportProvider, "propTypes", {
  children: propTypes.node,
  throttle: propTypes.number
});

defineProperty$1(ViewportProvider, "defaultProps", {
  throttle: 100
});

var Viewport = function Viewport(props) {
  return /*#__PURE__*/React$1.createElement(ViewportContext.Consumer, props);
};

Viewport.Provider = ViewportProvider;
var useViewport = function useViewport() {
  return React$1.useContext(ViewportContext);
};

export default Viewport;
export { Viewport, useViewport };
//# sourceMappingURL=Viewport.js.map
