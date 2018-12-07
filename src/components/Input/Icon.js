import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

export const IconStyled = styled(({ component, ...props }) => {
  const { icon, iconPosition, ...rest } = props
  return React.cloneElement(component, rest)
})`
  position: absolute;
  top: 5px;
  color: ${theme.textSecondary};
  ${props => props.icon && iconPositionCss(props.iconPosition)}
`

const iconPositionCss = (position = 'left') => {
  switch (position) {
    case 'right':
      return `right: 4px;`
    case 'left':
    default:
      return `left: 4px;`
  }
}

export const inputPaddingCss = (position = 'left') => {
  switch (position) {
    case 'right':
      return `padding-right: 30px;`
    case 'left':
    default:
      return `padding-left: 30px;`
  }
}
