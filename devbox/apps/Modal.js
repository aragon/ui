import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Modal } from '@aragon/ui'

function App() {
  const [opened, setOpened] = useState(true)
  const [paragraphs, setParagraphs] = useState(3)
  return (
    <div
      css={`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 20px;
      `}
    >
      <Button
        onClick={() => {
          setOpened(true)
        }}
      >
        Modal
      </Button>
      <Modal
        visible={opened}
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
          <h1
            css={`
              display: flex;
              align-items: center;
              gap: 10px;
            `}
          >
            <span>Modal title </span>
            <button onClick={() => setParagraphs(Math.max(1, paragraphs - 1))}>
              -
            </button>
            <button onClick={() => setParagraphs(paragraphs + 1)}>+</button>
          </h1>
          {[...Array(paragraphs)].map((_, i) => (
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
