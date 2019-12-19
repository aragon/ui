import React, { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { color, warn } from '../utils'
import dark from './theme-dark'
import light from './theme-light'

// Every theme has a name and an appearance.
// The appearance can be either “dark” or “light”.
const APPEARANCES = ['dark', 'light']

const EMBEDDED_THEMES = { dark, light }
const THEME_DEFAULT = 'light'

const RESERVED_KEYS = ['_appearance', '_name']

const COLOR_FALLBACK = '#FF00FF'

function getTheme(theme) {
  if (!validateTheme(theme)) {
    warn('Theme invalid:', theme)
    warn(`Using the theme “${THEME_DEFAULT}”.`)
    return EMBEDDED_THEMES[THEME_DEFAULT]
  }
  if (typeof theme === 'string' && EMBEDDED_THEMES[theme]) {
    return EMBEDDED_THEMES[theme]
  }

  if (theme === EMBEDDED_THEMES[theme._name]) {
    return theme
  }

  const baseTheme =
    EMBEDDED_THEMES[theme._appearance === 'dark' ? 'dark' : 'light']

  return { ...baseTheme, ...theme }
}

const ThemeContext = React.createContext(
  convertThemeColors(getTheme(THEME_DEFAULT))
)

function convertThemeColor(name, value) {
  if (RESERVED_KEYS.includes(name)) {
    return value
  }

  try {
    return color(value)
  } catch (err) {
    return color(COLOR_FALLBACK)
  }
}

function convertThemeColors(theme) {
  return Object.entries(theme).reduce((theme, [name, value]) => {
    let convertedValue = convertThemeColor(name, value)

    return {
      ...theme,
      [name]: convertedValue,
    }
  }, {})
}

function validateTheme(theme) {
  return (
    (typeof theme === 'string' && EMBEDDED_THEMES[theme]) ||
    (theme && theme._name && APPEARANCES.includes(theme._appearance))
  )
}

function Theme({ theme, children }) {
  if (theme === undefined) {
    theme = THEME_DEFAULT
  }

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
  children: PropTypes.node,
  theme: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

function useTheme() {
  return useContext(ThemeContext)
}

Theme.THEME_DEFAULT = THEME_DEFAULT
Theme.EMBEDDED_THEMES = EMBEDDED_THEMES

export { Theme, useTheme }
