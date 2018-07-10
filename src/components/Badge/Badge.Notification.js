import PropTypes from 'prop-types'
import React from 'react'
import { theme } from '../../theme'
import { formatIntegerRange } from '../../utils/format'
import Badge from './Badge'

const Notification = ({ children, label, small, ...props }) => (
  <Badge
    shape={small ? 'smalldisc' : 'disc'}
    background={theme.badgeNotificationBackground}
    foreground={theme.badgeNotificationForeground}
    {...props}
  >
    {children ||
      (typeof label === 'number' ? formatIntegerRange(label) : label)}
  </Badge>
)

Notification.defaultProps = {
  small: false,
}

Notification.propTypes = {
  children: PropTypes.node,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  small: PropTypes.bool,
}

export default Notification
