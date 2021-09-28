'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var defineProperty = require('./defineProperty-fdbd3c46.js');
var React = require('react');
var index = require('./index-19b0c963.js');
var keycodes = require('./keycodes.js');
var miscellaneous = require('./miscellaneous.js');
require('./_commonjsHelpers-1b94f6bc.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

class EscapeOutside extends React__default["default"].Component {
  constructor(...args) {
    super(...args);

    defineProperty._defineProperty(this, "_element", /*#__PURE__*/React__default["default"].createRef());

    defineProperty._defineProperty(this, "_document", null);

    defineProperty._defineProperty(this, "handleClick", e => {
      const {
        onEscapeOutside
      } = this.props;

      if (!this._element.contains(e.target)) {
        onEscapeOutside();
      }
    });

    defineProperty._defineProperty(this, "handleEscape", e => {
      const {
        onEscapeOutside
      } = this.props;

      if (e.keyCode === keycodes.KEY_ESC) {
        onEscapeOutside();
      }
    });
  }

  componentDidMount() {
    const {
      useCapture
    } = this.props;
    this._document = this._element.ownerDocument;

    this._document.addEventListener('keydown', this.handleEscape, useCapture);

    this._document.addEventListener('click', this.handleClick, useCapture);

    this._document.addEventListener('touchend', this.handleClick, useCapture);
  }

  componentWillUnmount() {
    const {
      useCapture
    } = this.props;

    this._document.removeEventListener('keydown', this.handleEscape, useCapture);

    this._document.removeEventListener('click', this.handleClick, useCapture);

    this._document.removeEventListener('touchend', this.handleClick, useCapture);
  }

  render() {
    const {
      children,
      onEscapeOutside,
      useCapture,
      ...rest
    } = this.props;
    return /*#__PURE__*/React__default["default"].createElement("div", _extends._extends({}, rest, {
      ref: n => this._element = n
    }), children);
  }

}

defineProperty._defineProperty(EscapeOutside, "propTypes", {
  children: index.PropTypes.node.isRequired,
  onEscapeOutside: index.PropTypes.func.isRequired,
  useCapture: index.PropTypes.bool
});

defineProperty._defineProperty(EscapeOutside, "defaultProps", {
  onEscapeOutside: miscellaneous.noop,
  useCapture: false
});

exports["default"] = EscapeOutside;
//# sourceMappingURL=EscapeOutside.js.map
