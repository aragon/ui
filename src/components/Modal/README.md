# Modal

The `Modal` component is used to render a structured container for modal windows.

## Usage

```jsx
import { Modal, Button } from '@tecommons/ui'

const App = () => {
  const [opened, setOpened] = useState(false)

  const open = () => setOpened(true)
  const close = () => setOpened(false)

  return (
    <>
      <Button onClick={open}>Open modal</Button>
      <Modal visible={opened} onClose={close}>
        {/* modal content */}
      </Modal>
    </>
  )
}
```

## Props

### `visible`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | Required      |

Use this property to show/hide the Modal.

### `width`

| Type                             | Default value                                    |
| -------------------------------- | ------------------------------------------------ |
| `Function`, `Number` or `String` | `viewport => Math.min(viewport.width - 48, 600)` |

Use this property to assign a dynamic width to the modal.

If a function is set, the data coming from Viewport will be passed to it.

If a number is set or returned from the function, `px` will automatically be added to it.

### `padding`

| Type                             | Default value |
| -------------------------------- | ------------- |
| `Function`, `Number` or `String` | `24`          |

The inner padding of the modal.

If a function is set, the data coming from Viewport will be passed to it.

If a number is set or returned from the function, `px` will automatically be added to it.

### `onClose`

| Type       | Default value |
| ---------- | ------------- |
| `Function` | None          |

This callback is called when the `ESC` key is pressed or the user clicks outside of the modal container.

### `onClosed`

| Type       | Default value |
| ---------- | ------------- |
| `Function` | None          |

This callback is called after the closing transition has completed and the content has been unmounted.

### `closeButton`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `true`        |

Whether or not to display a close button.
