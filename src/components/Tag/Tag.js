import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'
import { GU, textStyle } from '../../style'

const NORMAL = 'normal'
const COMPACT = 'compact'
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
  }

  // info
  return `
    background: ${theme.infoSurface.alpha(0.08)};
    color: ${theme.infoSurfaceContent};
  `
}

function useSize(size) {
  if (size === COMPACT) {
    return `
      ${textStyle('label3')};
      padding: 0 ${0.5 * GU}px;
      min-width: 14px;
    `
  }

  // normal
  return `
    ${textStyle('label2')};
    padding: 0 ${1.5 * GU}px;
    min-width: 22px;
  `
}

function Tag({ children, mode, size, uppercase, color, background, ...props }) {
  const modeStyles = useMode(mode)
  const sizeStyles = useSize(size)

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
        ${!uppercase ? 'text-transform: unset' : ''};
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
  children: PropTypes.node,
  mode: PropTypes.oneOf([
    INFO,
    WARNING,
    HELP,
    TAG,
    APP,
    IDENTITY,
    NOTIFICATION,
  ]),
  color: PropTypes.string,
  background: PropTypes.string,
  size: PropTypes.oneOf([NORMAL, COMPACT]),
}

Tag.defaultProps = {
  size: NORMAL,
  mode: INFO,
}

export { Tag }
