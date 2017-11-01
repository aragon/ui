import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import { fontStyle } from '../../shared-styles'

const {
  gradientStart,
  gradientEnd,
  gradientText,
  contentBackground,
  contentBorder,
  textPrimary,
  textSecondary,
} = theme

const StyledButton = styled.button`
  padding: 10px 25px;
  color: ${textSecondary};
  background: ${contentBackground};
  white-space: nowrap;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  ${fontStyle({ size: 'small', weight: 'normal' })};
`

const StyledButtonStrong = StyledButton.extend`
  color: ${gradientText};
  background-image: linear-gradient(130deg, ${gradientStart}, ${gradientEnd});
  ${fontStyle({ size: 'small', weight: 'bold' })};
`

const StyledButtonOutline = StyledButton.extend`
  background: transparent;
  border: 1px solid ${contentBorder};
`

const StyledButtonText = StyledButton.extend`
  padding: 10px;
  background: transparent;
`

const styledComponents = {
  normal: StyledButton,
  strong: StyledButtonStrong,
  outline: StyledButtonOutline,
  text: StyledButtonText,
}

const Button = ({ mode = 'normal', ...props }) => {
  const StyledComp = styledComponents[mode] || styledComponents['normal']
  return <StyledComp {...props} />
}

export {
  StyledButton,
  StyledButtonStrong,
  StyledButtonOutline,
  StyledButtonText,
}
export default Button
