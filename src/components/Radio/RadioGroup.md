# RadioGroup

A single-selection group of radios.

## Usage

```jsx
import { Component } from 'react'
import { Radio, RadioGroup } from '@aragon/ui'

const items = ['First', 'Second', 'Third']

class App extends Component {
  state = {
    value: '',
  }
  handleChange = event => {
    this.setState({ value: event.target.value })
  }
  render() {
    const { value } = this.state
    return (
      <RadioGroup name="group" onChange={this.handleChange}>
        {RADIO_LABELS.map((label, i) => {
          const radioValue = label.toLowerCase()
          return (
            <Label key={i} label={label}>
              <Radio
                inline
                checked={radioValue === value}
                value={radioValue}
              />
            </Label>
          )
        })}
      </RadioGroup>
    )
  }
}

const Label = ({ children, label, ...props }) => (
  <label>
    {React.Children.map(children, child =>
      React.cloneElement(child, {
        ...props,
      })
    )}
    {label}
  </label>
)
```

## Properties

### `className`

- Type: `String`

Sets the class name of the `radiogroup` container.

### `selected`

- Type: `Function`: `(id: String|Number) -> *`

Id of selected radio, if any.

### `onChange`

- Type: `Function`: `(id: String|Number) -> *`

This callback is called whenever the user selects a nested `<Radio />`.

#### Arguments:

- `id`: The value passed as the `<Radio />`'s `id` prop.

### `children`

An arbitrary component tree that should eventually render at least one or more
[`<Radio />`](./radio)s.
