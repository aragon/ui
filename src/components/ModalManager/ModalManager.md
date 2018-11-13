# ModalManager

The `ModalManager` component is used to render modal windows. This component makes use of React Context API to work.

ModalManager exposes ModalProvider and ModalConsumer. You need one `ModalProvider` component to use the `ModalConsumer` component.

## ModalProvider

Use this at any parent level of the Component tree (top most prefereable) where you want to use the `ModalConsumer`.

## ModalConsumer

ModalConsumer exposes a `showModal` function which requires a Component and optional props. This function injects an `onHide` prop which you can use to hide the modal.
Please review the `Modal` component we provide to use here.

## Usage

```jsx
import { ModalProvider, ModalConsumer, Modal, Button } from '@aragon/ui'

const MyModal = ({ onHide }) => <Modal
  title={'Title'}
  body={<p>Body</p>}
  onHide={onHide}
  blocking={true}
  More={<a href="" target="_blank">Learn more</a>}
/>

<ModalProvider>
  <ModalConsumer>
    {({ showModal }) => (
      <Button
        mode="strong"
        compact
        onClick={() => showModal(MyModal, { /* optional props */ })}
      >
        Show modal
      </Button>
    )}
  </ModalConsumer>
</ModalProvider>
```
