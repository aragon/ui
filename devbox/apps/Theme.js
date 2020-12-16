import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import {
  BackButton,
  Bar,
  Button,
  Header,
  Main,
  TextInput,
  Theme,
} from '@tecommons/ui'

function App() {
  const [theme, setTheme] = useState(Theme.EMBEDDED_THEMES.light)
  const [themeValue, setThemeValue] = useState(JSON.stringify(theme, null, 2))

  const handleChange = useCallback(event => {
    setThemeValue(event.target.value)
    try {
      setTheme(JSON.parse(event.target.value))
    } catch (err) {
      console.warn('Theme syntax error:', err.message)
    }
  }, [])

  return (
    <Main theme={theme}>
      <Header primary="Theme" />
      <Bar primary={<BackButton />} secondary={<Button label="Share" />} />

      <TextInput
        multiline
        wide
        value={themeValue}
        onChange={handleChange}
        css={`
          display: flex;
          height: 100vh;
          font-family: monospace;
        `}
      />
    </Main>
  )
}

App._bare = true

export default App
