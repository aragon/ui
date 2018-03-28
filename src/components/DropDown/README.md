# DropDown

A DropDown component.

## Usage

```jsx
import { Component } from 'react'
import { DropDown } from '@aragon/ui'

const items = [
  'Wandering Thunder',
  'Black Wildflower',
  'Ancient Paper',
]

class App extends Component {
  state = {
    activeItem: 0,
  }
  handleChange(index) {
    this.setState({ activeItem: index })
  }
  render() {
    return (
      <DropDown
        items={items}
        active={this.state.activeItem}
        onChange={this.handleChange}
      />
    )
  }
}
```

## Properties

### `items`

- Type: `Array`
- Default: `[]`

Use this property to define the items of the DropDown menu.

### `active`

- Type: `Number`
- Default: `0`

Set this property to the index of the active item.

### `onChange`

- Type: `Function`: `(index: Number, items: Array) -> *`
- Default: `undefined`

This callback is called whenever the user selects a new item.

#### Arguments:

- `index`: Index in `props.items` of the newly selected item
- `items`: `props.items`

### `wide`

- Type: `Boolean`
- Default: `false`

Takes the full width if set to `true`.
