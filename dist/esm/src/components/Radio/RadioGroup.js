import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { stylingProps } from '../../utils/components.js';
import { noop } from '../../utils/miscellaneous.js';

const {
  Provider,
  Consumer
} = /*#__PURE__*/React.createContext({});

class RadioGroup extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      // keep track of the radios buttons to handle keyboard navigation
      radios: new Set()
    });

    _defineProperty(this, "handleChange", id => {
      this.props.onChange(id);
    });

    _defineProperty(this, "addRadio", id => {
      this.setState(state => {
        const radios = new Set(state.radios);
        radios.add(id);
        return {
          radios
        };
      });
    });

    _defineProperty(this, "removeRadio", id => {
      this.setState(state => {
        const radios = new Set(state.radios);
        radios.delete(id);
        return {
          radios
        };
      });
    });

    _defineProperty(this, "selectPrev", () => {
      const id = this.getSiblingId(-1);

      if (id !== null) {
        this.props.onChange(id);
      }
    });

    _defineProperty(this, "selectNext", () => {
      const id = this.getSiblingId(1);

      if (id !== null) {
        this.props.onChange(id);
      }
    });
  }

  getSiblingId(position) {
    const {
      selected
    } = this.props;
    const radios = [...this.state.radios];
    const selectedIndex = selected === undefined ? 0 : radios.indexOf(selected);
    const newSelectedIndex = selectedIndex + position; // no radios

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

  render() {
    const {
      radios
    } = this.state;
    const {
      children,
      selected
    } = this.props;
    const focusableId = radios.has(selected) ? selected : [...radios][0];
    return /*#__PURE__*/React.createElement(Provider, {
      value: {
        selected,
        focusableId,
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

}

_defineProperty(RadioGroup, "propTypes", {
  children: PropTypes.node,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func
});

_defineProperty(RadioGroup, "defaultProps", {
  onChange: noop
});

export { Consumer as RadioGroupConsumer, RadioGroup as default };
//# sourceMappingURL=RadioGroup.js.map
