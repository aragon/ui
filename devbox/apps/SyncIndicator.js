import React, { useState } from 'react'
import { Button, SyncIndicator, useToast } from '@tecommons/ui'
import { ToggleThemeButton } from '../components/current-theme'

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
      <ToggleThemeButton />
      <SyncIndicator visible={show} estimate="3 hours" />

      <Button onClick={() => setShow(v => !v)} css="margin-top: 20px">
        {show ? 'hide' : 'show'}
      </Button>

      <Button onClick={() => toast('Test')} css="margin-top: 20px">
        Show toast
      </Button>
    </div>
  )
}

export default App
