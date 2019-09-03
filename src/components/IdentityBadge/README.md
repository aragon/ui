# IdentityBadge

A component to get the Ethereum Identicon, an image that identifies Ethereum Accounts.

## Usage

```jsx
import { IdentityBadge } from '@aragon/ui'

function App() {
  return (
    <IdentityBadge
      customLabel="Custom Label User"
      entity="0xc41e4c10b37d3397a99d4a90e7d85508a69a5c4c"
      connectedAccount
    />
  )
}
```

## Props

### `badgeOnly`

| Type   | Default value |
| ------ | ------------- |
| `Bool` | `false`       |

Disables the badge as a button and doesn't prompt the popover.

### `compact`

| Type   | Default value |
| ------ | ------------- |
| `Bool` | `false`       |

Smaller version of the IdentityBadge.

### `connectedAccount`

| Type   | Default value |
| ------ | ------------- |
| `Bool` | `false`       |

When diplaying the Badge Popover, verifies if the Badge is the same as the connected account, and renders: "This is your Ethereum address"

### `customLabel`

| Type     | Default value |
| -------- | ------------- |
| `String` | None          |

If it exists, it replaces the user's Ethereum account with a custom label.

### `entity`

| Type     | Default value       |
| -------- | ------------------- |
| `String` | `""` (Empty string) |

It is passed to the method isAddress from Web3.js
"Checks if a given string is a valid Ethereum address. It will also check the checksum, if the address has upper and lowercase letters." (More info)[https://web3js.readthedocs.io/en/1.0/web3-utils.html#isaddress]

### `labelStyle`

| Type     | Default value |
| -------- | ------------- |
| `String` | None          |

Styles to apply to the label.

### `networkType`

| Type     | Default value |
| -------- | ------------- |
| `String` | `main`        |

Checks the type of network to get Etherscan's URL.

### `popoverTitle`

| Type   | Default value |
| ------ | ------------- |
| `Node` | `main`        |

The title of the popover. The type Node means that it can pass anything that can be rendered, such as num, string, DOM elements, an array of them, or fragments that contain them.

### `popoverAction`

| Type                | Default value |
| ------------------- | ------------- |
| `PopoverActionType` | None          |

The action of the popover.

#### popoverAction.label

The node rendered in the popover's action button.

#### popoverAction.onClick

The onclick handler for the popover's action button.

### `shorten`

| Type   | Default value |
| ------ | ------------- |
| `Bool` | `true`        |

If true renders the first and last four characters of an Ethereum Address ('0x' doesn't count as part of the first four characters). i.e: address="0xcaf…5f2C"
