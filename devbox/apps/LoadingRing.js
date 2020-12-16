import React, { useState } from 'react'
import { Button, LoadingRing } from '@tecommons/ui'
import { ToggleThemeButton } from '../components/current-theme'

function App() {
  const [paused, setPaused] = useState(false)
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0 auto;
      `}
    >
      <ToggleThemeButton />
      <LoadingRing paused={paused} />

      <Button
        onClick={() => setPaused(v => !v)}
        css={`
          margin-top: 20px;
        `}
      >
        {paused ? 'start' : 'stop'}
      </Button>
    </div>
  )
}

export default App
