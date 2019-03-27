import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Modal } from '@aragon/ui'

function App() {
  const [opened, setOpened] = useState(true)
  return (
    <div
      css={`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        padding: 20px;
      `}
    >
      <Button
        mode="secondary"
        onClick={() => {
          setOpened(true)
        }}
      >
        Open modal
      </Button>
      <Modal
        visible={opened}
        padding={0}
        onClose={() => {
          setOpened(false)
        }}
      >
        <div
          css={`
            overflow: hidden;
            padding: 0 24px;
            h1,
            p {
              margin: 24px 0;
            }
            h1 {
              font-size: 24px;
            }
          `}
        >
          <h1>Modal title</h1>
          {[...Array(10)].map((_, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          ))}
        </div>
      </Modal>
    </div>
  )
}

export default App
