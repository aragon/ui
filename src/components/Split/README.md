# Split

`Split` creates a two column layout when the available horizontal space makes it possible. If not, it renders as a single column. Its slots generally contain components like `Box` or `DataView`.

## Usage

```jsx
import { Box, DataView, Main, Split } from '@tecommons/ui'

function App() {
  return (
    <Main>
      <Split
        primary={<DataView />}
        secondary={<Box heading="Secondary">Secondary content</Box>}
      />
    </Main>
  )
}
```

## Props

### `primary`

| Type         | Default value |
| ------------ | ------------- |
| `React node` | None          |

In two columns mode, this takes the wider space. It appears on the left (for left-to-right languages) or the right if `invert` is set to `horizontal`.

In single column mode, it appears above the `secondary` slot, or below if `invert` is set to `vertical`.

### `secondary`

| Type         | Default value |
| ------------ | ------------- |
| `React node` | None          |

In two columns mode, this is the narrower part. It appears on the right (for left to right languages) or the left if `invert` is set to `horizontal`.

In single column mode, it appears below the `primary` slot, or above if `invert` is set to `vertical`.

### `invert`

| Type                                     | Default value |
| ---------------------------------------- | ------------- |
| `"none"`, `"horizontal"` or `"vertical"` | `"none"`      |

Invert the two slots, vertically or horizontally.
