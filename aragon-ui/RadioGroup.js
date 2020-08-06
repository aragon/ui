'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
var index = require('./index-46d0e707.js');
var defineProperty$1 = require('./defineProperty-3cad0327.js');
var toConsumableArray = require('./toConsumableArray-cc0d28a9.js');
var getPrototypeOf = require('./getPrototypeOf-55c9e80c.js');
var components = require('./components.js');
var miscellaneous = require('./miscellaneous.js');
var _extends$1 = require('./extends-023d783e.js');

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return getPrototypeOf.possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _React$createContext = /*#__PURE__*/React__default.createContext({}),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

var RadioGroup = /*#__PURE__*/function (_React$PureComponent) {
  getPrototypeOf.inherits(RadioGroup, _React$PureComponent);

  var _super = _createSuper(RadioGroup);

  function RadioGroup() {
    var _this;

    getPrototypeOf.classCallCheck(this, RadioGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty$1.defineProperty(getPrototypeOf.assertThisInitialized(_this), "state", {
      // keep track of the radios buttons to handle keyboard navigation
      radios: new Set()
    });

    defineProperty$1.defineProperty(getPrototypeOf.assertThisInitialized(_this), "handleChange", function (id) {
      _this.props.onChange(id);
    });

    defineProperty$1.defineProperty(getPrototypeOf.assertThisInitialized(_this), "addRadio", function (id) {
      _this.setState(function (state) {
        var radios = new Set(state.radios);
        radios.add(id);
        return {
          radios: radios
        };
      });
    });

    defineProperty$1.defineProperty(getPrototypeOf.assertThisInitialized(_this), "removeRadio", function (id) {
      _this.setState(function (state) {
        var radios = new Set(state.radios);
        radios.delete(id);
        return {
          radios: radios
        };
      });
    });

    defineProperty$1.defineProperty(getPrototypeOf.assertThisInitialized(_this), "selectPrev", function () {
      var id = _this.getSiblingId(-1);

      if (id !== null) {
        _this.props.onChange(id);
      }
    });

    defineProperty$1.defineProperty(getPrototypeOf.assertThisInitialized(_this), "selectNext", function () {
      var id = _this.getSiblingId(1);

      if (id !== null) {
        _this.props.onChange(id);
      }
    });

    return _this;
  }

  getPrototypeOf.createClass(RadioGroup, [{
    key: "getSiblingId",
    value: function getSiblingId(position) {
      var selected = this.props.selected;

      var radios = toConsumableArray.toConsumableArray(this.state.radios);

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
      var focusableId = radios.has(selected) ? selected : toConsumableArray.toConsumableArray(radios)[0];
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
      }, /*#__PURE__*/React__default.createElement("div", _extends$1._extends_1({
        role: "radiogroup"
      }, components.stylingProps(this)), children));
    }
  }]);

  return RadioGroup;
}(React__default.PureComponent);

defineProperty$1.defineProperty(RadioGroup, "propTypes", {
  children: index.propTypes.node,
  selected: index.propTypes.oneOfType([index.propTypes.string, index.propTypes.number]),
  onChange: index.propTypes.func
});

defineProperty$1.defineProperty(RadioGroup, "defaultProps", {
  onChange: miscellaneous.noop
});

exports.RadioGroupConsumer = Consumer;
exports.default = RadioGroup;
//# sourceMappingURL=RadioGroup.js.map
