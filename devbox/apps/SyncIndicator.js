import React, { useState } from 'react'
import styled from 'styled-components'
import { SyncIndicator } from '@aragon/ui'

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
      <SyncIndicator visible={enabled} />

      <button onClick={() => setEnabled(v => !v)} css="margin-top: 20px">
        {enabled ? 'hide' : 'show'}
      </button>
    </div>
  )
}

export default App

