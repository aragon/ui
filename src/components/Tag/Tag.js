import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'
import { GU } from '../../style'

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

function Tag({ children, mode = 'info' }) {
  const modeStyles = useMode(mode)

  return (
    <span
      css={`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 100px;
        padding: 0 ${0.5 * GU}px;
        min-width: 22px;
        ${modeStyles};
      `}
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
}

export { Tag }
