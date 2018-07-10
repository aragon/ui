import PropTypes from 'prop-types'
import React from 'react'
import { theme } from '../../theme'
import { formatIntegerRange } from '../../utils/format'
import Badge from './Badge'

const Info = ({ children, label, small, ...props }) => (
  <Badge
    shape={small ? 'smalldisc' : 'disc'}
    background={theme.badgeInfoBackground}
    foreground={theme.badgeInfoForeground}
    {...props}
  >
    {children ||
      (typeof label === 'number' ? formatIntegerRange(label) : label)}
  </Badge>
)

Info.defaultProps = {
  small: false,
}

Info.propTypes = {
  children: PropTypes.node,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  small: PropTypes.bool,
}

export default Info
