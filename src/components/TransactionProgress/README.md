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
            slow={true}
            top={top}
            left={left}
            handleClose={() => this.setState({ hide: true })}
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
