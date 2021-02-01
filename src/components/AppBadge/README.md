# AppBadge

A component to get a badge for an app.

## Usage

```jsx
import { AppBadge } from '@tecommons/ui'

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

### `badgeOnly`

| Type   | Default value |
| ------ | ------------- |
| `Bool` | `false`       |

Disables the badge as a button and avoids prompting the popover on click.

### `iconSrc`

| Type     | Default value   |
| -------- | --------------- |
| `String` | None            |

Source of app's icon asset, preferrably 40x40. A default app icon will be used if this prop is not provided or if the given src was not loadable.

###  `identifier`

| Type     | Default value   |
| -------- | --------------- |
| `String` | None            |

The app's identifier.

### `labelStyle`

| Type     | Default value |
| -------- | ------------- |
| `String` | None          |

Styles to apply to the `label`.

###  `label`

| Type     | Default value   |
| -------- | --------------- |
| `String` | None (required) |

The app's short human readable name or custom label.

### `networkType`

- Type: `String`
- Default: `main`

Checks the type of network to get an Etherscan URL from the `appAddress`.

### `popoverTitle`

| Type   | Default value |
| ------ | ------------- |
| `Node` | `main`        |

The title of the popover. You can pass anything that can be rendered, such as a num, string, DOM element, an array of them, or React fragments that contain them.

### `popoverAction`

| Type                     | Default value |
| ------------------------ | ------------- |
| `BadgePopoverActionType` | None          |

The action of the popover

#### popoverAction.label

The node rendered in the popover's action button.

#### popoverAction.onClick

The onclick handler for the popover's action button.
