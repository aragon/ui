# DropDown

A DropDown component.

## Usage

```jsx
import { DropDown } from '@tecommons/ui'

function App() {
  const [selected, setSelected] = useState(0)
  return (
    <DropDown
      items={['Wandering Thunder', 'Black Wildflower', 'Ancient Paper']}
      selected={selected}
      onChange={setSelected}
    />
  )
}
```

## Props

### `header`

| Type         | Default value |
| ------------ | ------------- |
| `React node` | None          |

A header that will appear at the beginning of the items menu.

### `items`

| Type    | Default value   |
| ------- | --------------- |
| `Array` | None (required) |

Use this property to define the items of the DropDown menu.

### placeholder

| Type         | Default value      |
| ------------ | ------------------ |
| `React node` | `"Select an item"` |

The node displayed in the button when there is no selection.

### renderLabel

| Type              | Default value                          |
| ----------------- | -------------------------------------- |
| `React component` | `({ selectedLabel }) => selectedLabel` |

A function (or React component), used to display the button label.

#### Props

- `selectedLabel` (`String`): label of the selected item.
- `selectedIndex` (`Number`): index of the selected item.

### onChange(index, items)

| Type       | Default value   |
| ---------- | --------------- |
| `Function` | None (required) |

This callback is called whenever the user selects a new item.

#### Arguments

- `index` (`Number`): Index of the newly selected item in `props.items`.
- `items` (`Array`): the items passed in `props.items`.

### selected

| Type     | Default value |
| -------- | ------------- |
| `Number` | `-1`          |

Set this prop to the index of the active item. Set to `-1` to unselect and
display the placeholder.

### wide

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `false`       |

Takes the full width if set to `true`.

### width

| Type     | Default value |
| -------- | ------------- |
| `String` | None          |

Use this prop to set the CSS width of the button.

### disabled

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `false`       |

Disable the DropDown.
