import React, { useContext, useMemo } from 'react'
import color from '../utils/color'
import light from './theme-light'

const DEFAULT_THEME = light

function convertThemeColors(theme) {
  return Object.entries(theme).reduce(
    (theme, [name, value]) => ({ ...theme, [name]: color(value) }),
    {}
  )
}

const ThemeContext = React.createContext(convertThemeColors(DEFAULT_THEME))

function Theme({ theme, children }) {
  const themeConverted = useMemo(() => convertThemeColors(theme), [theme])
  return (
    <ThemeContext.Provider value={themeConverted}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme() {
  return useContext(ThemeContext)
}

export { Theme, useTheme }
