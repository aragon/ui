import React from 'react'
import styled from 'styled-components'
import { TextInput, IconBlank } from '@aragon/ui'

class App extends React.Component {
  render() {
    return (
      <div
        css={`
          display: flex;
          flex-direction: column;
          gap: 20px;
          height: 100vh;
          align-items: center;
          justify-content: center;
        `}
      >
        <TextInput
          css="width: 80px"
          adornment="ETH"
          adornmentPosition="end"
          adornmentSettings={{
            width: 55,
            padding: 8,
          }}
        />
        <TextInput
          css="width: 80px"
          adornment="$"
          adornmentPosition="start"
          adornmentSettings={{
            width: 36,
            padding: 8,
          }}
        />
        <TextInput />
        <TextInput adornment={<IconBlank />} adornmentPosition="start" />
        <TextInput adornment={<IconBlank />} adornmentPosition="end" />
        <TextInput.Multiline />
      </div>
    )
  }
}

export default App
