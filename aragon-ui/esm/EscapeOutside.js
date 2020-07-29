import './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import { _ as _defineProperty } from './defineProperty-a0480c32.js';
import './toConsumableArray-127424c2.js';
import { _ as _inherits, a as _createClass, b as _classCallCheck, e as _assertThisInitialized, c as _getPrototypeOf, d as _possibleConstructorReturn } from './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import './contains-component.js';
import './css.js';
import './dayjs.min-e57fb69a.js';
import './date.js';
import { noop } from './miscellaneous.js';
import './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import { KEY_ESC } from './keycodes.js';
import './url.js';
import './web3.js';
import { _ as _extends } from './extends-db4f0c26.js';
import { _ as _objectWithoutProperties } from './objectWithoutProperties-234758e1.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EscapeOutside = /*#__PURE__*/function (_React$Component) {
  _inherits(EscapeOutside, _React$Component);

  var _super = _createSuper(EscapeOutside);

  function EscapeOutside() {
    var _this;

    _classCallCheck(this, EscapeOutside);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "_element", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "_document", null);

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var onEscapeOutside = _this.props.onEscapeOutside;

      if (!_this._element.contains(e.target)) {
        onEscapeOutside();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEscape", function (e) {
      var onEscapeOutside = _this.props.onEscapeOutside;

      if (e.keyCode === KEY_ESC) {
        onEscapeOutside();
      }
    });

    return _this;
  }

  _createClass(EscapeOutside, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var useCapture = this.props.useCapture;
      this._document = this._element.ownerDocument;

      this._document.addEventListener('keydown', this.handleEscape, useCapture);

      this._document.addEventListener('click', this.handleClick, useCapture);

      this._document.addEventListener('touchend', this.handleClick, useCapture);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var useCapture = this.props.useCapture;

      this._document.removeEventListener('keydown', this.handleEscape, useCapture);

      this._document.removeEventListener('click', this.handleClick, useCapture);

      this._document.removeEventListener('touchend', this.handleClick, useCapture);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          onEscapeOutside = _this$props.onEscapeOutside,
          useCapture = _this$props.useCapture,
          rest = _objectWithoutProperties(_this$props, ["children", "onEscapeOutside", "useCapture"]);

      return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
        ref: function ref(n) {
          return _this2._element = n;
        }
      }), children);
    }
  }]);

  return EscapeOutside;
}(React.Component);

_defineProperty(EscapeOutside, "propTypes", {
  children: PropTypes.node.isRequired,
  onEscapeOutside: PropTypes.func.isRequired,
  useCapture: PropTypes.bool
});

_defineProperty(EscapeOutside, "defaultProps", {
  onEscapeOutside: noop,
  useCapture: false
});

export default EscapeOutside;
//# sourceMappingURL=EscapeOutside.js.map
