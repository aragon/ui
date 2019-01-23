import React from 'react'
import styled from 'styled-components'
import { AragonApp, IdentityBadge, Root, ToastHub } from '@aragon/ui'

class App extends React.Component {
  render() {
    return (
      <AragonApp publicUrl="/aragon-ui/">
        <Root.Provider>
          <ToastHub>
            <Main>
              <IdentityBadge
                entity="0x2c9341a52cfa3f2c2554ca1803134137b9366b3c"
                connectedAccount
              />
            </Main>
          </ToastHub>
        </Root.Provider>
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

export default App
