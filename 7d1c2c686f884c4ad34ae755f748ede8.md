# Popover

## Usage

The Popover component makes use of React Context API to work. You only need one `RootProvider` component at the top level of your app.
You can then use `Popover` component wherever you like.

### Positioning relative to the "opener"

```jsx
import { RootProvider, Popover, TransactionProgress } from '@aragon/ui'

const Box = styled.div`
  width: 200px;
  height: 100px;
  background-color: red;
`

class PageTransactionProgress extends React.Component {
  state = {
    showPopover: false,
  }

  _opener = React.createRef()

  render() {
    const { showPopover } = this.state

    return (
      <RootProvider>
        <div>
          <div ref={this._opener}>
            <Button onClick={() => this.setState({ showPopover: true })}>
              Show component
            </Button>
          </div>
          <Popover
            visible={showPopover}
            opener={this._opener.current}
            onClose={() => this.setState({ showPopover: false })}
          >
            Hello World
          </Popover>
        </div>
      </RootProvider>
    )
  }
}
```

## Properties

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
