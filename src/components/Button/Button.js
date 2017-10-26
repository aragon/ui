import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

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
  font-weight: 400;
  color: ${textSecondary};
  background: ${contentBackground};
  white-space: nowrap;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
`

const StyledButtonStrong = StyledButton.extend`
  font-weight: 600;
  color: ${gradientText};
  background-image: linear-gradient(130deg, ${gradientStart}, ${gradientEnd});
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

const Button = ({ children, mode = 'normal' }) => {
  const StyledComp = styledComponents[mode] || styledComponents['normal']
  return <StyledComp>{children}</StyledComp>
}

export {
  StyledButton,
  StyledButtonStrong,
  StyledButtonOutline,
  StyledButtonText,
}
export default Button
