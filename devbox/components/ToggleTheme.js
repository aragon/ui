import React, { useState } from 'react'
import { useDarkMode, ButtonBase } from '@aragon/ui'

function ToggleTheme({ children }) {
  const darkMode = useDarkMode()

  return (
    <>
      <ButtonBase
        onClick={darkMode.toggle}
        css={`
          position: absolute;
          top: 0;
          right: 0;
          padding: 10px;
        `}
      >
        {darkMode.enabled ? '🌝' : '🌚'}
      </ButtonBase>
      {children}
    </>
  )
}

export default ToggleTheme
