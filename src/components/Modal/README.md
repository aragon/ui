# Modal

The `Modal` component is used to render a structured container for modal windows.

## Usage

```jsx
import { Main, Modal, Button } from '@aragon/ui'

class App extends React.Component {
  state = {
    openModal: false,
  }

  render() {
    const { openModal } = this.state

    return (
      <Main>
        <Button
          onClick={() => {
            this.setState({
              openModal: true,
            })
          }}
        >
          Open Modal
        </Button>
        <Modal visible={openModal} onClose={this.handleClose}>
          <Button mode="secondary" onClick={this.handleClose}>
            Close modal
          </Button>
        </Modal>
      </Main>
    )
  }

  handleClose = () => {
    this.setState({ openModal: false })
  }
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
