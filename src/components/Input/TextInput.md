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

### `adornment`

- Type: `node`
- Default: `null`

Allows to add an icon or any other component inside of a `TextInput`.

### `adornmentPosition`

- Type: one of `'start'`, `'end'`
- Default: `'start'`

Set this to change the position of the adornment. `'start'` is displayed on the left, and `'end'` on the right. Note: in the future, the position will be reversed in right-to-left languages.

### `adornmentSettings.width`

- Type: `Number`
- Default: `34`

The total width of the adornment.

### `adornmentSettings.padding`

- Type: `Number`
- Default: `4`

The horizontal padding of the adornment.

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
