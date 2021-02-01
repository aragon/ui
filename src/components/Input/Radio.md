# Radio

A radio button component.

## Usage

```jsx
import React from 'react'
import { Radio } from '@tecommons/ui'

class App extends React.Component {
  state = { checked: false }
  render() {
    return (
      <div>
        <label>
          <Radio
            id="strawberry"
            checked={this.state.checked}
            onChange={id => {
              console.log(
                `${singleChecked ? 'Unchecked' : 'Checked'} ${id}`
              )
              this.setState({ singleChecked: !singleChecked })
            }}
          />
          Click me
        </label>
      </div>
    )
  }
}
```

## Props

### `checked`

- Type: `Boolean`
- Default: `false`

Whether it is checked or not.

### `disabled`

- Type: `Boolean`
- Default: `false`

Set to `true` to disable the radio.

### `id`

- Type: `String` or `Number`

When the `<Radio />` is nested in a `<RadioGroup />`, this value is passed to
the `<RadioGroup />`'s `onChange` handler when the radio is checked.

If not, it is passed to the `onCheck` handler when the radio is checked.

### `onChange`

- Type: `Function`: `(id: String|Number) -> *`

This callback is called whenever the user selects the radio.

#### Arguments:

- `id`: The value passed as the `id` prop.
