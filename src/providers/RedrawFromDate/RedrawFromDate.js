import React from 'react'
import PropTypes from 'prop-types'
import getDisplayName from 'react-display-name'
import { isEqual } from 'date-fns/esm'
import { difference } from '../../utils/date'

// Render prop component for re-rendering based on a given date. Automatically
// adjusts the re-render timer to be one second, minute, or hour based on the
// fromDate prop.
// For a discussion on pitfalls, see
// https://gist.github.com/staltz/08bf613199092eeb41ac8137d51eb5e6

const EVERY_SECOND = 1000
const EVERY_MINUTE = EVERY_SECOND * 60
const EVERY_HOUR = EVERY_MINUTE * 60

const getRedrawTime = fromDate => {
  const { days, hours, minutes } = difference(new Date(), fromDate)
  return hours || days ? EVERY_HOUR : minutes > 1 ? EVERY_MINUTE : EVERY_SECOND
}

class RedrawFromDate extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    fromDate: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]).isRequired,
  }
  state = {
    redrawTime: EVERY_HOUR,
    lastDraw: -1,
  }
  componentDidMount() {
    const { fromDate } = this.props
    if (fromDate) {
      this.restartDrawInterval(getRedrawTime(fromDate))
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
      this.setState({ lastDraw: Date.now() })

      const newRedrawTime = getRedrawTime(this.props.fromDate)
      if (newRedrawTime !== redrawTime) {
        this.restartDrawInterval(newRedrawTime)
      }
    }, redrawTime)
  }
  render() {
    return this.props.children()
  }
}

const hocWrap = Component => {
  const HOC = props => (
    <RedrawFromDate fromDate={props.fromDate}>
      {() => <Component {...props} />}
    </RedrawFromDate>
  )
  HOC.propTypes = {
    fromDate: RedrawFromDate.propTypes.fromDate,
  }
  HOC.displayName = `RedrawFromDate(${getDisplayName(Component)})`
  return HOC
}

RedrawFromDate.hocWrap = hocWrap

export { RedrawFromDate, hocWrap }
export default RedrawFromDate
