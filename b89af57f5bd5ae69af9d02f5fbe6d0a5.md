# ToastHub

The ToastHub component is used to display text message toasts.

## Usage

```jsx
import { ToastHub, Toast, Button } from '@aragon/ui'

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

## Properties

### `timeout`

- Type: `Number`
- Default value: `4000`

Set this property to change how long toasts will stick around.

### `showIndicator`

- Type: `Boolean`
- Default value: `false`

Set this property to `true` to add a small timout-indicator to toast messages.

### `threshold`

- Type: `Number`
- Default value: `Infinity`

Set this property to change the threshold of toasts being presented at the same time. This will be used as an aproximation or a guideline, but it will still allow bursts to at least show.

### `position`

- Type: one of `'left'`, `'center'`, `'right'`
- Default value: `end`

Set this property to change the position where toasts will appear.

### `top`

- Type: `Boolean`
- Default value: `false`

Set this property to `true` to make toasts appear from the top.

## Compound components

### `Toast`

The Toast component calls its render-child and passes a single function that allows you to create pop-up messages.
