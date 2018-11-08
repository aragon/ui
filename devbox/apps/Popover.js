import React from 'react'
import styled from 'styled-components'
import { AragonApp, Popover, Root, Button } from '@aragon/ui'

class App extends React.Component {
  state = {
    show: false,
  }
  handleClose = () => {
    this.setState({ show: false })
  }
  handleClick = () => {
    this.setState(({ show }) => ({ show: !show }))
  }
  handleRef = ref => {
    this.openerRef = ref
  }
  render() {
    const { title } = this.props
    const { show } = this.state
    return (
      <AragonApp publicUrl="/aragon-ui/">
        <Root.Provider>
          <Wrapper>
            <div ref={this.handleRef}>
              <Button mode="secondary" onClick={this.handleClick} compact>
                Open
              </Button>
            </div>
            <div>
              {show && (
                <Popover
                  placement="top"
                  gutter="20px"
                  openerRef={this.openerRef}
                  onClose={this.handleClose}
                >
                  <Box>hi</Box>
                </Popover>
              )}
            </div>
          </Wrapper>
        </Root.Provider>
      </AragonApp>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
`

export default App
