# Details

A component to let users reveal content.

## Usage

```jsx
import { Details } from '@tecommons/ui'

function App() {
  return (
    <Details label="More details">
      <p>Content to be revealed</p>
    </Details>
  )
}
```

## Props

### `label`

| Type   | Default value   |
| ------ | --------------- |
| `Node` | None (required) |

The heading, which is also the button users click to toggle the opened state.

### `children`

| Type   | Default value   |
| ------ | --------------- |
| `Node` | None (required) |

The content to reveal. Note that it this node is always mounted even when hidden, but this might change in the future.

### `opened`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | None          |

When set, allows to control the state of `Details` from the outside (as a [controlled component](https://reactjs.org/docs/forms.html#controlled-components)). Leave unset to let `Details` manage its own opened / closed state.

### `onToggle`

| Type       | Default value |
| ---------- | ------------- |
| `Function` | None          |

Gets called when the opened states changes, or is requested to change if `opened` is set. Takes the new opened state as a single parameter (`Boolean`).
