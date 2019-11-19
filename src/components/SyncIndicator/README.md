# SyncIndicator

When active, indicates a syncing state.

## Usage

```jsx
import { Main, SyncIndicator } from '@aragon/ui'

function App() {
  return (
    <Main>
      <SyncIndicator />
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

### `label`

| Type     | Default value     |
| -------- | ----------------- |
| `String` | `"Syncing data…"` |

The label displayed by the indicator.
