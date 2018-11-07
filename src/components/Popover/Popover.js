import React from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import Popper from 'popper.js'

import { Consumer } from '../RootProvider/RootProvider'

class Popover extends React.Component {
  static propTypes = {
    openerRef: PropTypes.instanceOf(Element).isRequired,
    containerRef: PropTypes.instanceOf(Element),
    placement: PropTypes.string,
    gutter: PropTypes.string,
    top: PropTypes.string,
    left: PropTypes.string,
    zIndex: PropTypes.number,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    gutter: '20px',
  }

  state = {
    thisRef: null,
  }

  componentDidMount() {
    this.initPopper()
    this.state.thisRef = findDOMNode(this)
    const ownerDocument = this.state.thisRef.ownerDocument
    ownerDocument.addEventListener('keydown', this.handleEscape)
    ownerDocument.addEventListener('click', this.handleClick, true)
    ownerDocument.addEventListener('touchend', this.handleClick, true)
  }

  componentWillUnmount() {
    this.destroyPopper()
    const ownerDocument = this.state.thisRef.ownerDocument
    ownerDocument.removeEventListener('keydown', this.handleEscape)
    ownerDocument.removeEventListener('click', this.handleClick, true)
    ownerDocument.removeEventListener('touchend', this.handleClick, true)
  }

  componentDidUpdate(prevProps) {
    const { placement, children } = this.props
    if (prevProps.placement !== placement || prevProps.children !== children) {
      this.destroyPopper()
      this.initPopper()
    }
  }

  // check if a point is inside a DOM rect
  insideRect(rect, x, y) {
    return rect.top < y && rect.bottom > y && rect.left < x && rect.right > x
  }

  handleEscape = e => {
    const { onClose } = this.props
    if (e.keyCode === 27) {
      onClose()
    }
  }

  handleClick = e => {
    const { onClose, openerRef } = this.props
    const { thisRef } = this.state

    if (!openerRef) {
      return
    }

    const thisRefContent = thisRef.getBoundingClientRect()
    const openerRefContent = openerRef.getBoundingClientRect()

    const insidePopover = this.insideRect(thisRefContent, e.clientX, e.clientY)
    const insideOpener = this.insideRect(openerRefContent, e.clientX, e.clientY)

    if (!insidePopover && !insideOpener) {
      onClose()
    }
  }

  initPopper() {
    const { openerRef, placement, gutter } = this.props
    if (placement && !this.popper) {
      this.popper = new Popper(openerRef, findDOMNode(this), {
        placement,
        modifiers: {
          offset: { offset: `0, ${gutter}` },
        },
      })
    }
  }

  destroyPopper() {
    if (this.props.placement && this.popper) {
      this.popper.destroy()
      this.popper = undefined
    }
  }

  render() {
    const { top, left, zIndex, children, containerRef } = this.props
    return ReactDOM.createPortal(
      <div style={{ position: 'absolute', top, left, zIndex }}>{children}</div>,
      containerRef
    )
  }
}

class PopoverWithProvider extends React.Component {
  static propTypes = Popover.propTypes
  render() {
    return (
      <Consumer>
        {({ el }) => <Popover containerRef={el} {...this.props} />}
      </Consumer>
    )
  }
}

export default PopoverWithProvider
