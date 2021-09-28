'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var defineProperty = require('./defineProperty-fdbd3c46.js');
var React = require('react');
var index = require('./index-19b0c963.js');
var Checkbox = require('./Checkbox.js');
var RadioGroup = require('./RadioGroup.js');
var miscellaneous = require('./miscellaneous.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('styled-components');
require('./web-17920307.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./FocusVisible.js');
require('./springs.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./color.js');
require('./constants.js');
require('./components.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const KEYS_PREV = ['ArrowUp', 'ArrowLeft', // IE / Edge support
'Up', 'Left'];
const KEYS_NEXT = ['ArrowDown', 'ArrowRight', // IE / Edge support
'Down', 'Right'];

class RadioButton extends React__default["default"].PureComponent {
  constructor(...args) {
    super(...args);

    defineProperty._defineProperty(this, "_element", /*#__PURE__*/React__default["default"].createRef());

    defineProperty._defineProperty(this, "handleKeyDown", event => {
      const {
        selectPrev,
        selectNext
      } = this.props;

      if (KEYS_PREV.includes(event.key)) {
        selectPrev();
        event.preventDefault();
      }

      if (KEYS_NEXT.includes(event.key)) {
        selectNext();
        event.preventDefault();
      }
    });

    defineProperty._defineProperty(this, "handleChange", () => {
      const {
        onChange,
        id
      } = this.props;

      if (onChange) {
        onChange(id);
      }
    });
  }

  componentDidMount() {
    const {
      addRadio,
      id
    } = this.props;

    if (addRadio && id !== null) {
      addRadio(id);
    }
  }

  componentWillUnmount() {
    const {
      removeRadio,
      id
    } = this.props;

    if (removeRadio && id !== null) {
      removeRadio(id);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      checked
    } = this.props;

    if (checked && !prevProps.checked) {
      this._element.current.focus();
    }
  }

  render() {
    const {
      checked,
      disabled,
      id,
      onChange,
      tabIndex,
      ...props
    } = this.props;
    return /*#__PURE__*/React__default["default"].createElement(Checkbox["default"], _extends._extends({
      ref: this._element,
      checked: checked,
      disabled: disabled,
      onChange: this.handleChange,
      onKeyDown: this.handleKeyDown,
      tabIndex: tabIndex,
      variant: "radio"
    }, props));
  }

}

defineProperty._defineProperty(RadioButton, "propTypes", {
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

defineProperty._defineProperty(RadioButton, "defaultProps", {
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

class Radio extends React__default["default"].PureComponent {
  render() {
    const {
      props
    } = this;
    return /*#__PURE__*/React__default["default"].createElement(RadioGroup.RadioGroupConsumer, null, ({
      onChange,
      selected,
      focusableId,
      addRadio,
      removeRadio,
      selectNext,
      selectPrev
    }) => /*#__PURE__*/React__default["default"].createElement(RadioButton, _extends._extends({}, props, {
      onChange: props.onChange || onChange,
      checked: props.checked || props.id === selected && selected !== null,
      tabIndex: props.tabIndex || (focusableId === undefined || props.id === focusableId ? '0' : '-1'),
      addRadio: addRadio,
      removeRadio: removeRadio,
      selectPrev: selectPrev,
      selectNext: selectNext
    })));
  }

}

defineProperty._defineProperty(Radio, "propTypes", RadioButton.propTypes);

defineProperty._defineProperty(Radio, "defaultProps", RadioButton.defaultProps);

exports["default"] = Radio;
//# sourceMappingURL=Radio.js.map
