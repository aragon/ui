import React, { useState, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import color from '../utils/color'
import light from './theme-light'
import dark from './theme-dark'

const EMBEDDED_THEMES = { dark, light }
const DEFAULT_THEME = 'light'
const RESERVED_KEYS = ['_name']

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
  return Object.entries(theme).reduce((theme, [name, value]) => {
    const convertedValue = RESERVED_KEYS.includes(name)
      ? value
      : color(value || '#FF00FF')

    return {
      ...theme,
      [name]: convertedValue,
    }
  }, {})
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

/*
 * Starting from here, we define a hook and a MainTheme component that is
 * meant to be used by the <Main /> component. This is not as generic as
 * using <Theme />, but it brings the concept of being able to toggle between
 * a light and a dark theme, even from a sub theme if needed.
 */

const MainThemeContext = React.createContext(
  convertThemeColors(getTheme(DEFAULT_THEME))
)

function useDarkMode() {
  const { theme, setTheme } = useContext(MainThemeContext)

  const darkMode = useMemo(
    () => ({
      toggle: () => {
        setTheme(name => (name === 'light' ? 'dark' : 'light'))
      },
      enabled: theme === 'dark',
    }),
    [theme, setTheme]
  )

  return darkMode
}

function MainTheme({ children }) {
  const [theme, setTheme] = useState('light')
  return (
    <MainThemeContext.Provider value={{ theme, setTheme }}>
      <Theme theme={theme}>{children}</Theme>
    </MainThemeContext.Provider>
  )
}

MainTheme.propTypes = {
  children: PropTypes.node,
}

export { MainTheme, Theme, useDarkMode, useTheme }
