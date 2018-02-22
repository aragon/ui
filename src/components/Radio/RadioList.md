# RadioList

A list of radio buttons.

## Usage

```jsx
import { Component } from 'react'
import { RadioList } from '@aragon/ui'

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
  handleSelect = selected => {
    this.setState({ selected })
  }
  render() {
    return (
      <RadioList
        title="A radio list"
        description="You have two options:"
        items={items}
        selected={this.state.selected}
        onSelect={this.handleSelect}
      />
    )
  }
}
```

## Properties

### `description`

- Type: `Node`

Use this property to add a description to the radio list.

### `items`

- Type: `Array` containing objects of `{ description, title }`
- Default: `[]`

Use this property to define the radio items.

### `onSelect`

- Type: `Function`
- Default: `() => {}`

This callback is called whenever the user selects a new item.

Note that this callback is different than `onChange`: see the underlying [`<RadioInput />`'s `onChange`](../radio-input/).

### `selected`

- Type: `Number` (must be an integer less than the length of `items`)
- Default: `0`

Set this property to the index of the active item.

### `title`

- Type: `Node`

Use this property to add a title to the radio list.

### `*`

All other props will be passed into the underlying [`<RadioInput />`](../radio-input/)
