# Tag

A non-interactive component that can be used to display a small piece of information: general indicators, app / account identifiers, updates, or activity counters.

## Usage

```jsx
import { Tag } from '@aragon/ui'

function App() {
  return <Tag mode="new">New update</Tag>
}
```

## Props

### `mode`

- Type: `"indicator"`, `"identifier"`, `"new"` or `"activity"`
- Default: `"indicator"`

Set of predefined color, background and size combinations (which can be overridden by the corresponding props).

### `size`

- Type: `"normal"` or `"small"`
- Default: Depending on the current mode.

Defines size and padding for the rendered component.

### `color`

- Type: `String` (color)
- Default: Depending on the current mode.

The text color.

### `background`

- Type: `String` (color)
- Default: Depending on the current mode.

The background color.

### `uppercase`

- Type: `Boolean`
- Default value: `true`

Defines the text style uppercase transformation for the contents.

### `limitDigits`

- Type: `Boolean` or `Number`
- Default value: `false`

Use this to pass a number as the `label` prop of the Tag, and limit it to a certain number of digits. For example, `250` will be displayed as “99+” if the number of digits is `2`.

Set to `true` for the default number of digits (`2`), or set to the desired number.

### `label`

- Type: `React node`
- Default value: None

The label of the Tag.

### `icon`

- Type: `React node`
- Default value: None

The icon to be displayed in the label. It can be used alone or with `label`.

### `children`

- Type: `React node`
- Default value: None

The child content (takes priority over `label` and `icon`).
