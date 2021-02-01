# Icons

aragonUI icons are available as a set of components that share the same props API. Icons inherit from the CSS `color`.

You can see [the full list of icons](https://ui.aragon.org/icons/) on the website.

## Usage

```jsx
import { Main, IconEdit } from '@tecommons/ui'

function App() {
  return (
    <Main>
      <IconEdit />
    </Main>
  )
}
```

## Props

### `size`

| Type                                     | Default value |
| ---------------------------------------- | ------------- |
| `"tiny"`,`"small"`,`"medium"`, `"large"` | `"medium"`    |

The size of the button.
