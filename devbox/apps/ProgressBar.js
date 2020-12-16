import React, { useCallback, useRef, useState } from 'react'
import styled from 'styled-components'
import { Button, ProgressBar, theme } from '@tecommons/ui'

function App() {
  const [value, setValue] = useState(-1)
  const clickCallback = value => () => setValue(value)

  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        padding: 20px;
        width: 250px;
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
        {[0, 0.5, 1, -1].map(v => (
          <Button
            key={v}
            mode="secondary"
            size="small"
            onClick={clickCallback(v)}
          >
            {v}
            {v === value && (
              <span
                css={`
                  position: absolute;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  height: 2px;
                  background: ${theme.accent};
                `}
              />
            )}
          </Button>
        ))}
      </div>
      {[100, 50, 30].map(size => (
        <div
          key={size}
          css={`
            width: ${size}%;
            margin-top: 20px;
            align-self: flex-start;
          `}
        >
          <ProgressBar value={value} />
        </div>
      ))}
    </div>
  )
}

export default App
