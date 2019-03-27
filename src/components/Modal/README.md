# Modal

The `Modal` component is used to render a structured container for modal windows.

## Usage

```jsx
import { Main, Modal, Button } from '@aragon/ui'

const App = () => {
  const [opened, setOpened] = useState(false)
  return (
    <Main>
      <Button onClick={() => setOpened(true)}>
        Open modal
      </Button>

      <Modal
        visible={opened}
        onClose={() => setOpened(false)}
      >

        {/* content goes here */}
        <Button onClick={() => setOpened(false)}>
          Close modal
        </Button>

      </Modal>

    </Main>
  )
}
```

## Properties

### `visible`

- Type: `Boolean`
- Required

Use this property to show/hide the Modal.

### `width`

- Type: `Function`, `Number` or `String`
- Default: `viewport => Math.min(viewport.width - 48, 600)`

Use this property to assign a dynamic width to the modal.

If a function is set, the data coming from Viewport will be passed to it.

If a number is set or returned from the function, `px` will automatically be added to it.

### `padding`

- Type: `Function`, `Number` or `String`
- Default: `24`

The inner padding of the modal.

If a function is set, the data coming from Viewport will be passed to it.

If a number is set or returned from the function, `px` will automatically be added to it.

### `onClose`

- Type: `function`
- Default: `noop`

The callback that is called when the `ESC` i pressed or the user clicks outside of the modal container.
