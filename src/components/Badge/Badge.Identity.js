import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import Badge from './Badge'

const Identity = props => (
  <Badge
    shape="compact"
    background={theme.badgeIdentityBackground}
    foreground={theme.badgeIdentityForeground}
    {...props}
  />
)

export default Identity
