# Modal

The `Modal` component is used to render a structured container for modal windows.

## Usage

```jsx
import { RootProvider, Modal, Button } from '@aragon/ui'

class App extends React.Component {
  state = {
    openModal: false,
  }

  render() {
    const { openModal } = this.state

    return (
      <RootProvider>
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
      </RootProvider>
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

### `onClose`

- Type: `function`
- Default: `noop`

The callback that is called when the `ESC` i pressed or the user clicks outside of the modal container.

### `zIndex`

- Type: `number`
- Default: `1`

`z-index` of Modal wrapper. Setting this prop shouldn’t be needed as `Modal` always renders at the top level of your aragonUI app, but it is available if needed.
