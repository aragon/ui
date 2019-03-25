# Modal

The `Modal` component is used to render modal windows.

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
