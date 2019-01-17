import React from 'react'
import styled from 'styled-components'
import { AragonApp, IdentityBadge } from '@aragon/ui'

class App extends React.Component {
  render() {
    return (
      <AragonApp publicUrl="/aragon-ui/">
        <Main>
          <Item>
            <IdentityBadge entity="Gulliver" />
          </Item>
          <Item>
            <IdentityBadge entity="0x2c9341a52cfa3f2c2554ca1803134137b9366b3c" />
          </Item>
        </Main>
      </AragonApp>
    )
  }
}

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Item = styled.div`
  display: flex;
  padding: 20px;
`

export default App
