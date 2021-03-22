# LoadingRing

An animated loading indicator.

## Usage

```jsx
import { Main, LoadingRing } from '@tecommons/ui'

function App() {
  return <Main><LoadingRing /></Main>
}
```

## Props

### `paused`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `false`       |

Set to `true` to pause the animation. Can be useful to optimize performances if the component is rendered but hidden.

### `mode`

| Type                             | Default value |
| -------------------------------- | ------------- |
| `"two-parts"` or `"half-circle"` | `"two-parts"` |

One of the predefined styles for the loading ring. The default is “two-parts”, which is smaller than “half-circle”.
