import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import { font } from '../../shared-styles'

const BadgeNumber = ({ number = 0, small = false, ...props }) => (
  <Main small={small} {...props}>
    {number}
  </Main>
)

const Main = styled.span`
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  padding-top: 1px;
  width: ${({ small }) => (small ? '14' : '18')}px;
  height: ${({ small }) => (small ? '14' : '18')}px;
  line-height: ${({ small }) => (small ? '13' : '17')}px;
  border-radius: ${({ small }) => (small ? '7' : '9')}px;
  font-size: ${({ small }) => (small ? '10' : '12')}px;
  font-weight: 600;
  color: ${theme.positiveText};
  background: ${theme.positive};
`

export default BadgeNumber
