# Popover

## Usage

A simple Popover component with basic styles. It gets rendered at the root level so it can be declared wherever you like.

### Positioning relative to the "opener"

```jsx
import { Popover } from '@aragon/ui'

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

- Type: `DOMNode`

Reference to the "opener"which is what the Popover is positioning relative to.

### `placement`

- Type: `String`
- Values: `top`, `bottom`, `left`and `right` which can be concatenated with `-start` and `-end` e.g. `top-start`

Placement of the Popover relative to the "opener". Checkout [Popper.js](https://popper.js.org/index.html) for placement visuals.

### `zIndex`

- Type: `number`

zIndex of Popover.

### `onClose`

- Type: `function`

The callback that is called when the popover request to be closed.
