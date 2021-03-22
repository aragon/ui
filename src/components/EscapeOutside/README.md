# EscapeOutside

A component for handling outside clicks.

## Usage

```jsx
import { EscapeOutside } from '@tecommons/ui'

const App = () => (
  <EscapeOutside useCapture onEscapeOutside={handleOutsideInteraction}>
    {/* content */}
  </EscapeOutside>
)
```

## Props

### `onEscapeOutside`

| Type       | Default value   |
| ---------- | --------------- |
| `Function` | None (required) |

The callback to call after clicking outside of the wrapped element, or when pressing the `ESC` key.

### `useCapture`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | false         |

If `useCapture` is true, the event will be registered in the capturing phase and thus, propagated top-down instead of bottom-up as is the default.

See the (MDN web docs)[https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture] for more information on event bubbling vs capture.

### `children`

| Type         | Default value   |
| ------------ | --------------- |
| `React node` | None (required) |

The inner content to check when determining whether to trigger an outside event.
