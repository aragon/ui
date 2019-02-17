import React from 'react'
import styled from 'styled-components'
import { AddressField } from '@aragon/ui'

class App extends React.Component {
  render() {
    return (
      <Main>
        <AddressField address="0x2c9341a52cfa3f2c2554ca1803134137b9366b3c" />
      </Main>
    )
  }
}

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
`

export default App
