import React$1 from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import defineProperty$1 from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import classCallCheck$1 from '../../../node_modules/@babel/runtime/helpers/classCallCheck.js';
import createClass$1 from '../../../node_modules/@babel/runtime/helpers/createClass.js';
import inherits$1 from '../../../node_modules/@babel/runtime/helpers/inherits.js';
import assertThisInitialized$1 from '../../../node_modules/@babel/runtime/helpers/assertThisInitialized.js';
import possibleConstructorReturn$1 from '../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js';
import getPrototypeOf$1 from '../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js';
import { noop } from '../../utils/miscellaneous.js';
import { KEY_ESC } from '../../utils/keycodes.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EscapeOutside = /*#__PURE__*/function (_React$Component) {
  inherits$1(EscapeOutside, _React$Component);

  var _super = _createSuper(EscapeOutside);

  function EscapeOutside() {
    var _this;

    classCallCheck$1(this, EscapeOutside);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty$1(assertThisInitialized$1(_this), "_element", /*#__PURE__*/React$1.createRef());

    defineProperty$1(assertThisInitialized$1(_this), "_document", null);

    defineProperty$1(assertThisInitialized$1(_this), "handleClick", function (e) {
      var onEscapeOutside = _this.props.onEscapeOutside;

      if (!_this._element.contains(e.target)) {
        onEscapeOutside();
      }
    });

    defineProperty$1(assertThisInitialized$1(_this), "handleEscape", function (e) {
      var onEscapeOutside = _this.props.onEscapeOutside;

      if (e.keyCode === KEY_ESC) {
        onEscapeOutside();
      }
    });

    return _this;
  }

  createClass$1(EscapeOutside, [{
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
          rest = objectWithoutProperties$1(_this$props, ["children", "onEscapeOutside", "useCapture"]);

      return /*#__PURE__*/React$1.createElement("div", _extends_1({}, rest, {
        ref: function ref(n) {
          return _this2._element = n;
        }
      }), children);
    }
  }]);

  return EscapeOutside;
}(React$1.Component);

defineProperty$1(EscapeOutside, "propTypes", {
  children: propTypes.node.isRequired,
  onEscapeOutside: propTypes.func.isRequired,
  useCapture: propTypes.bool
});

defineProperty$1(EscapeOutside, "defaultProps", {
  onEscapeOutside: noop,
  useCapture: false
});

export default EscapeOutside;
//# sourceMappingURL=EscapeOutside.js.map
