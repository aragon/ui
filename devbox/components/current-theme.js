import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Theme, ButtonBase, useTheme } from '@tecommons/ui'

const CurrentThemeContext = React.createContext({})

const themes = Object.keys(Theme.EMBEDDED_THEMES)

function CurrentTheme({ children }) {
  const [theme, setTheme] = useState(Theme.THEME_DEFAULT)

  const next = useCallback(() => {
    setTheme(theme => themes[(themes.indexOf(theme) + 1) % themes.length])
  }, [])

  return (
    <CurrentThemeContext.Provider value={{ theme, next }}>
      {children}
    </CurrentThemeContext.Provider>
  )
}

function useCurrentTheme() {
  return useContext(CurrentThemeContext)
}

function ToggleThemeButton() {
  const { _name: name } = useTheme()
  const currentTheme = useCurrentTheme()

  return (
    <ButtonBase
      onClick={currentTheme.next}
      css={`
        position: fixed;
        bottom: 0;
        left: 0;
        padding: 10px;
        z-index: 9;
      `}
    >
      {name === 'dark' ? '🌝' : '🌚'}
    </ButtonBase>
  )
}

export { CurrentTheme, useCurrentTheme, ToggleThemeButton }
