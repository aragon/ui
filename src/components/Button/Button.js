import React from 'react'
import styled, { css } from 'styled-components'
import SafeLink from '../Link/SafeLink'
import { theme } from '../../theme'
import { font, unselectable } from '../../utils/styles'
import { PublicUrl, styledUrl } from '../../providers/PublicUrl'
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
  disabled: disabledColor,
  disabledText,
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

  ${({ disabled }) =>
    disabled
      ? ''
      : css`
          &:hover,
          &:focus {
            box-shadow: ${({ disabled }) =>
              disabled ? 'none' : '0 1px 1px rgba(0, 0, 0, 0.2)'};
          }
          &:active {
            transform: translateY(1px);
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0);
            &:after {
              opacity: 1;
            }
          }
        `};
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
  ${font({ size: 'small', weight: 'bold' })};

  ${({ disabled }) =>
    disabled
      ? css`
          color: ${disabledText};
          background-color: ${disabledColor};
          background-image: none;
        `
      : css`
          color: ${gradientText};
          background-color: transparent;
          background-image: linear-gradient(
            130deg,
            ${gradientStart},
            ${gradientEnd}
          )};

          &:after {
            background-image: linear-gradient(
              130deg,
              ${gradientStartActive},
              ${gradientEndActive}
            );
          }
  `};
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

const smallStyle = css`
  padding: ${({ mode }) => (mode === 'outline' ? '4px 14px' : '5px 15px')};
`

const miniStyle = css`
  padding: ${({ mode }) => (mode === 'outline' ? '1px 11px' : '2px 12px')};
  ${font({ size: 'small' })};
`

const getEmphasisStyle = ({
  emphasisColor,
  icon,
  iconLight,
  iconX = '12px',
  iconY = 'calc(50% - 1px)',
  iconWidth = '34px',
}) => css`
  padding-left: ${iconWidth};
  background-image: url(${styledUrl(icon)});
  background-position: ${iconX} ${iconY};
  background-repeat: no-repeat;
  ${({ mode }) => {
    if (mode === 'normal') {
      return css`
        &,
        &:active {
          background-image: url(${styledUrl(icon)});
        }
      `
    }
    if (mode === 'strong') {
      return css`
        &,
        &:active {
          background-image: url(${styledUrl(iconLight)});
          background-color: ${emphasisColor};
        }
        &:after {
          background: none;
        }
      `
    }
    return ''
  }};
`

const positiveStyle = getEmphasisStyle({
  emphasisColor: theme.positive,
  icon: check,
  iconLight: checkWhite,
})

const negativeStyle = getEmphasisStyle({
  emphasisColor: theme.negative,
  icon: cross,
  iconLight: crossWhite,
  iconX: '10px',
  iconWidth: '30px',
})

const StyledButton = styled.button.attrs({ type: 'button' })`
  display: inline-block;
  width: ${({ wide }) => (wide ? '100%' : 'auto')};
  padding: 10px 15px;
  white-space: nowrap;
  ${font({ size: 'small', weight: 'normal' })};
  ${unselectable};
  text-decoration: none;
  color: ${textSecondary};
  background: ${contentBackground};
  border: 0;
  border-radius: 3px;
  outline: 0;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

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

  ${({ compact, size }) => {
    if (size === 'small' || compact) return smallStyle
    if (size === 'mini') return miniStyle
    return ''
  }};

  ${({ emphasis }) => {
    if (emphasis === 'positive') return positiveStyle
    if (emphasis === 'negative') return negativeStyle
    return ''
  }};
`

const Button = React.forwardRef((props, ref) => (
  <PublicUrl>
    {url => <StyledButton ref={ref} publicUrl={url} {...props} />}
  </PublicUrl>
))

Button.Anchor = React.forwardRef((props, ref) => (
  <Button ref={ref} as={SafeLink} {...props} />
))

export default Button
