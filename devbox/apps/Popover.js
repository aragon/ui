import React, { useRef, useState, useCallback } from 'react'
import styled from 'styled-components'
import { Popover, Root, Button } from '@aragon/ui'

function App({ title }) {
  const [show, setShow] = useState(false)
  const [opener, setOpener] = useState(null)

  const handleOpenerRef = useCallback(node => {
    setOpener(node)
  }, [])

  return (
    <div
      css={`
        display: grid;
        width: 800px;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        height: 100vh;
      `}
    >
      <div>
        <Button
          ref={handleOpenerRef}
          onClick={() => setShow(true)}
          size="small"
          mode="strong"
        >
          Open
        </Button>
        <Popover opener={opener} visible={show} onClose={() => setShow(false)}>
          <div css="padding: 50px">
            <span>hello </span>
            <Button mode="secondary" size="mini">
              focus me
            </Button>
          </div>
        </Popover>
      </div>
    </div>
  )
}

export default App
