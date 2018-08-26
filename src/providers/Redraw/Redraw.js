import React from 'react'
import PropTypes from 'prop-types'
import getDisplayName from 'react-display-name'

// Render prop component and HOC for re-rendering.
// For a discussion on pitfalls, see
// https://gist.github.com/staltz/08bf613199092eeb41ac8137d51eb5e6

class Redraw extends React.Component {
  static propTypes = {
    interval: PropTypes.number,
    children: PropTypes.func.isRequired,
  }
  static defaultProps = {
    interval: 1000,
  }
  state = {
    lastDraw: -1,
  }
  componentDidMount() {
    this.raf = null
    this.draw()
  }
  componentWillUnmount() {
    this.raf && cancelAnimationFrame(this.raf)
  }
  draw = () => {
    this.raf = requestAnimationFrame(this.draw)

    const { interval } = this.props
    const { lastDraw } = this.state
    const now = Date.now()
    const delta = now - lastDraw
    if (lastDraw === -1 || delta > interval) {
      this.setState({ lastDraw: now - (delta % interval) })
    }
  }
  render() {
    return this.props.children()
  }
}
const hocWrap = (Component, interval) => {
  const HOC = props => (
    <Redraw interval={interval}>{() => <Component {...props} />}</Redraw>
  )
  HOC.displayName = `Redraw(${getDisplayName(Component)})`
  return HOC
}

Redraw.hocWrap = hocWrap

export { Redraw, hocWrap }
export default Redraw
