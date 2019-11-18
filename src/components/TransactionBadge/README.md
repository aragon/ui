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

- Type: `String` (Required)
- Default: `""`

A valid transaction hash. If using the default string or any invalid Txn Hash it will show "Invalid" in the badge.

### `shorten`

- Type: `Bool`
- Default: `true`

If true renders the first and last four characters of an Ethereum Address ('0x' doesn't count as part of the first four characters). i.e: address="0xcaf…5f2C"

### `fontSize`

- Type: `String`
- Default: `normal`
- Variations: {
  xxsmall: '11px',
  xsmall: '12px',
  small: '14px',
  normal: '15px',
  large: '16px',
  xlarge: '20px',
  xxlarge: '22px',
  great: '37px',}

Determines the fontSize of the label.

### `networkType`

- Type: `String`
- Default: `main`

Checks the type of network to get Etherscan's URL.

### `background`

- Type: `String`

Change the background color.
