import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

export const AdornmentStyled = styled(({ component, ...props }) => {
  const { adornment, adornmentPosition, ...rest } = props
  return React.cloneElement(component, rest)
})`
  position: absolute;
  top: 5px;
  color: ${theme.textSecondary};
  ${props => props.adornment && adornmentPositionCss(props.adornmentPosition)}
`

const adornmentPositionCss = (position = 'start') => {
  switch (position) {
    case 'end':
      return `right: 4px;`
    case 'start':
    default:
      return `left: 4px;`
  }
}

export const inputPaddingCss = (position = 'start') => {
  switch (position) {
    case 'end':
      return `padding-right: 30px;`
    case 'start':
    default:
      return `padding-left: 30px;`
  }
}
