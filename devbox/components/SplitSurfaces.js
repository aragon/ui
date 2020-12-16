import React from 'react'
import { useTheme } from '@tecommons/ui'
import { ToggleThemeButton } from '../components/current-theme'

function SplitSurfaces({ primary, secondary, themeToggle = true, ...props }) {
  const theme = useTheme()
  return (
    <div
      css={`
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        min-width: 600px;
        display: flex;

        & > div {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50%;
          height: 100vh;
        }
        & > div + div {
          background: ${theme.surface};
        }
      `}
      {...props}
    >
      {themeToggle && <ToggleThemeButton />}
      <div>{primary}</div>
      <div>{secondary}</div>
    </div>
  )
}

export default SplitSurfaces
