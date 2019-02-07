import React from 'react'
import styled from 'styled-components'
import { TransactionBadge } from '@aragon/ui'

const txHash =
  '0x96e31e4f272600413ec39b5ed4094e5b7b3e0da2c8780ef63267e894fc2c9f16'

class App extends React.Component {
  render() {
    return (
      <Main>
        <div>
          <span>Transaction</span>
          <TransactionBadge transaction={txHash} />
        </div>
        <div>
          <span>Unshortened</span>
          <TransactionBadge transaction={txHash} shorten={false} />
        </div>
        <div>
          <span>Invalid</span>
          <TransactionBadge transaction={txHash.slice(1)} />
        </div>
      </Main>
    )
  }
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 0;
  min-width: 0;
  height: 100vh;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    width: 700px;
    min-height: 0;
    min-width: 0;
  }
`

export default App
