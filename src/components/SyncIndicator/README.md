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

### `shift`

| Type     | Default value |
| -------- | ------------- |
| `Number` | `0`           |

Use this property to shift the position of the sync indicator from its “end position” (right on left to right languages).
