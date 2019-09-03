# TransactionBadge

A component to get a badge based on a transaction.

## Usage

```jsx
import { TransactionBadge } from '@aragon/ui'

function App() {
  return <TransactionBadge transaction="0x281c36aee91…c31ef3fc115" />
}
```

## Props

### `transaction`

| Type     | Default value   |
| -------- | --------------- |
| `String` | None (required) |

The transaction hash.

If this is not supplied or an invalid transaction hash is supplied, the badge will display "Invalid".

### `shorten`

| Type   | Default value |
| ------ | ------------- |
| `Bool` | `true`        |

If true, only render the first and last four characters of the transaction hash (excluding the '0x' prefix).

### `networkType`

- Type: `String`
- Default: `main`

Checks the type of network to get Etherscan's URL.
