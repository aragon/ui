import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'
import { GU, textStyle } from '../../style'

const NORMAL = 'normal'
const SMALL = 'small'
const INFO = 'info'
const WARNING = 'warning'
const HELP = 'help'
const TAG = 'tag'
const APP = 'app'
const IDENTITY = 'identity'
const NOTIFICATION = 'notification'

function useMode(mode) {
  const theme = useTheme()

  if (mode === WARNING) {
    return `
      background: ${theme.warningSurface};
      color: ${theme.warningSurfaceContent};
    `
  }

  if (mode === HELP) {
    return `
      background: ${theme.helpSurface};
      color: ${theme.helpSurfaceContent};
    `
  }

  if (mode === TAG) {
    return `
      background: ${theme.tag};
      color: ${theme.tagContent};
    `
  }

  if (mode === APP) {
  }

  if (mode === IDENTITY) {
  }

  if (mode === NOTIFICATION) {
    return `
      background: ${theme.accent};
      color: ${theme.accentContent};
    `
  }

  // info
  return `
    background: ${theme.infoSurface.alpha(0.08)};
    color: ${theme.infoSurfaceContent};
  `
}

function useSize(size, uppercase) {
  if (size === SMALL) {
    return `
      ${textStyle('label3')};
      padding: 0 ${0.5 * GU}px;
      min-width: ${2 * GU}px;
      height: ${2 * GU}px;
    `
  }

  // normal
  return `
    ${textStyle('label2')};
    padding: ${uppercase ? '1.5px' : 0} ${1.5 * GU}px 0;
    min-width: 22px;
    height: ${3 * GU}px;
  `
}

function Tag({ children, mode, size, uppercase, color, background, ...props }) {
  const modeStyles = useMode(mode)
  const sizeStyles = useSize(size, uppercase)

  return (
    <span
      css={`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 100px;
        white-space: nowrap;
        ${modeStyles};
        ${sizeStyles};
        ${!uppercase && 'text-transform: unset'};
        ${color ? `color: ${color}` : ''};
        ${background ? `background: ${background}` : ''};
      `}
      {...props}
    >
      {children}
    </span>
  )
}

Tag.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  mode: PropTypes.oneOf([
    INFO,
    WARNING,
    HELP,
    TAG,
    APP,
    IDENTITY,
    NOTIFICATION,
  ]),
  size: PropTypes.oneOf([NORMAL, SMALL]),
  uppercase: PropTypes.bool,
}

Tag.defaultProps = {
  mode: INFO,
  size: NORMAL,
  uppercase: true,
}

export { Tag }
