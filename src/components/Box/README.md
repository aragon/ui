# Box

`Box` is a component that renders as a surface as defined by aragonDS, and can optionally have a heading. It is commonly used in either slot of the `Split` component.

## Usage

```jsx
import { Box, Main, Split } from '@tecommons/ui'

function App() {
  return (
    <Main>
      <Split
        primary={<Box>Primary content</Box>}
        secondary={<Box heading="Secondary">Secondary content</Box>}
      />
    </Main>
  )
}
```

## Props

### `heading`

| Type         | Default value |
| ------------ | ------------- |
| `React node` | None          |

Displays a heading on top of the `Box`. Generally used when the `Box` is passed to the `secondary` prop of `Split`.

### `children`

| Type         | Default value |
| ------------ | ------------- |
| `React node` | None          |

The content of `Box`.

### `padding`

| Type     | Default value |
| -------- | ------------- |
| `Number` | None          |

The padding applied to the content of the box (i.e. the part below the heading, when set).

Note: when used in the `primary` slot of the `Split` component, the content padding will adapt to the layout (one or two columns). Set it to any value to override this behavior.
