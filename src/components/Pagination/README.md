# Pagination

A component to navigate through paginated content.

## Usage

```jsx
import { Box, Main, Pagination } from '@tecommons/ui'

function App() {
  const [selected, setSelected] = useState(0)
  return (
    <Main>
      <Box>
        <Pagination pages={20} selected={selected} onChange={setSelected} />
      </Box>
    </Main>
  )
}
```

## Props

### `onChange`

| Type                              | Default value |
| --------------------------------- | ------------- |
| `Function`: `(item: Number) -> *` | None          |

Gets called when the selected page changes. Takes the new index as a unique parameter.

### `pages`

| Type     | Default value |
| -------- | ------------- |
| `Number` | `0`           |

The total amount of pages.

### `selected`

| Type     | Default value |
| -------- | ------------- |
| `Number` | `0`           |

The currently selected page (zero based numbering).

### `touchMode`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `false`       |

When `true`, adapts the component to touch screens by making the targets bigger.
