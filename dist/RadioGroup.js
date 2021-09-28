'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var defineProperty = require('./defineProperty-fdbd3c46.js');
var React = require('react');
var index = require('./index-19b0c963.js');
var components = require('./components.js');
var miscellaneous = require('./miscellaneous.js');
require('./_commonjsHelpers-1b94f6bc.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const {
  Provider,
  Consumer
} = /*#__PURE__*/React__default["default"].createContext({});

class RadioGroup extends React__default["default"].PureComponent {
  constructor(...args) {
    super(...args);

    defineProperty._defineProperty(this, "state", {
      // keep track of the radios buttons to handle keyboard navigation
      radios: new Set()
    });

    defineProperty._defineProperty(this, "handleChange", id => {
      this.props.onChange(id);
    });

    defineProperty._defineProperty(this, "addRadio", id => {
      this.setState(state => {
        const radios = new Set(state.radios);
        radios.add(id);
        return {
          radios
        };
      });
    });

    defineProperty._defineProperty(this, "removeRadio", id => {
      this.setState(state => {
        const radios = new Set(state.radios);
        radios.delete(id);
        return {
          radios
        };
      });
    });

    defineProperty._defineProperty(this, "selectPrev", () => {
      const id = this.getSiblingId(-1);

      if (id !== null) {
        this.props.onChange(id);
      }
    });

    defineProperty._defineProperty(this, "selectNext", () => {
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
    return /*#__PURE__*/React__default["default"].createElement(Provider, {
      value: {
        selected,
        focusableId,
        onChange: this.handleChange,
        addRadio: this.addRadio,
        removeRadio: this.removeRadio,
        selectPrev: this.selectPrev,
        selectNext: this.selectNext
      }
    }, /*#__PURE__*/React__default["default"].createElement("div", _extends._extends({
      role: "radiogroup"
    }, components.stylingProps(this)), children));
  }

}

defineProperty._defineProperty(RadioGroup, "propTypes", {
  children: index.PropTypes.node,
  selected: index.PropTypes.oneOfType([index.PropTypes.string, index.PropTypes.number]),
  onChange: index.PropTypes.func
});

defineProperty._defineProperty(RadioGroup, "defaultProps", {
  onChange: miscellaneous.noop
});

exports.RadioGroupConsumer = Consumer;
exports["default"] = RadioGroup;
//# sourceMappingURL=RadioGroup.js.map
