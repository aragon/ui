import React$1 from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import defineProperty$1 from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import toConsumableArray$1 from '../../../node_modules/@babel/runtime/helpers/toConsumableArray.js';
import classCallCheck$1 from '../../../node_modules/@babel/runtime/helpers/classCallCheck.js';
import createClass$1 from '../../../node_modules/@babel/runtime/helpers/createClass.js';
import inherits$1 from '../../../node_modules/@babel/runtime/helpers/inherits.js';
import assertThisInitialized$1 from '../../../node_modules/@babel/runtime/helpers/assertThisInitialized.js';
import possibleConstructorReturn$1 from '../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js';
import getPrototypeOf$1 from '../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js';
import { stylingProps } from '../../utils/components.js';
import { noop } from '../../utils/miscellaneous.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _React$createContext = /*#__PURE__*/React$1.createContext({}),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

var RadioGroup = /*#__PURE__*/function (_React$PureComponent) {
  inherits$1(RadioGroup, _React$PureComponent);

  var _super = _createSuper(RadioGroup);

  function RadioGroup() {
    var _this;

    classCallCheck$1(this, RadioGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty$1(assertThisInitialized$1(_this), "state", {
      // keep track of the radios buttons to handle keyboard navigation
      radios: new Set()
    });

    defineProperty$1(assertThisInitialized$1(_this), "handleChange", function (id) {
      _this.props.onChange(id);
    });

    defineProperty$1(assertThisInitialized$1(_this), "addRadio", function (id) {
      _this.setState(function (state) {
        var radios = new Set(state.radios);
        radios.add(id);
        return {
          radios: radios
        };
      });
    });

    defineProperty$1(assertThisInitialized$1(_this), "removeRadio", function (id) {
      _this.setState(function (state) {
        var radios = new Set(state.radios);
        radios.delete(id);
        return {
          radios: radios
        };
      });
    });

    defineProperty$1(assertThisInitialized$1(_this), "selectPrev", function () {
      var id = _this.getSiblingId(-1);

      if (id !== null) {
        _this.props.onChange(id);
      }
    });

    defineProperty$1(assertThisInitialized$1(_this), "selectNext", function () {
      var id = _this.getSiblingId(1);

      if (id !== null) {
        _this.props.onChange(id);
      }
    });

    return _this;
  }

  createClass$1(RadioGroup, [{
    key: "getSiblingId",
    value: function getSiblingId(position) {
      var selected = this.props.selected;

      var radios = toConsumableArray$1(this.state.radios);

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
      var focusableId = radios.has(selected) ? selected : toConsumableArray$1(radios)[0];
      return /*#__PURE__*/React$1.createElement(Provider, {
        value: {
          selected: selected,
          focusableId: focusableId,
          onChange: this.handleChange,
          addRadio: this.addRadio,
          removeRadio: this.removeRadio,
          selectPrev: this.selectPrev,
          selectNext: this.selectNext
        }
      }, /*#__PURE__*/React$1.createElement("div", _extends_1({
        role: "radiogroup"
      }, stylingProps(this)), children));
    }
  }]);

  return RadioGroup;
}(React$1.PureComponent);

defineProperty$1(RadioGroup, "propTypes", {
  children: propTypes.node,
  selected: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func
});

defineProperty$1(RadioGroup, "defaultProps", {
  onChange: noop
});

export default RadioGroup;
export { Consumer as RadioGroupConsumer };
//# sourceMappingURL=RadioGroup.js.map
