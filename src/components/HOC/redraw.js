import React from 'react'
import PropTypes from 'prop-types'
import getDisplayName from 'react-display-name'

// Higher-order component for re-rendering
// For a discussion on pitfalls, see https://gist.github.com/staltz/08bf613199092eeb41ac8137d51eb5e6#gistcomment-2280414
const redraw = delay => Component =>
  class extends React.Component {
    static defaultProps = {
      innerRef: () => {},
    }
    static propTypes = {
      innerRef: PropTypes.func,
    }
    static displayName = `Redraw(${getDisplayName(Component)})`
    componentDidMount() {
      this.raf = null
      this.lastDraw = Date.now()
      this.draw()
    }
    componentWillUnmount() {
      this.raf && cancelAnimationFrame(this.raf)
    }
    draw = () => {
      this.raf = requestAnimationFrame(this.draw)

      const now = Date.now()
      const delta = now - this.lastDraw
      if (delta > delay) {
        this.child ? this.child.forceUpdate() : this.forceUpdate()
        this.lastDraw = now - delta % delay
      }
    }
    render() {
      return (
        <Component
          {...this.props}
          ref={
            // Only add a ref prop if the given component is not a stateless
            // component
            Component.render
              ? child => {
                  this.child = child
                  this.props.innerRef(child)
                }
              : undefined
          }
        />
      )
    }
  }

export default redraw
