# TransactionProgress

## Usage

```jsx
import { RootProvider, Popover, TransactionProgress } from '@aragon/ui'

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
              Transaction progress
            </Button>
          </div>
            <TransactionProgress
              transactionHashUrl="https://etherscan.io/tx/0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060"
              progress={0.3}
              visible={!hide}
              endTime={new Date(Date.now() + 100000)}
              onClose={() => setState({ showPopover: false )}
              top={'0px'}
              left={'opx'}
              opener={opener}
              slow
            />
        </div>
      </RootProvider>
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
