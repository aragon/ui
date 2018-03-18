import React from 'react'
import PropTypes from 'prop-types'
import { isEqual } from 'date-fns/esm'
import getDisplayName from 'react-display-name'
import { difference } from '../../utils/date'

const EVERY_SECOND = 1000
const EVERY_MINUTE = EVERY_SECOND * 60
const EVERY_HOUR = EVERY_MINUTE * 60

const getRedrawTime = fromDate => {
  const { days, hours, minutes } = difference(new Date(), fromDate)
  return hours || days ? EVERY_HOUR : minutes ? EVERY_MINUTE : EVERY_SECOND
}

// Higher-order component for re-rendering based on a given date
// Automatically adjusts the re-render timer to be one second, minute, or hour
// based on the fromDate.
// For a discussion on pitfalls, see https://gist.github.com/staltz/08bf613199092eeb41ac8137d51eb5e6#gistcomment-2280414
const redrawFromDate = Component =>
  class extends React.Component {
    static propTypes = {
      fromDate: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(Date),
      ]),
      innerRef: PropTypes.func,
    }
    static defaultProps = {
      innerRef: () => {},
    }
    static displayName = `RedrawFromDate(${getDisplayName(Component)})`
    componentDidMount() {
      const { fromDate } = this.props
      if (fromDate) {
        this.restartDrawInterval(getRedrawTime(this.props.fromDate))
      }
    }
    componentWillReceiveProps({ fromDate }) {
      if (!fromDate && this.props.fromDate) {
        this.clearInterval()
      } else if (!isEqual(fromDate, this.props.fromDate)) {
        this.restartDrawInterval(getRedrawTime(this.props.fromDate))
      }
    }
    componentWillUnmount() {
      this.clearInterval()
    }
    clearInterval = () => {
      this.interval && clearInterval(this.interval)
    }
    restartDrawInterval = redrawTime => {
      this.clearInterval()

      this.interval = setInterval(() => {
        this.child ? this.child.forceUpdate() : this.forceUpdate()

        const newRedrawTime = getRedrawTime(this.props.fromDate)
        if (newRedrawTime !== redrawTime) {
          this.restartDrawInterval(newRedrawTime)
        }
      }, redrawTime)
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

export default redrawFromDate
