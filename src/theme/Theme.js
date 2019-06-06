import React, { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import color from '../utils/color'
import light from './theme-light'
import dark from './theme-dark'

const EMBEDDED_THEMES = { dark, light }
const DEFAULT_THEME = 'light'

function getTheme(theme) {
  if (typeof theme === 'string' && EMBEDDED_THEMES[theme]) {
    return EMBEDDED_THEMES[theme]
  }
  return theme
}

const ThemeContext = React.createContext(
  convertThemeColors(getTheme(DEFAULT_THEME))
)

function convertThemeColors(theme) {
  return Object.entries(theme).reduce(
    (theme, [name, value]) => ({ ...theme, [name]: color(value) }),
    {}
  )
}

function useTheme() {
  return useContext(ThemeContext)
}

function Theme({ theme, children }) {
  const themeConverted = useMemo(() => convertThemeColors(getTheme(theme)), [
    theme,
  ])
  return (
    <ThemeContext.Provider value={themeConverted}>
      {children}
    </ThemeContext.Provider>
  )
}

Theme.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  children: PropTypes.node,
}

export { Theme, useTheme }
