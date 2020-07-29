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
var toConsumableArray = require('./toConsumableArray-d8a4a2c3.js');
var getPrototypeOf = require('./getPrototypeOf-2a661a20.js');
require('./color.js');
var components = require('./components.js');
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
require('./keycodes.js');
require('./url.js');
require('./web3.js');
var _extends$1 = require('./extends-40571110.js');

function _createSuper(Derived) { return function () { var Super = getPrototypeOf._getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = getPrototypeOf._getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return getPrototypeOf._possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _React$createContext = React__default.createContext({}),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

var RadioGroup = /*#__PURE__*/function (_React$PureComponent) {
  getPrototypeOf._inherits(RadioGroup, _React$PureComponent);

  var _super = _createSuper(RadioGroup);

  function RadioGroup() {
    var _this;

    getPrototypeOf._classCallCheck(this, RadioGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "state", {
      // keep track of the radios buttons to handle keyboard navigation
      radios: new Set()
    });

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "handleChange", function (id) {
      _this.props.onChange(id);
    });

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "addRadio", function (id) {
      _this.setState(function (state) {
        var radios = new Set(state.radios);
        radios.add(id);
        return {
          radios: radios
        };
      });
    });

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "removeRadio", function (id) {
      _this.setState(function (state) {
        var radios = new Set(state.radios);
        radios.delete(id);
        return {
          radios: radios
        };
      });
    });

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "selectPrev", function () {
      var id = _this.getSiblingId(-1);

      if (id !== null) {
        _this.props.onChange(id);
      }
    });

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "selectNext", function () {
      var id = _this.getSiblingId(1);

      if (id !== null) {
        _this.props.onChange(id);
      }
    });

    return _this;
  }

  getPrototypeOf._createClass(RadioGroup, [{
    key: "getSiblingId",
    value: function getSiblingId(position) {
      var selected = this.props.selected;

      var radios = toConsumableArray._toConsumableArray(this.state.radios);

      var selectedIndex = selected === undefined ? 0 : radios.indexOf(selected);
      var newSelectedIndex = selectedIndex + position; // no radios

      if (radios.length === 0) {
        return null;
      } // up on the first item: go to the last one


      if (newSelectedIndex === -1) {
        return radios[radios.length - 1];
      } // down on the last item: go to the first one


      if (newSelectedIndex === radios.length) {
        return radios[0];
      } // select the item item if possible


      if (selectedIndex > -1 && radios[newSelectedIndex]) {
        return radios[newSelectedIndex];
      } // default: select the first item if available


      return radios[0] === undefined ? null : radios[0];
    }
  }, {
    key: "render",
    value: function render() {
      var radios = this.state.radios;
      var _this$props = this.props,
          children = _this$props.children,
          selected = _this$props.selected;
      var focusableId = radios.has(selected) ? selected : toConsumableArray._toConsumableArray(radios)[0];
      return /*#__PURE__*/React__default.createElement(Provider, {
        value: {
          selected: selected,
          focusableId: focusableId,
          onChange: this.handleChange,
          addRadio: this.addRadio,
          removeRadio: this.removeRadio,
          selectPrev: this.selectPrev,
          selectNext: this.selectNext
        }
      }, /*#__PURE__*/React__default.createElement("div", _extends$1._extends({
        role: "radiogroup"
      }, components.stylingProps(this)), children));
    }
  }]);

  return RadioGroup;
}(React__default.PureComponent);

defineProperty$1._defineProperty(RadioGroup, "propTypes", {
  children: index.PropTypes.node,
  selected: index.PropTypes.oneOfType([index.PropTypes.string, index.PropTypes.number]),
  onChange: index.PropTypes.func
});

defineProperty$1._defineProperty(RadioGroup, "defaultProps", {
  onChange: miscellaneous.noop
});

exports.RadioGroupConsumer = Consumer;
exports.default = RadioGroup;
//# sourceMappingURL=RadioGroup.js.map
