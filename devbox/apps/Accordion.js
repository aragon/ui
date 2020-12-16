import React from 'react'
import styled from 'styled-components'
import { Header, Accordion, GU } from '@tecommons/ui'
import { Center } from '../components/Center'
import { createRandomInt } from '../utils'

const randomInt = createRandomInt()

function getItems(count) {
  return [...Array(count)].map((_, index) => {
    const height = randomInt(50, 300)
    return [`Item ${index + 1}`, <Expandable height={height} />]
  })
}

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

function App({ count = 20, header = <Header primary="Accordion" /> }) {
  const items = getItems(count)
  const accordion = <Accordion items={items} />
  return header ? (
    <div
      css={`
        padding-bottom: ${5 * GU}px;
      `}
    >
      {header}
      {accordion}
    </div>
  ) : (
    accordion
  )
}

export default App
