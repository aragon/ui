import React from 'react'
import PropTypes from 'prop-types'
import { noop, KEY_ESC } from '../../utils'

class EscapeOutside extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onEscapeOutside: PropTypes.func.isRequired,
    useCapture: PropTypes.bool,
  }

  static defaultProps = {
    onEscapeOutside: noop,
    useCapture: false,
  }

  _element = React.createRef()
  _document = null

  componentDidMount() {
    const { useCapture } = this.props
    this._document = this._element.ownerDocument
    this._document.addEventListener('keydown', this.handleEscape, useCapture)
    this._document.addEventListener('mousedown', this.handleClick, useCapture)
    this._document.addEventListener('touchend', this.handleClick, useCapture)
  }

  componentWillUnmount() {
    const { useCapture } = this.props
    this._document.removeEventListener('keydown', this.handleEscape, useCapture)
    this._document.removeEventListener(
      'mousedown',
      this.handleClick,
      useCapture
    )
    this._document.removeEventListener('touchend', this.handleClick, useCapture)
  }

  handleClick = e => {
    const { onEscapeOutside } = this.props
    if (!this._element.contains(e.target)) {
      onEscapeOutside()
    }
  }

  handleEscape = e => {
    const { onEscapeOutside } = this.props
    if (e.keyCode === KEY_ESC) {
      onEscapeOutside()
    }
  }

  render() {
    const { children, onEscapeOutside, useCapture, ...rest } = this.props

    return (
      <div {...rest} ref={n => (this._element = n)}>
        {children}
      </div>
    )
  }
}

export default EscapeOutside
