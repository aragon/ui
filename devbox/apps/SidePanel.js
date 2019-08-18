import React from 'react'
import styled from 'styled-components'
import {
  Button,
  SidePanel,
  SidePanelSeparator,
  SidePanelSplit,
  GU,
  unselectable,
} from '@aragon/ui'

class App extends React.Component {
  state = {
    opened: false,
  }

  open = () => {
    this.setState({ opened: true })
  }
  close = () => {
    this.setState({ opened: false })
  }

  render() {
    return (
      <React.Fragment>
        <Main>
          <Button mode="secondary" compact onClick={this.open}>
            Open
          </Button>
        </Main>
        <SidePanel
          title="My Panel"
          opened={this.state.opened}
          onClose={this.close}
        >
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
}

const Main = styled.div`
  ${unselectable};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
`

export default App
