import React from 'react'
import PropTypes from 'prop-types'
import Badge from '../Badge/Badge'
import { theme } from '../../theme'

const BadgeNumber = ({ number, small, background, color, ...props }) => (
  <Badge
    shape={small ? 'smalldisc' : 'disc'}
    background={background}
    foreground={color}
    {...props}
  >
    {number}
  </Badge>
)

BadgeNumber.propTypes = {
  number: PropTypes.number,
  small: PropTypes.bool,
  color: PropTypes.string,
  background: PropTypes.string,
}

BadgeNumber.defaultProps = {
  number: 0,
  small: false,
  color: theme.positiveText,
  background: theme.positive,
}

export default BadgeNumber
