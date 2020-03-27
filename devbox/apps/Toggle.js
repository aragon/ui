import React from 'react'
import {
  IconAlert,
  IconAragon,
  IconAttention,
  _Toggle as Toggle,
} from '@aragon/ui'

const testApps = [
  { id: '1', name: 'foo', icon: IconAlert },
  { id: '2', name: 'bar', icon: IconAragon },
  { id: '3', name: 'zeu', icon: IconAttention },
]

function App() {
  return (
    <div>
      <Toggle label="Random Items">
        {testApps.map(({ id, name, icon: Icon }) => (
          <div
            css={`
              display: flex;
              align-items: center;
              cursor: pointer;
            `}
            key={id}
          >
            <Icon />
            <span
              css={`
                margin-left: 10px;
              `}
            >
              {name}
            </span>
          </div>
        ))}
      </Toggle>
    </div>
  )
}

export default App
