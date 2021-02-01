# AddressField

A field component to display Ethereum Adresses.

## Usage

```jsx
import { AddressField } from '@tecommons/ui'

function App() {
  return <AddressField address="0xcafE1A77e84698c83CA8931F54A755176eF75f2C" />
}
```

## Props

### `address`

| Type     | Default value   |
| -------- | --------------- |
| `String` | None (Required) |

Adress to display in the field.

#### Example:

```jsx
<AddressField address="0xcafE1A77e84698c83CA8931F54A755176eF75f2C" />
```

### `autofocus`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `true`        |

Focus the text field when the component gets mounted.

### `icon`

| Type   | Default value |
| ------ | ------------- |
| `Node` | None          |

Icon to display in the field. Can pass anything that can be rendered, such as num, string, DOM elements, an array of them, or fragments that contain them.

#### Example:

```jsx
<AddressField
  address="0xcafE1A77e84698c83CA8931F54A755176eF75f2C"
  icon={<img />}
/>
```
