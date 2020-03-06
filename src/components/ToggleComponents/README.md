# TransactionBadge

A component to hide/show components in a list

## Usage

```jsx
import { ToggleComponent } from '@aragon/ui'

const testApps = [
  { id: '1', name: 'foo' },
  { id: '2', name: 'bar' },
  { id: '3', name: 'zeu' },
]

function App() {
  return (
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
          <span>{name}</span>
        </div>
      ))}
    </ToggleComponent>
  )
}
```

## Props

### `label`

| Type     | Default value |
| -------- | ------------- |
| `String` | '' (required) |

Text to display in heading.

### `itemBaseHeight`

| Type     | Default value |
| -------- | ------------- |
| `number` | `35`          |

Base height of the items in the list.
