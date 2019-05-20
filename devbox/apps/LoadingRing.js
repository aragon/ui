import React, { useState } from 'react'
import { LoadingRing } from '@aragon/ui'

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
      <LoadingRing paused={paused} />

      <button
        onClick={() => setPaused(v => !v)}
        css={`
          margin-top: 20px;
        `}
      >
        {paused ? 'start' : 'stop'}
      </button>
    </div>
  )
}

export default App
