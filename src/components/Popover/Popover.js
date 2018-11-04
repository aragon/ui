import React from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import Popper from 'popper.js'

import { Consumer } from '../RootProvider/RootProvider'

class Popover extends React.Component {
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

  handleEscape = e => {
    const { handleClose } = this.props
    if (e.keyCode === 27) {
      handleClose()
    }
  }

  handleClick = e => {
    const { handleClose, openerRef } = this.props
    const { thisRef } = this.state

    if (openerRef) {
      const thisRefContent = thisRef.getBoundingClientRect()
      const openerRefContent = openerRef.getBoundingClientRect()
      if (
        !(
          thisRefContent.y < e.clientY &&
          thisRefContent.y + thisRefContent.height > e.clientY &&
          thisRefContent.x < e.clientX &&
          thisRefContent.x + thisRefContent.width > e.clientX
        ) &&
        !(
          openerRefContent.y < e.clientY &&
          openerRefContent.y + openerRefContent.height > e.clientY &&
          openerRefContent.x < e.clientX &&
          openerRefContent.x + openerRefContent.width > e.clientX
        )
      ) {
        handleClose()
      }
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
  static propTypes = {
    openerRef: PropTypes.instanceOf(Element).isRequired,
    containerRef: PropTypes.instanceOf(Element),
    placement: PropTypes.string,
    gutter: PropTypes.string,
    top: PropTypes.string,
    left: PropTypes.string,
    zIndex: PropTypes.number,
  }

  static defaultProps = {
    gutter: '20px',
  }

  render() {
    return (
      <Consumer>
        {({ el }) => (
          <Popover
            containerRef={el}
            handleClose={this.props.handleClose}
            {...this.props}
          />
        )}
      </Consumer>
    )
  }
}

export default PopoverWithProvider
