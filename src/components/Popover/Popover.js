import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Popper from 'popper.js'
import { Transition, animated } from 'react-spring'

import { Root } from '../../providers'
import { theme } from '../../theme'
import { noop } from '../../utils'
import { springs } from '../../utils/styles'

class PopoverBase extends React.Component {
  static propTypes = {
    opener: PropTypes.instanceOf(Element),
    placement: PropTypes.oneOf(
      // See https://popper.js.org/popper-documentation.html#Popper.placements
      // "center" is a value that doesn’t exits in Popper.
      ['center'].concat(
        ...['auto', 'top', 'right', 'bottom', 'left'].map(position => [
          position,
          `${position}-start`,
          `${position}-end`,
        ])
      )
    ),
    zIndex: PropTypes.number,
    onClose: PropTypes.func,
    children: PropTypes.node,
    transitionStyles: PropTypes.object,
  }

  static defaultProps = {
    opener: null,
    placement: 'center',
    onClose: noop,
    zIndex: 999,
  }

  _element = React.createRef()
  _document = null
  _popper = null
  _openerRect = null

  constructor(props) {
    super(props)
    this._openerRect = this.props.opener.getBoundingClientRect()
  }

  componentDidMount() {
    this._document = this._element.current.ownerDocument
    this._document.addEventListener('keydown', this.handleEscape)
    this._element.current.focus()
    this.initPopper()
  }

  componentWillUnmount() {
    this.destroyPopper()
    this._document.removeEventListener('keydown', this.handleEscape)
    delete this._document
    delete this._popper
    delete this._openerRect
  }

  componentDidUpdate(prevProps, prevState) {
    const { placement, children, opener } = this.props
    if (
      prevProps.placement !== placement ||
      prevProps.children !== children ||
      prevProps.opener !== opener
    ) {
      this.destroyPopper()
      this.initPopper()
    }
  }

  initPopper() {
    const { opener, placement } = this.props
    if (this._popper) {
      return
    }

    const modifiers = {}
    if (placement === 'center') {
      modifiers.inner = { enabled: true }
    }

    this._popper = new Popper(opener, this._element.current, {
      placement: placement === 'center' ? 'top' : placement,
      modifiers,
    })
  }

  destroyPopper() {
    if (!this._popper) {
      return
    }

    this._popper.destroy()
    this._popper = null
  }

  handleEscape = ({ keyCode }) => {
    const { opener, onClose } = this.props
    if (keyCode === 27) {
      // On escape, we always move the focus back to the opener.
      opener.focus()
      onClose()
    }
  }

  handleBlur = event => {
    const { opener, onClose } = this.props
    const focusedElement = event.relatedTarget
    if (this._element.current.contains(focusedElement)) {
      return
    }

    // Probably a click outside, that doesn’t focus anything else: move the
    // focus back to the opener.
    if (!focusedElement) {
      opener.focus()
    }
    onClose()
  }

  render() {
    const { zIndex, children, transitionStyles, placement } = this.props
    const { scale, opacity } = transitionStyles
    const openerHeight = this._openerRect ? this._openerRect.height : 0
    return (
      <Main
        ref={this._element}
        tabIndex="0"
        onBlur={this.handleBlur}
        style={{ zIndex }}
      >
        <Card
          style={{
            opacity,
            transform: scale.interpolate(
              placement === 'center'
                ? v =>
                    `
                      translate3d(0, calc(-50% + ${openerHeight / 2}px), 0)
                      scale3d(${v}, ${v}, 1)
                    `
                : v => `scale3d(${v}, ${v}, 1)`
            ),
          }}
        >
          {children}
        </Card>
      </Main>
    )
  }
}

const Main = styled(animated.div)`
  /* The positioning acts as a default until Popper takes over. */
  position: absolute;
  top: 0;
  left: 0;
  &:focus {
    /* Having the popover visible already means that it focused. */
    outline: 0;
  }
`

const Card = styled(animated.div)`
  background: ${theme.contentBackground};
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.06));
`

const Popover = props => (
  <Root>
    {rootElement => {
      if (!rootElement) {
        throw new Error('<Popover> needs to be nested in <Root.Provider>.')
      }
      return ReactDOM.createPortal(
        <Transition
          items={props.visible}
          config={springs.swift}
          from={{ scale: 0.9, opacity: 0 }}
          enter={{ scale: 1, opacity: 1 }}
          leave={{ scale: 0.9, opacity: 0 }}
          native
        >
          {visible =>
            visible &&
            (transitionStyles => (
              <PopoverBase {...props} transitionStyles={transitionStyles} />
            ))
          }
        </Transition>,
        rootElement
      )
    }}
  </Root>
)

Popover.propTypes = {
  ...PopoverBase.propTypes,
  visible: PropTypes.bool,
}
Popover.defaultProps = {
  ...PopoverBase.defaultProps,
  visible: true,
}

export default Popover
