'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
var defineProperty$1 = require('./defineProperty-0921a47c.js');
require('./toConsumableArray-d8a4a2c3.js');
var getPrototypeOf = require('./getPrototypeOf-2a661a20.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
require('./css.js');
require('./dayjs.min-e07657bf.js');
require('./date.js');
var miscellaneous = require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
var keycodes = require('./keycodes.js');
require('./url.js');
require('./web3.js');
var _extends$1 = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');

function _createSuper(Derived) { return function () { var Super = getPrototypeOf._getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = getPrototypeOf._getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return getPrototypeOf._possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EscapeOutside = /*#__PURE__*/function (_React$Component) {
  getPrototypeOf._inherits(EscapeOutside, _React$Component);

  var _super = _createSuper(EscapeOutside);

  function EscapeOutside() {
    var _this;

    getPrototypeOf._classCallCheck(this, EscapeOutside);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "_element", React__default.createRef());

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "_document", null);

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "handleClick", function (e) {
      var onEscapeOutside = _this.props.onEscapeOutside;

      if (!_this._element.contains(e.target)) {
        onEscapeOutside();
      }
    });

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "handleEscape", function (e) {
      var onEscapeOutside = _this.props.onEscapeOutside;

      if (e.keyCode === keycodes.KEY_ESC) {
        onEscapeOutside();
      }
    });

    return _this;
  }

  getPrototypeOf._createClass(EscapeOutside, [{
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
          rest = objectWithoutProperties._objectWithoutProperties(_this$props, ["children", "onEscapeOutside", "useCapture"]);

      return /*#__PURE__*/React__default.createElement("div", _extends$1._extends({}, rest, {
        ref: function ref(n) {
          return _this2._element = n;
        }
      }), children);
    }
  }]);

  return EscapeOutside;
}(React__default.Component);

defineProperty$1._defineProperty(EscapeOutside, "propTypes", {
  children: index.PropTypes.node.isRequired,
  onEscapeOutside: index.PropTypes.func.isRequired,
  useCapture: index.PropTypes.bool
});

defineProperty$1._defineProperty(EscapeOutside, "defaultProps", {
  onEscapeOutside: miscellaneous.noop,
  useCapture: false
});

exports.default = EscapeOutside;
//# sourceMappingURL=EscapeOutside.js.map
