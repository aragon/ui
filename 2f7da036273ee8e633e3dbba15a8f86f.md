# TextInput

A basic text input component. Not meant to be used for anything other than
`type=email|number|password|search|tel|text|url`.

## Usage

```jsx
import { TextInput } from '@aragon/ui'

const App = () => (
    <TextInput type="password" />
)
```

## Properties

### `type`

- Type: one of `'email'`, `'number'`, `'password'`, `'search'`, `'tel'`, `'text'`, `'url'`.
- Default: `'text'`

See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_<input>_types).

### `wide`

- Type: `Boolean`
- Default: `false`

Set to true to obtain an input that expands horizontally.

#### Example:

```jsx
const MyWideTextInput = () => (
  <TextInput wide />
)
```

### Native `<input />`

See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).

## Attached Components

### `Number`

A `type=number` input, supporting the same properties.
