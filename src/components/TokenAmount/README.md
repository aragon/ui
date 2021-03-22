# TokenAmount

The Token Amount component is used to display a token logo followed by an amount and the token symbol.

## Usage

```jsx
import { TokenAmount } from '@tecommons/ui'

function App() {
  return (
    <TokenAmount
      address="0x6B175474E89094C44Da98b954EedeAC495271d0F"
      amount="1049228954700000000000"
      decimals={18}
      symbol="DAI"
    />
  )
}
```

## Props

### `address`

| Type     | Default value |
| -------- | ------------- |
| `string` | None          |

The address of the token contract, on the specified `chainId` (only Ethereum Mainnet is supported at the moment).

### `amount`

| Type                         | Default value   |
| ---------------------------- | --------------- |
| `BigInt`, `Number`, `String` | None (required) |

The token amount.

### `chainId`

| Type     | Default value |
| -------- | ------------- |
| `Number` | `1`           |

The [chain ID](https://chainid.network/) for the token. Only Ethereum Mainnet (`1`) is supported at the moment.

### `decimals`

| Type                         | Default value   |
| ---------------------------- | --------------- |
| `BigInt`, `Number`, `String` | None (required) |

The number of decimals for the token amount, [as specified by the token contract](https://eips.ethereum.org/EIPS/eip-20#decimals).

### `digits`

| Type                         | Default value |
| ---------------------------- | ------------- |
| `BigInt`, `Number`, `String` | `2`           |

Rounds the number to a given decimal place.

### `iconUrl`

| Type     | Default value |
| -------- | ------------- |
| `String` | None          |

Overrides the icon URL given by the token address.

### `size`

| Type                    | Default value |
| ----------------------- | ------------- |
| `"large"` or `"medium"` | `"medium"`    |

Size of the component.

### `symbol`

| Type     | Default value |
| -------- | ------------- |
| `String` | None          |

Overrides the symbol given by the token address.
