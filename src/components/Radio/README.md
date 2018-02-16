# RadioGroup

A group of radio buttons.

## Usage

```jsx
import { Component } from 'react'
import { RadioGroup } from '@aragon/ui'

const items = [
  {
     title: 'An option',
     description: 'This is option A',
  },
  {
     title: 'Another option',
     description: 'This is option B',
  },
]

class App extends Component {
  state = {
    selected: 0,
  }
  handleChange = selected => {
    this.setState({ selected })
  }
  render() {
    return (
      <RadioGroup
        title="A radio group"
        description="You have two options:"
        items={items}
        selected={this.state.selected}
        onChange={this.handleChange}
      />
    )
  }
}
```

## Properties

### `description`

- Type: `Node`

Use this property to add a description to the radio group.

### `items`

- Type: `Array` containing objects of `{ description, title }`
- Default: `[]`

Use this property to define the radio items.

### `onChange`

- Type: `Function`
- Default: `() => {}`

This callback is called whenever the user selects a new item.

### `selected`

- Type: `Number` (must be an integer less than the length of `items`)
- Default: `0`

Set this property to the index of the active item.

### `title`

- Type: `Node`

Use this property to add a title to the radio group.
