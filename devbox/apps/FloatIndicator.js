import React, { useState } from 'react'
import styled from 'styled-components'
import { FloatIndicator } from '@tecommons/ui'

function App() {
  const [enabled, setEnabled] = useState(true)
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
      <FloatIndicator visible={enabled}>Syncing data…</FloatIndicator>

      <button onClick={() => setEnabled(v => !v)} css="margin-top: 20px">
        {enabled ? 'hide' : 'show'}
      </button>
    </div>
  )
}

export default App
