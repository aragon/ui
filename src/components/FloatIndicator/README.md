# FloatIndicator

A component displayed over the rest of the interface, to indicate a temporary state.

## Usage

```jsx
import { Main, FloatIndicator } from '@tecommons/ui'

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

### `shift`

- Type: `Number`
- Default value: `0`

Use this property to shift the position of the float indicator from its “end position” (right on left to right languages).
