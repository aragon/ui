import React from 'react'
import styled from 'styled-components'
import { Button } from '@1hive/1hive-ui'

class App extends React.Component {
  render() {
    return (
      <div
        css={`
          font-size: 60px;
          line-height: 100vh;
          text-align: center;
        `}
      >
        <Button mode="strong">change me</Button>
      </div>
    )
  }
}

export default App
