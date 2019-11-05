import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import {
  Box,
  Button,
  GU,
  Header,
  SidePanel,
  SidePanelSeparator,
  SidePanelSplit,
  Split,
} from '@aragon/ui'
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
            Panel content
          </p>
          <SidePanelSeparator />
          <p
            css={`
              margin: ${2 * GU}px 0;
            `}
          >
            Some more panel content
          </p>
          <SidePanelSeparator />
          <SidePanelSplit>
            <p>Left split</p>
            <p>Right split</p>
          </SidePanelSplit>
          <SidePanelSeparator />
        </div>
      </SidePanel>
    </React.Fragment>
  )
}

export default App
