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

## Properties

### `connectedAccount`

- Type: `Bool`
- Default: `false`

When diplaying the Badge Popover, verifies if the Badge is the same as the connected account, and renders: "This is your Ethereum address"

### `customLabel`

- Type: `String`

If it exists, it replaces the user's Ethereum account with a custom label.

### `entity`

- Type: `String`
- Default: `""` (Empty String)

It is passed to the method isAddress from Web3.js
"Checks if a given string is a valid Ethereum address. It will also check the checksum, if the address has upper and lowercase letters." (More info)[https://web3js.readthedocs.io/en/1.0/web3-utils.html#isaddress]

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

### `popoverTitle`

- Type: `Node`
- Default: `main`

The title of the popover. The type Node means that it can pass anything that can be rendered, such as num, string, DOM elements, an array of them, or fragments that contain them.

### `popoverAction`

- Type: `PopoverActionType`
- Default: `main`

The action of the popover. THe type `PopoverActionType` has two atributes: label (type: String - Required) and onClick (type: Function - Required)

### `shorten`

- Type: `Bool`
- Default: `true`

If true renders the first and last four characters of an Ethereum Address ('0x' doesn't count as part of the first four characters). i.e: address="0xcaf…5f2C"

### `compact`

- Type: `Bool`
- Default: `false`

Smaller version of the IdentityBadge.

### `badgeOnly`

- Type: `Bool`
- Default: `false`

Disables the badge as a button and doesn't prompt the popover.
