import React from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import Popper from 'popper.js'

class Popover extends React.Component {
  componentDidMount() {
    this.initPopper()
  }

  componentWillUnmount() {
    this.destroyPopper()
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.visible !== this.props.visible ||
      prevProps.placement !== this.props.placement ||
      prevProps.children !== this.props.children
    ) {
      this.destroyPopper()
      this.initPopper()
    }
  }

  initPopper = () => {
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

  destroyPopper = () => {
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

const { Consumer, Provider } = React.createContext('Popover')

class ContainerProvider extends React.Component {
  state = { el: null }
  handleRef = el => {
    this.setState({ el })
  }
  render() {
    const { el } = this.state
    const { children } = this.props
    return (
      <Provider value={el}>
        <div ref={this.handleRef}>{children}</div>
      </Provider>
    )
  }
}

class PopoverWithProvider extends React.Component {
  static propTypes = {
    openerRef: PropTypes.node,
    containerRef: PropTypes.node,
    placement: PropTypes.string,
    gutter: PropTypes.string,
    top: PropTypes.string,
    left: PropTypes.string,
    zIndex: PropTypes.number,
  }

  render() {
    return (
      <Consumer>{el => <Popover containerRef={el} {...this.props} />}</Consumer>
    )
  }
}

PopoverWithProvider.Container = ContainerProvider
export default PopoverWithProvider
