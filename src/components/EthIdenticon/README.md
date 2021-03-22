# EthIdenticon

A component to get the Ethereum Identicon, an image that identifies Ethereum Accounts.

## Usage

```jsx
import { EthIdenticon } from '@tecommons/ui'

const App = () => (
  <EthIdenticon
    address="0xcafE1A77e84698c83CA8931F54A755176eF75f2C"
    scale={3}
    radius={1}
    soften={0.7}
  />
)
```

## Props

### `address`

| Type     | Default value   |
| -------- | --------------- |
| `String` | None (Required) |

Ethereum adress.

### `scale`

| Type     | Default value   |
| -------- | --------------- |
| `Number` | `1`             |

Size of the image.

### `radius`

| Type     | Default value   |
| -------- | --------------- |
| `Number` | `0`             |

Border radius of the image. It helps to show curved edges or make circles.

### `soften`

| Type     | Default value   |
| -------- | --------------- |
| `Number` | `0.3`           |

Softens the colors of the image.

