# ContextMenu

A contextual menu.

## Usage

```jsx
import { ContextMenu, ContextMenuItem } from '@tecommons/ui'

const App = () => (
  <ContextMenu>
    <ContextMenuItem>Some Action</ContextMenuItem>
    <ContextMenuItem>Another Action</ContextMenuItem>
  </ContextMenu>
)
```

## Props

### `zIndex`

| Type     | Default value |
| -------- | ------------- |
| `Number` | 0             |

zIndex of ContextMenu.

### disabled

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `false`       |

Disable the Context Menu Button.
