# SyncIndicator

When active, indicates a syncing state.

## Usage

```jsx
import { Main, SyncIndicator } from '@tecommons/ui'

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

| Type   | Default value     |
| ------ | ----------------- |
| `Node` | `"Syncing data…"` |

The label displayed by the indicator.

Note: the “folded hands” emoji 🙏 will be appended to the label. Use `children` if you wish to override this behavior.

### `children`

| Type   | Default value |
| ------ | ------------- |
| `Node` | None          |

Use `children` to override `label` and its emoji decoration.

### `shift`

| Type     | Default value |
| -------- | ------------- |
| `Number` | `0`           |

Use this property to shift the position of the sync indicator from its “end position” (right on left to right languages).
