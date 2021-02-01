# RadioList

A list of radios with associated descriptions.

## Usage

```jsx
import { Component } from 'react'
import { RadioList } from '@tecommons/ui'

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
  handleChange = index => {
    console.log(`Selected radio at index: ${index}`)
    this.setState({ selectedItem: index })
  }
  render() {
    return (
      <RadioList
        title="A radio list"
        description="You have two options:"
        items={items}
        selected={this.state.selected}
        onChange={this.handleChange}
      />
    )
  }
}
```

## Props

### `className`

- Type: `String`

Sets the class name of the container.

### `description`

- Type: `Node`

Use this property to add a description to the radio list.

### `items`

- Type: `Array` containing objects of `{ description, title }`

Use this property to define the radio items.

### `onChange`

- Type: `Function`

Propagates the `index` of the selected radio back to the parent whenever the user selects a new item.

### `selected`

- Type: `Number` (must be an integer less than the length of `items`)
- Default: `0`

Set this property to the index of the active item.

### `title`

- Type: `Node`

Use this property to add a title to the radio list.
