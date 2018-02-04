import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'
import theme, { colors } from '../../theme'
import { fontStyle } from '../../shared-styles'
import { formatCount } from '../../utils/format'
import Badge from './Badge'

const Info = ({ count, small, children, ...props }) => (
  <Badge
    shape={small ? 'smalldisc' : 'disc'}
    background={theme.badgeInfoBackground}
    foreground={theme.badgeInfoForeground}
    {...props}
  >
    {count === -1 ? children : formatCount(count)}
  </Badge>
)

Info.defaultProps = {
  count: -1,
  small: false,
}

Info.propTypes = {
  count: PropTypes.number,
  small: PropTypes.bool,
}

export default Info
