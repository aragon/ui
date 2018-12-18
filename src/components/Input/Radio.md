# Radio

A radio button component.

## Usage

```jsx
import { Radio, RadioGroup } from '@aragon/ui'

const onChange = checked => { console.log('checked', checked) }

const App = () => (
  <Radio onCheck={onChange} checked />
)
```

## Properties

### `checked`

- Type: `Boolean`
- Default: `false`

Whether it is checked or not.

### `id`

- Type: `String` or `Number`

When the `<Radio />` is nested in a `<RadioGroup />`, this value is passed to
the `<RadioGroup />`'s `onChange` handler when the radio is checked.

If not, it is passed to the `onCheck` handler when the radio is checked.

### `onCheck`

- Type: `Function`: `(id: String|Number) -> *`

This callback is called whenever the user selects the radio.

#### Arguments:

- `id`: The value passed as the `id` prop.
