import React from 'react'
import styled from 'styled-components'
import { IdentityBadge } from '@aragon/ui'

class App extends React.Component {
  render() {
    return (
      <Main>
        <IdentityBadge
          entity="0x2c9341a52cfa3f2c2554ca1803134137b9366b3c"
          connectedAccount
        />
      </Main>
    )
  }
}

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export default App
