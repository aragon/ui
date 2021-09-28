import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { KEY_ESC } from '../../utils/keycodes.js';
import { noop } from '../../utils/miscellaneous.js';

class EscapeOutside extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_element", /*#__PURE__*/React.createRef());

    _defineProperty(this, "_document", null);

    _defineProperty(this, "handleClick", e => {
      const {
        onEscapeOutside
      } = this.props;

      if (!this._element.contains(e.target)) {
        onEscapeOutside();
      }
    });

    _defineProperty(this, "handleEscape", e => {
      const {
        onEscapeOutside
      } = this.props;

      if (e.keyCode === KEY_ESC) {
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
    return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
      ref: n => this._element = n
    }), children);
  }

}

_defineProperty(EscapeOutside, "propTypes", {
  children: PropTypes.node.isRequired,
  onEscapeOutside: PropTypes.func.isRequired,
  useCapture: PropTypes.bool
});

_defineProperty(EscapeOutside, "defaultProps", {
  onEscapeOutside: noop,
  useCapture: false
});

export { EscapeOutside as default };
//# sourceMappingURL=EscapeOutside.js.map
