import React from 'react'
import PropTypes from 'prop-types'
import Timer from '../Timer/Timer'

class Countdown extends React.Component {
  render() {
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
