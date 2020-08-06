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
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import CheckBoxWithTheme from './Checkbox.js';
import { RadioGroupConsumer as Consumer } from '../Radio/RadioGroup.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var KEYS_PREV = ['ArrowUp', 'ArrowLeft', // IE / Edge support
'Up', 'Left'];
var KEYS_NEXT = ['ArrowDown', 'ArrowRight', // IE / Edge support
'Down', 'Right'];

var RadioButton = /*#__PURE__*/function (_React$PureComponent) {
  inherits$1(RadioButton, _React$PureComponent);

  var _super = _createSuper(RadioButton);

  function RadioButton() {
    var _this;

    classCallCheck$1(this, RadioButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty$1(assertThisInitialized$1(_this), "_element", /*#__PURE__*/React$1.createRef());

    defineProperty$1(assertThisInitialized$1(_this), "handleKeyDown", function (event) {
      var _this$props = _this.props,
          selectPrev = _this$props.selectPrev,
          selectNext = _this$props.selectNext;

      if (KEYS_PREV.includes(event.key)) {
        selectPrev();
        event.preventDefault();
      }

      if (KEYS_NEXT.includes(event.key)) {
        selectNext();
        event.preventDefault();
      }
    });

    defineProperty$1(assertThisInitialized$1(_this), "handleChange", function () {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          id = _this$props2.id;

      if (onChange) {
        onChange(id);
      }
    });

    return _this;
  }

  createClass$1(RadioButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          addRadio = _this$props3.addRadio,
          id = _this$props3.id;

      if (addRadio && id !== null) {
        addRadio(id);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props4 = this.props,
          removeRadio = _this$props4.removeRadio,
          id = _this$props4.id;

      if (removeRadio && id !== null) {
        removeRadio(id);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var checked = this.props.checked;

      if (checked && !prevProps.checked) {
        this._element.current.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          checked = _this$props5.checked,
          disabled = _this$props5.disabled,
          id = _this$props5.id,
          onChange = _this$props5.onChange,
          tabIndex = _this$props5.tabIndex,
          props = objectWithoutProperties$1(_this$props5, ["checked", "disabled", "id", "onChange", "tabIndex"]);

      return /*#__PURE__*/React$1.createElement(CheckBoxWithTheme, _extends_1({
        ref: this._element,
        checked: checked,
        disabled: disabled,
        onChange: this.handleChange,
        onKeyDown: this.handleKeyDown,
        tabIndex: tabIndex,
        variant: "radio"
      }, props));
    }
  }]);

  return RadioButton;
}(React$1.PureComponent);

defineProperty$1(RadioButton, "propTypes", {
  addRadio: propTypes.func,
  checked: propTypes.bool,
  disabled: propTypes.bool,
  id: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  removeRadio: propTypes.func,
  selectNext: propTypes.func,
  selectPrev: propTypes.func,
  tabIndex: propTypes.string
});

defineProperty$1(RadioButton, "defaultProps", {
  addRadio: noop,
  checked: false,
  disabled: false,
  id: null,
  onChange: undefined,
  // <Button /> need to detect if onChange has been set
  removeRadio: noop,
  selectNext: noop,
  selectPrev: noop
});

var Radio = /*#__PURE__*/function (_React$PureComponent2) {
  inherits$1(Radio, _React$PureComponent2);

  var _super2 = _createSuper(Radio);

  function Radio() {
    classCallCheck$1(this, Radio);

    return _super2.apply(this, arguments);
  }

  createClass$1(Radio, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/React$1.createElement(Consumer, null, function (_ref) {
        var onChange = _ref.onChange,
            selected = _ref.selected,
            focusableId = _ref.focusableId,
            addRadio = _ref.addRadio,
            removeRadio = _ref.removeRadio,
            selectNext = _ref.selectNext,
            selectPrev = _ref.selectPrev;
        return /*#__PURE__*/React$1.createElement(RadioButton, _extends_1({}, props, {
          onChange: props.onChange || onChange,
          checked: props.checked || props.id === selected && selected !== null,
          tabIndex: props.tabIndex || (focusableId === undefined || props.id === focusableId ? '0' : '-1'),
          addRadio: addRadio,
          removeRadio: removeRadio,
          selectPrev: selectPrev,
          selectNext: selectNext
        }));
      });
    }
  }]);

  return Radio;
}(React$1.PureComponent);

defineProperty$1(Radio, "propTypes", RadioButton.propTypes);

defineProperty$1(Radio, "defaultProps", RadioButton.defaultProps);

export default Radio;
//# sourceMappingURL=Radio.js.map
