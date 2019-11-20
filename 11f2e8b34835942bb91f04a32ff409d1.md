# FloatIndicator

A component displayed over the rest of the interface, to indicate a temporary state.

## Usage

```jsx
import { Main, FloatIndicator } from '@aragon/ui'

function App() {
  return (
    <Main>
      <FloatIndicator>Fetching data…</FloatIndicator>
    </Main>
  )
}
```

## Props

### `visible`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `true`        |

Set to `true` to display the indicator.

### `children`

| Type         | Default value |
| ------------ | ------------- |
| `React node` | None          |

The content of the indicator.
