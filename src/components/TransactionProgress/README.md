# TransactionProgress

## Usage

```jsx
import { TransactionProgress, Popover } from '@aragon/ui'

class PageTransactionProgress extends React.Component {
  state = {
    top: '0px',
    left: '0px',
    hide: true,
  }
  render() {
    const { top, left, hide } = this.state

    return (
      <Popover.Container>
        <div>
          <div>
            <Button
              onClick={e =>
                this.setState({
                  top: e.clientY + 'px',
                  left: e.clientX + 'px',
                  hide: false,
                })
              }
            >
              Show component
            </Button>
          </div>
          {!hide && (
            <Popover top={top} left={left} zIndex={100}>
              <TransactionProgress
                transactionHashUrl="https://etherscan.io/tx/0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060"
                progress={0.3}
                endTime={new Date(Date.now() + 100000)}
                handleClose={() => this.setState({ hide: true })}
                slow
              />
            </Popover>
          )}
        </div>
      </Popover.Container>
    )
  }
}
```

## Properties

### `transactionHash`

- Type: `String`

Hash of transaction which will be opened on Etherscan.

### `progress`

- Type: `number`

Progress of transaction.

### `endTime`

- Type: `Date` object

Estimated end time of transaction.

### `slow`

- Type: `Bool`
- Default: `false`

Set to true to display a warning to the user that a transaction is slow.

### `handleClose`

- Type: `Function`

Provide a function that handles closing of the component.
