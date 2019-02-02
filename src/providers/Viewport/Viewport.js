import React from 'react'
import PropTypes from 'prop-types'
import { BREAKPOINTS } from '../../utils/styles/breakpoint'
import throttle from 'lodash-es/throttle'

const windowSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
})

const WINDOW_SIZE_BASE = { breakpoints: BREAKPOINTS, ...windowSize() }

const { Provider, Consumer } = React.createContext(WINDOW_SIZE_BASE)

class ViewportProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    throttleWait: PropTypes.number,
  }

  static defaultProps = {
    throttleWait: 100,
  }

  state = { windowSize: this.getWindowSize() }

  componentDidMount() {
    this.resizeStart()
  }

  componentWillUnmount() {
    this.resizeStop()
  }

  componentDidUpdate(prevProps) {
    const { throttleWait } = this.props
    if (prevProps.throttleWait !== throttleWait) {
      this.resizeStop()
      this.resizeStart()
    }
  }

  resizeStart() {
    const { throttleWait } = this.props
    this._handleResize = throttle(this.updateWindowSize, throttleWait)
    this.updateWindowSize()
    window.addEventListener('resize', this._handleResize)
  }

  resizeStop() {
    if (this._handleResize) {
      window.removeEventListener('resize', this._handleResize)
      delete this._handleResize
    }
    this.updateWindowSize()
  }

  updateWindowSize = () => {
    this.setState({ windowSize: this.getWindowSize() })
  }

  getWindowSize() {
    const { width, height } = windowSize()
    return {
      ...WINDOW_SIZE_BASE,
      width,
      height,
    }
  }

  // Check if the current width is between two points.
  // Accepts a breakpoint string ('small', 'large') or numbers (width in pixels).
  // `min` is inclusive and `max` is exclusive.
  within = (...[min, max]) => {
    const { width } = this.state.windowSize

    // Accept "" or -1 indifferently
    if (min === '') min = -1
    if (max === '') max = -1

    // Convert breakpoints into numbers
    if (typeof min === 'string') min = BREAKPOINTS[min]
    if (typeof max === 'string') max = BREAKPOINTS[max]

    if (typeof min !== 'number') {
      throw new Error('Viewport: invalid minimum value.')
    }
    if (typeof max !== 'number') {
      throw new Error('Viewport: invalid maximum value.')
    }

    return (min === -1 || width >= min) && (max === -1 || width < max)
  }

  above = value => this.within(value, -1)
  below = value => this.within(-1, value)

  render() {
    const { windowSize } = this.state
    const { children } = this.props
    const { within, above, below } = this
    return (
      <Provider value={{ ...windowSize, within, above, below }}>
        {children}
      </Provider>
    )
  }
}

const Viewport = props => <Consumer {...props} />

Viewport.Provider = ViewportProvider

export { Viewport }
export default Viewport
