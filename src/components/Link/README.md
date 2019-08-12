# Link

A basic `<a />` anchor that is [safe](https://mathiasbynens.github.io/rel-noopener/) by default.

## Usage

```jsx
import { Link } from '@aragon/ui'

const App = () => (
  <Link href="https://example.com/">
    Example
  </Link>
)
```

## Props

### external

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `false`       |

Set to `true` to add a `target="_blank"` attribute.

### Other

Any other prop will be passed to the `<a>` element, see [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).
