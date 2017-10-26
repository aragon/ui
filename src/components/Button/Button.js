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


const modeStyles = {
  strong: `
    font-weight: 600;
    color: ${gradientText};
    background-image:
      linear-gradient(130deg, ${gradientStart}, ${gradientEnd});
  `,
  outline: `
      background: transparent;
      border: 1px solid ${contentBorder};
  `,
  text: `
      background: transparent;
  `,
}

const StyledButton = styled.button`
  padding: 10px 25px;
  font-weight: 400;
  color: ${textSecondary};
  background: ${contentBackground};
  white-space: nowrap;
  border: 0;
  border-radius: 3px;
  cursor: pointer;

  ${({ mode }) => modeStyles[mode] || ''};
`

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
)

export { StyledButton }
export default Button
