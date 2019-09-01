import React from 'react'
import styled from 'styled-components'
import { Header, Accordion, GU } from '@aragon/ui'
import { Center } from '../components/Center'
import { createRandomInt } from '../utils'

const randomInt = createRandomInt()

const ITEMS = [...Array(20)].map((_, index) => {
  const height = randomInt(50, 300)
  return [`Item ${index + 1}`, <Expandable height={height} />]
})

function Expandable({ height }) {
  return (
    <div
      css={`
        height: ${height}px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      variable height ({height}px)
    </div>
  )
}

function App() {
  return (
    <div
      css={`
        padding-bottom: ${5 * GU}px;
      `}
    >
      <Header primary="Accordion" />
      <Accordion items={ITEMS} />
    </div>
  )
}

export default App
