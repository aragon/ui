# Popover

## Usage

A simple Popover component with basic styles. It gets rendered at the root level so it can be declared wherever you like.

### Positioning relative to the "opener"

```jsx
import { Popover } from '@tecommons/ui'

function App() {
  const [visible, setVisible] = useState(false)
  const opener = React.createRef()

  return (
    <div>
      <Button onClick={() => setVisible(true)} ref={opener}>
        Show
      </Button>
      <Popover
        visible={visible}
        opener={opener.current}
        onClose={() => setVisible(false)}
      >
        Popover
      </Popover>
    </div>
  )
}
```

## Props

### `opener`

| Type          | Default value |
| ------------- | ------------- |
| `DOM Element` | null          |

Reference to the "opener"which is what the Popover is positioning relative to.

### `closeOnOpenerFocus`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `false`       |

While the Popover is opened, do not immediately close the Popover when the opener gets focused. This makes it possible to toggle its visibility from the opener, if its placement allows it.

### `placement`

- Type: `String`
- Values: `top`, `bottom`, `left`and `right` which can be concatenated with `-start` and `-end` e.g. `top-start`

Placement of the Popover relative to the "opener". Checkout [Popper.js](https://popper.js.org/index.html) for placement visuals.

### `zIndex`

| Type     | Default value |
| -------- | ------------- |
| `Number` | 999           |

zIndex of Popover.

### `onClose`

| Type       | Default value |
| ---------- | ------------- |
| `Function` | None          |

The callback that is called when the popover request to be closed. If this callback returns `false`, the popover will get focused again. This is useful to ensure that the `blur` event still gets triggered after a close request got rejected.

### `visible`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `true`        |

Whether or not the Popover is visible.

### `scaleEffect`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `true`        |

Set to `false` to disable the scaling effect when the popover appears and disappears.
