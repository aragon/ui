import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'
import { GU, RADIUS, textStyle } from '../../style'

function getModeStyles(theme, mode) {
  if (mode === 'warning') {
    return {
      background: theme.warningSurface,
      borderColor: theme.warning,
      color: theme.warningSurfaceContent,
      titleColor: theme.warningSurfaceContent,
    }
  }
  if (mode === 'error') {
    return {
      background: theme.negativeSurface,
      borderColor: theme.negative,
      color: theme.negativeSurfaceContent,
      titleColor: theme.negativeSurfaceContent,
    }
  }
  if (mode === 'description') {
    return {
      background: theme.infoSurface,
      borderColor: theme.info,
      color: theme.surfaceContent,
      titleColor: theme.surfaceContentSecondary,
    }
  }
  console.log('DEFAULT', theme.infoSurface)
  return {
    background: theme.infoSurface,
    borderColor: theme.info,
    color: theme.infoSurfaceContent,
    titleColor: theme.infoSurfaceContent,
  }
}

function Info({
  children,
  mode,
  color,
  titleColor,
  background,
  borderColor,
  title,
  ...props
}) {
  const theme = useTheme()

  // Get styles from the current mode
  const modeStyles = useMemo(() => {
    const styles = getModeStyles(theme, mode)

    return styles
  }, [mode, theme])

  return (
    <section
      css={`
        color: ${color || modeStyles.color};
        background: ${background || modeStyles.background};
        border-left: 2px solid ${borderColor || modeStyles.borderColor};
        padding: ${2 * GU}px;
        border-radius: ${RADIUS}px;
        word-wrap: break-word;
        ${textStyle('body3')};
      `}
      {...props}
    >
      {title && (
        <h1
          css={`
            display: flex;
            align-items: center;
            color: ${titleColor || modeStyles.titleColor};
            ${textStyle('label2')};
            margin-bottom: ${1 * GU}px;
          `}
        >
          {title}
        </h1>
      )}
      {children}
    </section>
  )
}

Info.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  mode: PropTypes.oneOf(['info', 'description', 'warning', 'error']),
  color: PropTypes.string,
  titleColor: PropTypes.string,
  background: PropTypes.string,
  borderColor: PropTypes.string,
}

// Backward compatibility
function Warning(props) {
  return <Info mode="warning" {...props} />
}
Info.Action = Info
Info.Permissions = Warning
Info.Alert = Warning

export default Info
