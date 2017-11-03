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
  position: relative;
  color: ${gradientText};
  background-image: linear-gradient(130deg, ${gradientStart}, ${gradientEnd});
  ${fontStyle({ size: 'small', weight: 'bold' })};
  transition: all 150ms ease-in-out;

  &:after {
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.04);
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: translateY(0);
    box-shadow: none;
    outline: 0;
    &:after {
      opacity: 1;
    }
  }
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
