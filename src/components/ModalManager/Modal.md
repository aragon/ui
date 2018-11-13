# Modal

The `Modal` component is used to render a structured container for modal windows. Please review the `ModalManager` component for a more detailed usage of this component.

## Usage

```jsx
import { Modal } from '@aragon/ui'

<Modal
  title={'Title'}
  body={<p>Body</p>}
  onHide={() => console.log('Hide modal callback')}
  More={<a href="https://ui.aragon.org/Modal" target="_blank">Learn more</a>}
/>
```

## Properties

### `title`

- Type: `String`
- Required

Use this property to add a title to the modal container.

### `body`

- Type: `Node`
- Required

Use this property to add a body to the modal container.

### `onHide`

- Type: `function`
- Default: `noop`

The callback that is called when the close button is clicked. Use this to hide the modal container when used with `ModalManager`.

### `More`

- Type: `Node`
- Default: `null`

Use this property to add an element (preferably a `Button` or `Link`) to the modal container to provide more information to the user.


### `zIndex`

- Type: `number`
- Default: `10`

`z-index` of Modal wrapper.


### `blocking`

- Type: `boolean`
- Default: `false`

Use this property to define whether the modal container will not hide when the user presses the `ESC` key or if they click outside the modal container.
