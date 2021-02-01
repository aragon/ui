# Tag

A non-interactive component that can be used to display a small piece of information: general indicators, app / account identifiers, updates, or activity counters.

## Usage

```jsx
import { Main, Tag } from '@tecommons/ui'

function App() {
  return (
    <Main>
      <Tag mode="new">New update</Tag>
    </Main>
  )
}
```

## Props

### `mode`

| Type                                                   | Default value |
| ------------------------------------------------------ | ------------- |
| `"indicator"`, `"identifier"`, `"new"` or `"activity"` | `"indicator"` |

Set of predefined color, background and size combinations (which can be overridden by the corresponding props).

### `size`

| Type                    | Default value               |
| ----------------------- | --------------------------- |
| `"normal"` or `"small"` | Depends of the current mode |

Defines size and padding for the rendered component.

### `color`

| Type             | Default value               |
| ---------------- | --------------------------- |
| `String` (color) | Depends of the current mode |

The text color.

### `background`

| Type             | Default value               |
| ---------------- | --------------------------- |
| `String` (color) | Depends of the current mode |

The background color.

### `uppercase`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `true`        |

Defines the text style uppercase transformation for the contents.

### `limitDigits`

| Type                  | Default value |
| --------------------- | ------------- |
| `Boolean` or `Number` | `false`       |

Use this to pass a number as the `label` prop of the Tag, and limit it to a certain number of digits. For example, `250` will be displayed as “99+” if the number of digits is `2`.

Set to `true` for the default number of digits (`2`), or set to the desired number.

### `label`

| Type         | Default value |
| ------------ | ------------- |
| `React node` | None          |

The label of the Tag.

### `icon`

| Type         | Default value |
| ------------ | ------------- |
| `React node` | None          |

The icon to be displayed in the label. It can be used alone or with `label`.

### `children`

| Type         | Default value |
| ------------ | ------------- |
| `React node` | None          |

The child content (takes priority over `label` and `icon`).
