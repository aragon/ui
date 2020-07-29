import './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import { _ as _defineProperty } from './defineProperty-a0480c32.js';
import './toConsumableArray-127424c2.js';
import 'styled-components';
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
import './keycodes.js';
import './url.js';
import './web3.js';
import './constants.js';
import './breakpoints.js';
import './springs.js';
import './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import './Theme.js';
import { _ as _extends } from './extends-db4f0c26.js';
import { _ as _objectWithoutProperties } from './objectWithoutProperties-234758e1.js';
import './FocusVisible.js';
import './objectWithoutPropertiesLoose-9606ad13.js';
import 'react-dom';
import './web-a351a0a1.js';
import Checkbox from './Checkbox.js';
import { RadioGroupConsumer as Consumer } from './RadioGroup.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var KEYS_PREV = ['ArrowUp', 'ArrowLeft', // IE / Edge support
'Up', 'Left'];
var KEYS_NEXT = ['ArrowDown', 'ArrowRight', // IE / Edge support
'Down', 'Right'];

var RadioButton = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(RadioButton, _React$PureComponent);

  var _super = _createSuper(RadioButton);

  function RadioButton() {
    var _this;

    _classCallCheck(this, RadioButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "_element", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
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

    _defineProperty(_assertThisInitialized(_this), "handleChange", function () {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          id = _this$props2.id;

      if (onChange) {
        onChange(id);
      }
    });

    return _this;
  }

  _createClass(RadioButton, [{
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
          props = _objectWithoutProperties(_this$props5, ["checked", "disabled", "id", "onChange", "tabIndex"]);

      return /*#__PURE__*/React.createElement(Checkbox, _extends({
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
}(React.PureComponent);

_defineProperty(RadioButton, "propTypes", {
  addRadio: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  removeRadio: PropTypes.func,
  selectNext: PropTypes.func,
  selectPrev: PropTypes.func,
  tabIndex: PropTypes.string
});

_defineProperty(RadioButton, "defaultProps", {
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
  _inherits(Radio, _React$PureComponent2);

  var _super2 = _createSuper(Radio);

  function Radio() {
    _classCallCheck(this, Radio);

    return _super2.apply(this, arguments);
  }

  _createClass(Radio, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/React.createElement(Consumer, null, function (_ref) {
        var onChange = _ref.onChange,
            selected = _ref.selected,
            focusableId = _ref.focusableId,
            addRadio = _ref.addRadio,
            removeRadio = _ref.removeRadio,
            selectNext = _ref.selectNext,
            selectPrev = _ref.selectPrev;
        return /*#__PURE__*/React.createElement(RadioButton, _extends({}, props, {
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
}(React.PureComponent);

_defineProperty(Radio, "propTypes", RadioButton.propTypes);

_defineProperty(Radio, "defaultProps", RadioButton.defaultProps);

export default Radio;
//# sourceMappingURL=Radio.js.map
