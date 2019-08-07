# Tag

A Tag component.

## Usage

```jsx
import { Tag } from '@aragon/ui'

const App = () => (
  <Tag mode="info" size="compact">
    Tag
  </Tag>
)
```

## Props

### `mode`

- Type: `String`
- Values: `info` (default), `warning`, `help`, `tag`, `app`, `identity` and `notification`

Set of predefined color and background combinations.

### `size`

- Type: `String`
- Values: `normal` (default) or `compact`

Defines size and padding for the rendered component.

### `color`

- Type: `String` (color)

Optional. The text color.

### `background`

- Type: `String` (color)

Optional. The background color.

### `uppercase`

- Type: `Boolean`
- Default value: `true`

Defines the text style uppercase transformation for the contents.
