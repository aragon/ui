import React, { useState } from 'react'
import styled from 'styled-components'
import { TextInput, IconBlank, SearchInput } from '@aragon/ui'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div
      css={`
        display: grid;
        grid-template-columns: 30% 1fr;
        grid-gap: 20px;
        padding: 40px 0;
      `}
    >
      <TextInput placeholder="Enter something" />
      <TextInput placeholder="Auto focused" autofocus />
      <form>
        <TextInput placeholder="Enter something" pattern="[A-Za-z]+" />
      </form>
      <TextInput
        css="width: 100px"
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
          width: 24,
          padding: 8,
        }}
      />
      <TextInput />
      <TextInput
        adornment={<IconBlank />}
        adornmentSettings={{ width: 55, padding: 25 }}
        adornmentPosition="start"
      />
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
      <TextInput
        adornment={<IconBlank />}
        adornmentSettings={{ width: 55, padding: 25 }}
        adornmentPosition="start"
        status={'success'}
      />
      <TextInput
        adornment={<IconBlank />}
        adornmentPosition="end"
        status={'error'}
      />
    </div>
  )
}

export default App
