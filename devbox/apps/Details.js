import React from 'react'
import {
  Details,
  IconAlert,
  IconAragon,
  IconAttention,
  SidePanel,
} from '@aragon/ui'

const apps = [
  { name: 'Tokens', icon: IconAlert },
  { name: 'Voting', icon: IconAragon },
  { name: 'Finance', icon: IconAttention },
]

function App() {
  return (
    <SidePanel title="Details demo">
      <Details label="More details">
        {apps.map(({ name, icon: Icon }) => (
          <div
            key={name}
            css={`
              display: flex;
              align-items: center;
              cursor: pointer;
            `}
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
      </Details>
    </SidePanel>
  )
}

export default App
