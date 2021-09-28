import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import CheckBoxWithTheme from './Checkbox.js';
import { RadioGroupConsumer as Consumer } from '../Radio/RadioGroup.js';
import { noop } from '../../utils/miscellaneous.js';

const KEYS_PREV = ['ArrowUp', 'ArrowLeft', // IE / Edge support
'Up', 'Left'];
const KEYS_NEXT = ['ArrowDown', 'ArrowRight', // IE / Edge support
'Down', 'Right'];

class RadioButton extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_element", /*#__PURE__*/React.createRef());

    _defineProperty(this, "handleKeyDown", event => {
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

    _defineProperty(this, "handleChange", () => {
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
    return /*#__PURE__*/React.createElement(CheckBoxWithTheme, _extends({
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

class Radio extends React.PureComponent {
  render() {
    const {
      props
    } = this;
    return /*#__PURE__*/React.createElement(Consumer, null, ({
      onChange,
      selected,
      focusableId,
      addRadio,
      removeRadio,
      selectNext,
      selectPrev
    }) => /*#__PURE__*/React.createElement(RadioButton, _extends({}, props, {
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

_defineProperty(Radio, "propTypes", RadioButton.propTypes);

_defineProperty(Radio, "defaultProps", RadioButton.defaultProps);

export { Radio as default };
//# sourceMappingURL=Radio.js.map
