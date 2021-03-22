# ToastHub

The ToastHub component is used to display text message toasts.

## Usage

```jsx
import { ToastHub, Toast, Button } from '@tecommons/ui'

const App = () => (
  <ToastHub>
    <Toast>
      {toast => (
        <Button onClick={() => toast("hello world")</Button>}>Click me</Button>
      )}
    </Toast>
  </ToastHub>
)
```

## Props

### `timeout`

| Type     | Default value |
| -------- | ------------- |
| `Number` | `4000`        |

Set this property to change how long toasts will stick around.

### `showIndicator`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `false`       |

Set this property to `true` to add a small timout-indicator to toast messages.

### `threshold`

| Type     | Default value |
| -------- | ------------- |
| `Number` | `Infinity`    |

Set this property to change the threshold of toasts being presented at the same time. This will be used as an aproximation or a guideline, but it will still allow bursts to at least show.

### `position`

| Type                              | Default value |
| --------------------------------- | ------------- |
| `"left"`, `"center"` or `"right"` | `"end"`       |

Set this property to change the position where toasts will appear.

### `top`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `false`       |

Set this property to `true` to make toasts appear from the top.

### `shift`

| Type     | Default value |
| -------- | ------------- |
| `Number` | `0`           |

Use this property to shift the position of the toast from its “end position” (right on left to right languages).

## Compound components

### `Toast`

The Toast component calls its render-child and passes a single function that allows you to create pop-up messages.
