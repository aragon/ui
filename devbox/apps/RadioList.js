import React, { useState } from 'react'
import { RadioList, unselectable } from '@tecommons/ui'

const items = ['Strawberry', 'Banana', 'Apple', 'Cherry']

function App() {
  const [selected, setSelected] = useState(-1)
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        ${unselectable};
      `}
    >
      <div
        css={`
          display: flex;
          flex-direction: column;
        `}
      >
        <h1
          css={`
            margin-bottom: 20px;
            font-size: 20px;
          `}
        >
          RadioList
        </h1>

        <div css="display: flex">
          <RadioList
            title="Action Requirement"
            description="Here are some options you can use to perform it:"
            items={items.map(item => ({ title: item, description: item }))}
            onChange={setSelected}
            selected={selected}
          />
        </div>
      </div>
    </div>
  )
}

export default App
