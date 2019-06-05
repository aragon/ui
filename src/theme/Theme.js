import React, { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import color from '../utils/color'
import light from './theme-light'

const DEFAULT_THEME = light

const ThemeContext = React.createContext(convertThemeColors(DEFAULT_THEME))

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
  const themeConverted = useMemo(() => convertThemeColors(theme), [theme])
  return (
    <ThemeContext.Provider value={themeConverted}>
      {children}
    </ThemeContext.Provider>
  )
}

Theme.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.node,
}

export { Theme, useTheme }
