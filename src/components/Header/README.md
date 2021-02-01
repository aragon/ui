# Header

`Header` is the top part of an app, generally containing the app title and a main action. It is generally declared first in `Main`, and only once.

## Usage

```jsx
import { Main, Header, Button } from '@tecommons/ui'

function App() {
  return (
    <Main>
      <Header
        primary="Tokens"
        secondary={<Button mode="strong" label="Add tokens" />}
      />
    </Main>
  )
}
```

## Props

### `children`

| Type         | Default value |
| ------------ | ------------- |
| `React node` | None          |

Sets the entire content of `Header`. Overrides both `primary` and `secondary` and their default styling. You should generally prefer using `primary` and `secondary`, when possible.

### `primary`

| Type         | Default value |
| ------------ | ------------- |
| `React node` | None          |

The left part of `Header` (for left-to-right languages). It is generally where the title of an app is set.

### `secondary`

| Type         | Default value |
| ------------ | ------------- |
| `React node` | None          |

The right part of `Header` (for left-to-right languages). It is generally where the main action of an app is set.

Note: when a `Button` is used here, containing both a `label` and an `icon`, it will automatically adapt its `display` to the available width, displaying either the label or the icon. To override this behavior, set the `display` prop of the `Button` to something else than `auto`.
