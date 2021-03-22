# Bar

`Bar` is a component that represents a horizontal bar, generally combined with inner elements like a back button, an action button, or data filters. It is generally placed right above components like `Box` (see example), `DataView`, `Split` and `CardLayout`.

## Usage

```jsx
import { Main, BackButton, Bar, Button, Box } from '@tecommons/ui'

function App() {
  return (
    <Main>
      <Bar primary={<BackButton />} />
      <Box />
    </Main>
  )
}
```

## Props

### `children`

| Type         | Default value |
| ------------ | ------------- |
| `React node` | None          |

Sets the entire content of `Bar`. Overrides both `primary` and `secondary` and their default spacing. You should generally prefer using `primary` and `secondary`, when possible.

### `primary`

| Type         | Default value |
| ------------ | ------------- |
| `React node` | None          |

The left part (for left-to-right languages) of `Bar`. The `BackButton` component is often used here.

### `secondary`

| Type         | Default value |
| ------------ | ------------- |
| `React node` | None          |

The right part (for left to right languages) of `Bar`.
