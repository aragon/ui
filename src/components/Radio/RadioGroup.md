# RadioGroup

A single-selection group of radios.

## Usage

```jsx
import { Component } from 'react'
import { Radio, RadioGroup } from '@tecommons/ui'

const RADIO_LABELS = ['First', 'Second', 'Third']

class App extends Component {
  state = {
    activeId: 'first',
  }
  handleChange = activeId => {
    this.setState({ activeId })
  }
  render() {
    const { activeId } = this.state
    return (
      <RadioGroup onChange={this.handleChange} selected={activeId}>
        {RADIO_LABELS.map((label, i) => {
          const radioId = label.toLowerCase()
          return (
            <label key={i}>
              <Radio id={radioId} />
              {label}
            </label>
          )
        })}
      </RadioGroup>
    )
  }
}
```

## Props

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
