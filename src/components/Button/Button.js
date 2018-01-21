/* @flow */
import type { ComponentType } from 'react'
import styled, { css } from 'styled-components'
import theme from '../../theme'
import { fontStyle } from '../../shared-styles'
import getPublicUrl, { styledPublicUrl as asset } from '../../public-url'
import cross from './assets/cross.svg'
import check from './assets/check.svg'
import crossWhite from './assets/cross-white.svg'
import checkWhite from './assets/check-white.svg'

const {
  gradientStart,
  gradientEnd,
  gradientStartActive,
  gradientEndActive,
  gradientText,
  contentBackground,
  contentBorder,
  contentBorderActive,
  secondaryBackground,
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

const modeSecondary = css`
  ${plainButtonStyles};
  background: ${secondaryBackground};
  &:hover,
  &:focus {
    box-shadow: none;
  }
`

const modeStrong = css`
  ${plainButtonStyles};
  color: ${gradientText};
  ${fontStyle({ size: 'small', weight: 'bold' })};
  background-image: linear-gradient(130deg, ${gradientStart}, ${gradientEnd});
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
  padding-top: 9px;
  padding-bottom: 9px;
  border: 1px solid ${contentBorder};
  &:hover,
  &:focus {
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

const compactStyle = css`
  padding: 5px 15px;
`

const positiveStyle = css`
  padding-left: 34px;
  background: url(${asset(check)}) no-repeat 12px calc(50% - 1px);
  ${({ mode }) => {
    if (mode !== 'strong') return ''
    return css`
      &, &:active {
        background-image: url(${asset(checkWhite)});
        background-color: ${theme.positive};
      }
      &:after {
        background: none;
      }
    `
  }};
`

const negativeStyle = css`
  padding-left: 30px;
  background: url(${asset(cross)}) no-repeat 10px calc(50% - 1px);
  ${({ mode }) => {
    if (mode !== 'strong') return ''
    return css`
      &, &:active {
        background-image: url(${asset(crossWhite)});
        background-color: ${theme.negative};
      }
      &:after {
        background: none;
      }
    `
  }};
`

type Mode = 'normal' | 'secondary' | 'strong' | 'outline' | 'text'
type Emphasis = 'positive' | 'negative'
type Props = {
  compact?: boolean,
  emphasis?: Emphasis,
  mode?: Mode,
  wide?: boolean,
}

const StyledButton = styled.button`
  width: ${({ wide }) => (wide ? '100%' : 'auto')};
  padding: 10px 15px;
  white-space: nowrap;
  ${fontStyle({ size: 'small', weight: 'normal' })};
  color: ${textSecondary};
  background: ${contentBackground};
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  outline: 0;
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
    if (mode === 'secondary') return modeSecondary
    if (mode === 'strong') return modeStrong
    if (mode === 'outline') return modeOutline
    if (mode === 'text') return modeText
    return modeNormal
  }};

  ${({ compact }) => (compact ? compactStyle : '')};

  ${({ emphasis }) => {
    if (emphasis === 'positive') return positiveStyle
    if (emphasis === 'negative') return negativeStyle
    return ''
  }};
`

type ButtonComponentType = {
  Anchor: ComponentType<Props>,
}

// Flow declaration: see https://github.com/styled-components/styled-components/issues/570#issuecomment-332087358
// Currently throwing errors: https://github.com/styled-components/styled-components/issues/1350
const Button: ComponentType<Props> & ButtonComponentType = getPublicUrl(
  StyledButton
)
const Anchor: ComponentType<Props> = getPublicUrl(
  StyledButton.withComponent('a').extend`
    display: inline-block;
    text-decoration: none;
  `
)

Button.Anchor = Anchor

export default Button
