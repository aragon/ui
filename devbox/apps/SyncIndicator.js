import React, { useState } from 'react'
import { SyncIndicator, useToast } from '@aragon/ui'

function App() {
  const [show, setShow] = useState(true)
  const toast = useToast()
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
      <SyncIndicator visible={show} estimate="3 hours" />

      <button onClick={() => setShow(v => !v)} css="margin-top: 20px">
        {show ? 'hide' : 'show'}
      </button>

      <button onClick={() => toast('Test')} css="margin-top: 20px">
        Show toast
      </button>
    </div>
  )
}

export default App
