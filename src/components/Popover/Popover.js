import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Popper from 'popper.js'
import { Spring, animated } from 'react-spring'

import theme from '../../theme'
import { springs } from '../../utils/styles'
import { Root } from '../../providers'

class PopoverBase extends React.Component {
  static propTypes = {
    openerRef: PropTypes.instanceOf(Element).isRequired,
    rootElement: PropTypes.instanceOf(Element),
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

  _element = React.createRef()

  componentDidMount() {
    const ownerDocument = this._element.current.ownerDocument

    this.initPopper()
    ownerDocument.addEventListener('keydown', this.handleEscape)
    ownerDocument.addEventListener('click', this.handleClick, true)
    ownerDocument.addEventListener('touchend', this.handleClick, true)
  }

  componentWillUnmount() {
    const ownerDocument = this._element.current.ownerDocument

    this.destroyPopper()
    ownerDocument.removeEventListener('keydown', this.handleEscape)
    ownerDocument.removeEventListener('click', this.handleClick, true)
    ownerDocument.removeEventListener('touchend', this.handleClick, true)
  }

  componentDidUpdate(prevProps, prevState) {
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

    if (!openerRef || !this._element.current) {
      return
    }

    const thisRefContent = this._element.current.getBoundingClientRect()
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
      this.popper = new Popper(openerRef, this._element.current, {
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
    const { top, left, zIndex, children, rootElement } = this.props
    return ReactDOM.createPortal(
      <div
        ref={this._element}
        style={{ position: 'absolute', top, left, zIndex }}
      >
        <Spring
          config={springs.swift}
          from={{ scale: 0.9, opacity: 0 }}
          to={{ scale: 1, opacity: 1 }}
          native
        >
          {({ scale, opacity }) => (
            <Card
              style={{
                opacity,
                transform: scale.interpolate(t => `scale3d(${t},${t},1)`),
              }}
            >
              {children}
            </Card>
          )}
        </Spring>
      </div>,
      rootElement
    )
  }
}

const Card = styled(animated.div)`
  background: ${theme.contentBackground};
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.06);
`

const Popover = props => (
  <Root>{el => <PopoverBase rootElement={el} {...props} />}</Root>
)
Popover.propTypes = PopoverBase.propTypes

export default Popover
