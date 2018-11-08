import React from 'react'
import styled from 'styled-components'
import {
  AragonApp,
  TransactionProgress,
  Popover,
  Root,
  Button,
  theme,
} from '@aragon/ui'

class App extends React.Component {
  state = {
    top: '0px',
    left: '0px',
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
    const { top, left, show } = this.state
    return (
      <AragonApp publicUrl="/aragon-ui/">
        <Root.Provider>
          <Wrapper>
            <div ref={this.handleRef}>
              <Button
                mode="secondary"
                onClick={this.handleClick}
                onClick={e =>
                  this.setState({
                    top: e.clientY + 'px',
                    left: e.clientX + 'px',
                    show: !show,
                  })
                }
                compact
              >
                Open
              </Button>
              {show && (
                <TransactionProgress
                  transactionHashUrl="https://etherscan.io/tx/0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060"
                  progress={0.3}
                  endTime={new Date(Date.now() + 100000)}
                  openerRef={this.openerRef}
                  onClose={this.handleClose}
                  top={top}
                  left={left}
                  slow
                />
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
  background: ${theme.contentBackground};
  border: 1px solid ${theme.contentBorder};
  border-radius: 3px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

export default App
