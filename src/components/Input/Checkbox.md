# Checkbox

A checkbox component.

## Usage

```jsx
import React from 'react'
import { Checkbox } from '@tecommons/ui'

class App extends React.Component {
  state = { checked: false }
  render() {
    return (
      <div>
        <label>
          <Checkbox
            checked={this.state.checked}
            onChange={checked => this.setState({ checked })}
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

Set to `true` to check the checkbox.

### `disabled`

- Type: `Boolean`
- Default: `false`

Set to `true` to disable the checkbox.

### `indeterminate`

- Type: `Boolean`
- Default: `false`

Set to `true` to set the checkbox to an indeterminate state (between checked and unchecked), represented by a dash.

Following the way it behave on the web platform, if set to `true`, `checked` is ignored. When clicked, `onChange` is called with `false`.

### `onChange`

- Type: `Function`: `(checked: Boolean) -> *`
- Default: `undefined`

This callback is called whenever the user selects the checkbox, using a pointer device or the keyboard.

#### Arguments:

- `checked`: The requested state for the check prop.
