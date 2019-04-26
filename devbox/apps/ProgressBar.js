import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, ProgressBar } from '@aragon/ui'

function App() {
  const [value, setValue] = useState(-1)

  const R = React.useRef(null)

  const set0 = React.useCallback(
    () => {
      setValue(0)
    },
    [setValue]
  )

  const set05 = React.useCallback(
    () => {
      setValue(0.5)
    },
    [setValue]
  )

  const set1 = React.useCallback(
    () => {
      setValue(1)
    },
    [setValue]
  )

  const setIndeterminate = React.useCallback(
    () => {
      setValue(-1)
    },
    [setValue]
  )

  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        padding: 20px;
        width: 400px;
        margin: 0 auto;
      `}
    >
      <div
        css={`
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        `}
      >
        <Button mode="secondary" size="small" onClick={set0} ref={R}>
          0
        </Button>
        <Button mode="secondary" size="small" onClick={set05}>
          0.5
        </Button>
        <Button mode="secondary" size="small" onClick={set1}>
          1
        </Button>
        <Button mode="secondary" size="small" onClick={setIndeterminate}>
          Indeterminate
        </Button>
      </div>
      <div
        css={`
          width: 100%;
        `}
      >
        <ProgressBar value={value} />
      </div>
    </div>
  )
}

export default App
