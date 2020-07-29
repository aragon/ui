import './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import { _ as _defineProperty } from './defineProperty-a0480c32.js';
import { _ as _toConsumableArray } from './toConsumableArray-127424c2.js';
import { _ as _inherits, a as _createClass, b as _classCallCheck, e as _assertThisInitialized, c as _getPrototypeOf, d as _possibleConstructorReturn } from './getPrototypeOf-b96da1e1.js';
import './color.js';
import { stylingProps } from './components.js';
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
import './keycodes.js';
import './url.js';
import './web3.js';
import { _ as _extends } from './extends-db4f0c26.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _React$createContext = React.createContext({}),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

var RadioGroup = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(RadioGroup, _React$PureComponent);

  var _super = _createSuper(RadioGroup);

  function RadioGroup() {
    var _this;

    _classCallCheck(this, RadioGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      // keep track of the radios buttons to handle keyboard navigation
      radios: new Set()
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (id) {
      _this.props.onChange(id);
    });

    _defineProperty(_assertThisInitialized(_this), "addRadio", function (id) {
      _this.setState(function (state) {
        var radios = new Set(state.radios);
        radios.add(id);
        return {
          radios: radios
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "removeRadio", function (id) {
      _this.setState(function (state) {
        var radios = new Set(state.radios);
        radios.delete(id);
        return {
          radios: radios
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectPrev", function () {
      var id = _this.getSiblingId(-1);

      if (id !== null) {
        _this.props.onChange(id);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "selectNext", function () {
      var id = _this.getSiblingId(1);

      if (id !== null) {
        _this.props.onChange(id);
      }
    });

    return _this;
  }

  _createClass(RadioGroup, [{
    key: "getSiblingId",
    value: function getSiblingId(position) {
      var selected = this.props.selected;

      var radios = _toConsumableArray(this.state.radios);

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
      var focusableId = radios.has(selected) ? selected : _toConsumableArray(radios)[0];
      return /*#__PURE__*/React.createElement(Provider, {
        value: {
          selected: selected,
          focusableId: focusableId,
          onChange: this.handleChange,
          addRadio: this.addRadio,
          removeRadio: this.removeRadio,
          selectPrev: this.selectPrev,
          selectNext: this.selectNext
        }
      }, /*#__PURE__*/React.createElement("div", _extends({
        role: "radiogroup"
      }, stylingProps(this)), children));
    }
  }]);

  return RadioGroup;
}(React.PureComponent);

_defineProperty(RadioGroup, "propTypes", {
  children: PropTypes.node,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func
});

_defineProperty(RadioGroup, "defaultProps", {
  onChange: noop
});

export default RadioGroup;
export { Consumer as RadioGroupConsumer };
//# sourceMappingURL=RadioGroup.js.map
