import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {
  Box,
  Button,
  Field,
  GU,
  Header,
  SidePanel,
  SidePanelSeparator,
  SidePanelSplit,
  Split,
  TextInput,
  useSidePanel,
} from '@tecommons/ui'
import Lorem from '../components/Lorem'

function App() {
  const [opened, setOpened] = useState(false)

  const open = useCallback(() => {
    setOpened(true)
  }, [])

  const close = useCallback(() => {
    setOpened(false)
  }, [])

  return (
    <React.Fragment>
      <Header
        primary="SidePanel"
        secondary={
          <Button onClick={open} mode="strong">
            Open SidePanel
          </Button>
        }
      />
      <Split
        primary={
          <Box>
            <Lorem repeat={10} />
          </Box>
        }
        secondary={
          <Box
            css={`
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            <Lorem repeat={3} />
          </Box>
        }
      />

      <SidePanel title="My Panel" opened={opened} onClose={close}>
        <MySidePanelContent />
      </SidePanel>
    </React.Fragment>
  )
}

function MySidePanelContent() {
  const inputRef = useRef()
  const { readyToFocus, status } = useSidePanel()

  useEffect(() => {
    if (readyToFocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [readyToFocus, inputRef])

  return (
    <div
      css={`
        margin-top: ${3 * GU}px;
      `}
    >
      <p
        css={`
          margin-bottom: ${3 * GU}px;
        `}
      >
        Panel content (status: {status})
      </p>
      <SidePanelSeparator />
      <p
        css={`
          margin: ${2 * GU}px 0;
        `}
      >
        Some more panel content
      </p>
      <Field label="Focus test">
        <TextInput wide ref={inputRef} />
      </Field>
      <SidePanelSeparator />
      <SidePanelSplit>
        <p>Left split</p>
        <p>Right split</p>
      </SidePanelSplit>
      <SidePanelSeparator />
    </div>
  )
}

export default App
