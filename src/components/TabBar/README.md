# TabBar

A simple tabs component.

## Usage

```jsx
import { useState } from 'react'
import { TabBar } from '@aragon/ui'

const App = () => {
  const [selected, setSelected] = useState(0)
  return (
    <TabBar
      items={['Orange', 'Pear', 'Cherry']}
      selected={selected}
      onChange={setSelected}
    />
  )
}
```

## Properties

### `items` (required)

- Type: `Array` of React nodes

The items that are going to be displayed in every tab.

### `selected`

- Type: `Number`
- Default: `0`

The currently selected tab, using its index.

### `onChange`

- Type: `Function`

When a tab is selected, this function gets called with the index of the tab as
a parameter.
