import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Modal, IconPlus, IconMinus } from '@aragon/ui'
import Lorem from '../components/Lorem'

function App() {
  const [opened, setOpened] = useState(false)
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
      <Button onClick={() => setOpened(true)}>Modal</Button>
      <Modal visible={opened} onClose={() => setOpened(false)}>
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
            <div>
              <Button
                icon={<IconMinus />}
                onClick={() => setParagraphs(Math.max(1, paragraphs - 1))}
              />
            </div>
            <div>
              <Button
                icon={<IconPlus />}
                onClick={() => setParagraphs(paragraphs + 1)}
              />
            </div>
          </h1>
          <Lorem repeat={paragraphs} />
        </div>
      </Modal>
    </div>
  )
}

export default App
