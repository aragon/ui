import React from 'react'
import PropTypes from 'prop-types'
import Timer from '../Timer/Timer'
import { warnOnce } from '../../utils'

class Countdown extends React.Component {
  deprecationWarning() {
    warnOnce(
      'Countdown',
      '"Countdown" has been deprecated. Please use "Timer" instead.'
    )
  }

  render() {
    this.deprecationWarning()
    const { end, removeDaysAndHours } = this.props
    const format = removeDaysAndHours ? 'ms' : 'dhms'
    return <Timer end={end} format={format} />
  }
}

Countdown.propTypes = {
  end: PropTypes.instanceOf(Date).isRequired,
  removeDaysAndHours: PropTypes.bool,
}

Countdown.defaultProps = {
  removeDaysAndHours: false,
}

export default Countdown
