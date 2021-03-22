# Link

A textual interactive element that can be used as an anchor (`<a>`) or as a button.

## Usage

```jsx
import { Link } from '@tecommons/ui'

function App() {
  return <Link href="https://example.com/">Example</Link>
}
```

## Props

### onClick

| Type       | Default value |
| ---------- | ------------- |
| `Function` | None          |

Gets called when the user activates the link. Like for `Button`, it gets called when the enter key is pressed on the keyboard.

### href

| Type     | Default value |
| -------- | ------------- |
| `String` | None          |

When set, the component will act like a normal HTML anchor.

### external

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `false`       |

Set to `true` to make the link external, which will add an underline. If a `href` is present, it will also add a `target="_blank"` attribute and [make it safe](https://mathiasbynens.github.io/rel-noopener/) by default.

### Other props

Any other prop will be passed to the `ButtonBase` component.
