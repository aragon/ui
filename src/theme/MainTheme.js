import React, { useState, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Theme } from './Theme'

/*
 * MainTheme is meant to be used by the <Main /> component. It trades the
 * genericity of `<Theme />` for the idea of a “main theme”, allowing to change
 * the mode of this main theme from anywhere, including from a sub (non main) theme.
 */

const MainThemeContext = React.createContext(null)

function useThemeMode() {
  const { theme, setTheme } = useContext(MainThemeContext)

  const themeMode = useMemo(
    () => ({
      toggle: () => {
        setTheme(name => (name === 'light' ? 'dark' : 'light'))
      },
      mode: theme === 'dark' ? 'dark' : 'light',
    }),
    [theme, setTheme]
  )

  return themeMode
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

export { MainTheme, useThemeMode }
