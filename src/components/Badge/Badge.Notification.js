import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'
import theme, { colors } from '../../theme'
import { fontStyle } from '../../shared-styles'
import { formatCount } from '../../utils/format'
import Badge from './Badge'

const Notification = ({ count, small, children, ...props }) => {
  const isCount = count !== -1
  return (
    <Badge
      shape={small ? 'smalldisc' : 'disc'}
      background={theme.badgeNotificationBackground}
      foreground={theme.badgeNotificationForeground}
      {...props}
    >
      {isCount ? formatCount(count) : children}
    </Badge>
  )
}

Notification.defaultProps = {
  count: -1,
  small: false,
}

Notification.propTypes = {
  count: PropTypes.number,
  small: PropTypes.bool,
}

export default Notification
