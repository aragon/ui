import React, { useState } from 'react'
import styled from 'styled-components'
import { TextInput, IconBlank, SearchInput } from '@aragon/ui'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
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
      <SearchInput
        value={searchTerm}
        onChange={(value, ev) => {
          console.log('Search term changed: ', value)
          console.log('Search change event: ', ev)
          setSearchTerm(value)
        }}
      />
    </div>
  )
}

export default App
