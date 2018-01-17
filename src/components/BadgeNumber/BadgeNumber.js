import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import { font } from '../../shared-styles'

const BadgeNumber = ({ number, small, background, color, ...props }) => (
  <Main small={small} background={background} color={color} {...props}>
    {number}
  </Main>
)

BadgeNumber.defaultProps = {
  number: 0,
  small: false,
  color: theme.positiveText,
  background: theme.positive,
}

const Main = styled.span`
  display: inline-flex;
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
  color: ${({ color }) => color};
  background: ${({ background }) => background};
`

export default BadgeNumber
