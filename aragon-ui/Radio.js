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
require('styled-components');
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
require('./keycodes.js');
require('./url.js');
require('./web3.js');
require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./Theme.js');
var _extends$1 = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
require('./FocusVisible.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./web-d0294535.js');
var Checkbox = require('./Checkbox.js');
var RadioGroup = require('./RadioGroup.js');

function _createSuper(Derived) { return function () { var Super = getPrototypeOf._getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = getPrototypeOf._getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return getPrototypeOf._possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var KEYS_PREV = ['ArrowUp', 'ArrowLeft', // IE / Edge support
'Up', 'Left'];
var KEYS_NEXT = ['ArrowDown', 'ArrowRight', // IE / Edge support
'Down', 'Right'];

var RadioButton = /*#__PURE__*/function (_React$PureComponent) {
  getPrototypeOf._inherits(RadioButton, _React$PureComponent);

  var _super = _createSuper(RadioButton);

  function RadioButton() {
    var _this;

    getPrototypeOf._classCallCheck(this, RadioButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "_element", React__default.createRef());

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "handleKeyDown", function (event) {
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

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "handleChange", function () {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          id = _this$props2.id;

      if (onChange) {
        onChange(id);
      }
    });

    return _this;
  }

  getPrototypeOf._createClass(RadioButton, [{
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
          props = objectWithoutProperties._objectWithoutProperties(_this$props5, ["checked", "disabled", "id", "onChange", "tabIndex"]);

      return /*#__PURE__*/React__default.createElement(Checkbox.default, _extends$1._extends({
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
}(React__default.PureComponent);

defineProperty$1._defineProperty(RadioButton, "propTypes", {
  addRadio: index.PropTypes.func,
  checked: index.PropTypes.bool,
  disabled: index.PropTypes.bool,
  id: index.PropTypes.oneOfType([index.PropTypes.string, index.PropTypes.number]),
  onChange: index.PropTypes.func,
  removeRadio: index.PropTypes.func,
  selectNext: index.PropTypes.func,
  selectPrev: index.PropTypes.func,
  tabIndex: index.PropTypes.string
});

defineProperty$1._defineProperty(RadioButton, "defaultProps", {
  addRadio: miscellaneous.noop,
  checked: false,
  disabled: false,
  id: null,
  onChange: undefined,
  // <Button /> need to detect if onChange has been set
  removeRadio: miscellaneous.noop,
  selectNext: miscellaneous.noop,
  selectPrev: miscellaneous.noop
});

var Radio = /*#__PURE__*/function (_React$PureComponent2) {
  getPrototypeOf._inherits(Radio, _React$PureComponent2);

  var _super2 = _createSuper(Radio);

  function Radio() {
    getPrototypeOf._classCallCheck(this, Radio);

    return _super2.apply(this, arguments);
  }

  getPrototypeOf._createClass(Radio, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/React__default.createElement(RadioGroup.RadioGroupConsumer, null, function (_ref) {
        var onChange = _ref.onChange,
            selected = _ref.selected,
            focusableId = _ref.focusableId,
            addRadio = _ref.addRadio,
            removeRadio = _ref.removeRadio,
            selectNext = _ref.selectNext,
            selectPrev = _ref.selectPrev;
        return /*#__PURE__*/React__default.createElement(RadioButton, _extends$1._extends({}, props, {
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
}(React__default.PureComponent);

defineProperty$1._defineProperty(Radio, "propTypes", RadioButton.propTypes);

defineProperty$1._defineProperty(Radio, "defaultProps", RadioButton.defaultProps);

exports.default = Radio;
//# sourceMappingURL=Radio.js.map
