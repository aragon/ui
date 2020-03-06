import React from 'react'
import {
  ToggleComponent,
  GU,
  IconAlert,
  IconAragon,
  IconAttention,
  Button,
} from '@aragon/ui'

const testApps = [
  { id: '1', name: 'foo', icon: IconAlert },
  { id: '2', name: 'bar', icon: IconAragon },
  { id: '3', name: 'zeu', icon: IconAttention },
]

function App() {
  return (
    <div>
      <ToggleComponent label="Random Items" itemBaseHeight={4 * GU}>
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
      </ToggleComponent>
      <ToggleComponent label="Buttons" itemBaseHeight={4 * GU}>
        <Button label="Click Me!" />
        <Button label="Click Me Also!" />
      </ToggleComponent>
      <ToggleComponent label="I'm all alone" itemBaseHeight={4 * GU}>
        <Button label="Click Me!" />
      </ToggleComponent>
      <ToggleComponent
        css={`
          width: 30%;
        `}
        label="I Have Different Widths"
        itemBaseHeight={4 * GU}
      >
        <Button
          css={`
            width: 30px;
          `}
          label="Click Me!"
        />
      </ToggleComponent>
    </div>
  )
}

export default App
