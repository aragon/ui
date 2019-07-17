import React, { useEffect, useState } from 'react'
import { useThemeMode, ButtonBase } from '@aragon/ui'

function ToggleThemeButton() {
  const { toggle, mode } = useToggleTheme()
  return (
    <ButtonBase
      onClick={toggle}
      css={`
        position: fixed;
        bottom: 0;
        left: 0;
        padding: 10px;
        z-index: 9;
      `}
    >
      {mode === 'dark' ? '🌝' : '🌚'}
    </ButtonBase>
  )
}

function useToggleTheme() {
  const { mode, toggle } = useThemeMode()

  useEffect(() => {
    const cb = e => {
      if (e.key === 't') {
        toggle()
      }
    }

    document.addEventListener('keypress', cb)
    return () => {
      document.removeEventListener('keypress', cb)
    }
  }, [])

  return { mode, toggle }
}

export { ToggleThemeButton, useToggleTheme }
