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
    value: 'a',
  },
  {
    title: 'Another option',
    description: 'This is option B',
    value: 'b',
  },
]

class App extends Component {
  state = {
    selected: 0,
  }
  handleChange = event => {
    console.log(`Selected radio with value: ${event.target.value}`)
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
        onChange={this.handleChange}
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

- Type: `Array` containing objects of `{ description, title, value? }` (`value` is optional and will be used as the underlying radio's `value` attribute)
- Default: `[]`

Use this property to define the radio items.

### `onChange`

- Type: `Function`
- Default: `event => { event.stopPropagation() }`

Propagates `change` event back to the parent, see [MDN](https://developer.mozilla.org/en-US/docs/Web/Events/change).

By default, the event is prevented from propagating up to parents to avoid handling the `change` event if no `onChange` handler is given.

### `onSelect`

- Type: `Function`

Propagates the `index` of the selected radio back to the parent whenever the user selects a new item.

Note that this callback is different than `onChange` (see above).

### `selected`

- Type: `Number` (must be an integer less than the length of `items`)
- Default: `0`

Set this property to the index of the active item.

### `title`

- Type: `Node`

Use this property to add a title to the radio list.

### `*`

All other props will be passed into the underlying [`<RadioButton />`](../radio-button/)
