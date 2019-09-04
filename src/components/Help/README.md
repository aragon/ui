# Help

Provide contextual help content.

Note: when `Help` is used inside a `Box` heading, it will add the left margin automatically.

## Usage

```jsx
<Help hint="What are Ethereum addresses made of?">
  Ethereum addresses are composed of the prefix "0x", a common identifier for
  hexadecimal, concatenated with the rightmost 20 bytes of the Keccak-256 hash
  (big endian) of the ECDSA public key (the curve used is the so called
  secp256k1, the same as Bitcoin).
</Help>
```

## Props

### `hint`

| Type     | Default value   |
| -------- | --------------- |
| `String` | None (required) |

Used for the `title` attribute of the button.

### `children`

| Type         | Default value   |
| ------------ | --------------- |
| `React node` | None (required) |

The content that will be displayed inside the popover.
