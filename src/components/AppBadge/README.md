# AppBadge

A component to get a badge for an app.

## Usage

```jsx
import { AppBadge } from '@aragon/ui'

function App() {
  return (
    <AppBadge
      appAddress="0x281c36aee91…c31ef3fc115"
      iconSrc="ipfs.io/ipfs/..."
      label="50% 50%"
      name="Voting"
    />
  )
}
```

## Props

### `appAddress`

| Type     | Default value   |
| -------- | --------------- |
| `String` | None (required) |

The app's contract address.

### `iconSrc`

| Type     | Default value   |
| -------- | --------------- |
| `String` | None            |

Source of app's icon asset, preferrably 24x24. A default app icon will be used if this prop is not provided or if the given src was not loadable.

###  `identifier`

| Type     | Default value   |
| -------- | --------------- |
| `String` | None            |

The app's identifier.

###  `label`

| Type     | Default value   |
| -------- | --------------- |
| `String` | None            |

A custom label for the app. If both the `identifier` and `label` are provided, `label` will take precendence.

###  `name`

| Type     | Default value   |
| -------- | --------------- |
| `String` | None (required) |

App's short human readable name.

### `networkType`

- Type: `String`
- Default: `main`

Checks the type of network to get Etherscan's URL.
