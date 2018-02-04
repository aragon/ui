import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import Badge from './Badge'

const App = props => (
  <Badge
    shape="round"
    background={theme.badgeAppBackground}
    foreground={theme.badgeAppForeground}
    {...props}
  />
)

export default App
