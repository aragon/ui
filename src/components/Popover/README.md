# Popover

## Usage

The Popover component makes use of React Context API to work. You only need one `Popover.Container` at the top level of your app.
You can then use `Popover` component wherever you like.

### Positioning relative to the mouse

Please check out TransactionProgress component and its example which uses the Popover component.

### Positioning relative to the "opener"

```jsx
import { TransactionProgress, Popover } from '@aragon/ui'

const Box = styled.div`
  width: 200px;
  height: 100px;
  background-color: red;
`

class PageTransactionProgress extends React.Component {
  state = {
    hide: true,
  }

  render() {
    const { hide } = this.state

    return (
      <Popover.Container>
        <div>
          <div
            ref={ref => {
              this.openerRef = ref
            }}
          >
            <Button
              onClick={e =>
                this.setState({
                  hide: false,
                })
              }
            >
              Show component
            </Button>
          </div>
          {!hide && (
            <Popover
              openerRef={this.openerRef}
              placement="top-start"
              gutter="20px"
            >
              <Box />
            </Popover>
          )}
        </div>
      </Popover.Container>
    )
  }
}
```

## Properties

### `openerRef`

- Type: `DOMNode`

Reference to the "opener"which is what the Popover is positioning relative to.

### `placement`

- Type: `String`
- Values: `top`, `bottom`, `left`and `right` which can be concatenated with `-start` and `-end` e.g. `top-start`

Placement of the Popover relative to the "opener".

### `gutter`

- Type: `String`
- Values: Should be in `px` e.g. `100px`

Space between Popover and the "opener".

### `top` and `left`

- Type: `String`
- Values: Should be in `px` e.g. `100px`

This is for absolute positioning of the component and is mostly used for positioning relative to the mouse.

### `zIndex`

- Type: `number`

zIndex of Popover.
