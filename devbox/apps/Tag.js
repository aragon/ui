import React from 'react'
import styled from 'styled-components'
import { Tag } from '@aragon/ui'

const ITEMS = new Map([
  ['info', ['One', 'Two', 'Three', 'Four', 'Five']],
  ['warning', ['1', '22', '3333', '44444', '555555']],
  ['help', ['9+', '99+', '999+', 'i', '?']],
  ['tag', ['Other words', 'Simple', '2x', 'wanted', 'first issue']],
])

class App extends React.Component {
  render() {
    return (
      <div
        css={`
          display: grid;
          grid-template-columns: auto auto auto auto auto;
          grid-template-rows: auto auto auto auto;
          grid-gap: 10px;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 30vh;
          left: 30vw;
          right: 30vw;
          bottom: 30vh;
          overflow-y: scroll;
          overflow-x: hidden;
        `}
      >
        {Array.from(ITEMS.keys()).map(key =>
          ITEMS.get(key).map((item, i) => (
            <div key={i} css="text-align: center;">
              <Tag mode={key}>{item}</Tag>
            </div>
          ))
        )}
      </div>
    )
  }
}

export default App
