import React from 'react'
import styled, { css } from 'styled-components'
import theme from '../../theme'
import { fontStyle } from '../../shared-styles'

const {
  gradientStart,
  gradientEnd,
  gradientStartActive,
  gradientEndActive,
  gradientText,
  contentBackground,
  contentBackgroundActive,
  contentBorder,
  contentBorderActive,
  textPrimary,
  textSecondary,
} = theme

// Plain button = normal or strong
const plainButtonStyles = css`
  position: relative;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0);
  &:after {
    content: '';
    opacity: 0;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &:hover,
  &:focus {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0);
    outline: 0;
    &:after {
      opacity: 1;
    }
  }
`

const modeNormal = css`
  ${plainButtonStyles};
  &:active {
    color: ${textPrimary};
  }
`

const modeStrong = css`
  ${plainButtonStyles};
  color: ${gradientText};
  background-image: linear-gradient(130deg, ${gradientStart}, ${gradientEnd});
  ${fontStyle({ size: 'small', weight: 'bold' })};
  &:after {
    background-image: linear-gradient(
      130deg,
      ${gradientStartActive},
      ${gradientEndActive}
    );
  }
`

const modeOutline = css`
  background: transparent;
  border: 1px solid ${contentBorder};
  &:hover, &:focus {
    border-color: ${contentBorderActive};
  }
  &:active {
    color: ${textPrimary};
    border-color: ${textPrimary};
  }
`

const modeText = css`
  padding: 10px;
  background: transparent;
  &:active,
  &:focus {
    color: ${textPrimary};
  }
`

const StyledButton = styled.button`
  padding: 10px 25px;
  white-space: nowrap;
  ${fontStyle({ size: 'small', weight: 'normal' })};
  color: ${textSecondary};
  background: ${contentBackground};
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  &,
  &:after {
    transition-property: all;
    transition-duration: 100ms;
    transition-timing-function: ease-in-out;
  }
  &::-moz-focus-inner {
    border: 0;
  }

  ${({ mode }) => {
    if (mode === 'strong') return modeStrong
    if (mode === 'outline') return modeOutline
    if (mode === 'text') return modeText
    return modeNormal
  }};
`

export { StyledButton }
export default StyledButton
