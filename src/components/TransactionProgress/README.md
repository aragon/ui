# TransactionProgress

## Usage

```jsx
import { TransactionProgress } from '@aragon/ui'

class App extends React.Component {
  state = {
    top: '0px',
    left: '0px',
    hide: true,
  }
  render() {
    const { top, left, hide } = this.state
    return (
      <div>
        {!hide && (
          <TransactionProgress
            transactionHash="0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060"
            progress={0.3}
            endTime={new Date(Date.now() + 100000)}
            top={top}
            left={left}
            handleClose={() => this.setState({ hide: true })}
            slow
          />
        )}
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
      </div>
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

### `top` and `left`

- Type: `String`
- Values: Should be in `px` e.g. `100px`

This is for absolute positioning of the component.

### `handleClose`

- Type: `Function`

Provide a function that handles closing of the component.
