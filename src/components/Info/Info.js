import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../../theme'
import { GU, RADIUS, textStyle } from '../../style'

function getModeStyles(theme, mode) {
  if (mode === 'warning') {
    return {
      background: theme.warningSurface.alpha(0.24),
      borderColor: theme.warning,
      color: theme.warningSurfaceContent,
    }
  }
  if (mode === 'error') {
    return {
      background: theme.negativeSurface.alpha(0.24),
      borderColor: theme.negative,
      color: theme.negativeSurfaceContent,
    }
  }
  return {
    background: theme.infoSurface.alpha(0.08),
    borderColor: theme.info,
    color: theme.infoSurfaceContent,
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

    // Use surfaceContent if a title is used
    if (title) {
      styles.color = theme.surfaceContent
    }

    return styles
  }, [mode, theme, title])

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
            color: ${titleColor || theme.surfaceContentSecondary};
            ${textStyle('label2')};
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
  mode: PropTypes.oneOf(['info', 'warning', 'error']),
  color: PropTypes.string,
  titleColor: PropTypes.string,
  background: PropTypes.string,
  borderColor: PropTypes.string,
}

export { Info }
