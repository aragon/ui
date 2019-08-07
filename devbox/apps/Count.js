import React from 'react'
import styled from 'styled-components'
import { Count } from '@aragon/ui'

const ITEMS = new Map([
  ['info', [1, 222, 333, 44444, 55555]],
  ['warning', [11, 222, 3333, 44444, 55555]],
  ['help', [1, 222, 333, 44444, 555555]],
  ['tag', [11, 222, 3333, 4444, 555555]],
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
              <Count mode={key} digits={i + 1} value={item} size="small" />
            </div>
          ))
        )}
      </div>
    )
  }
}

export default App
