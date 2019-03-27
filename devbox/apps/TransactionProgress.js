import React from 'react'
import styled from 'styled-components'
import { TransactionProgress, Popover, Root, Button, theme } from '@aragon/ui'

class App extends React.Component {
  state = {
    showPopover: false,
  }
  _opener = React.createRef()
  render() {
    const { showPopover } = this.state
    const { title } = this.props
    return (
      <Root.Provider>
        <Wrapper>
          <div ref={this.handleRef}>
            <Button
              ref={this._opener}
              mode="secondary"
              compact
              onClick={() => this.setState({ showPopover: true })}
            >
              Open
            </Button>
            <TransactionProgress
              transactionHashUrl="https://etherscan.io/tx/0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060"
              progress={0.3}
              endTime={new Date(Date.now() + 100000)}
              onClose={() => this.setState({ showPopover: false })}
              visible={showPopover}
              opener={this._opener.current}
              slow
            />
          </div>
        </Wrapper>
      </Root.Provider>
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
