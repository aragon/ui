import React from 'react'
import styled from 'styled-components'
import { Text } from '@aragon/ui'

class App extends React.Component {
  render() {
    return (
      <Text.Block
        size="great"
        css={`
          line-height: 100vh;
          text-align: center;
        `}
      >
        scratchpad
      </Text.Block>
    )
  }
}

export default App
