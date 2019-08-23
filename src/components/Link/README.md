# LinkBase

The equivalent of the `<a />` element, but [safe](https://mathiasbynens.github.io/rel-noopener/) by default and featuring some styles and a focused state. It acts as a button when `onClick` is set.

## Usage

```jsx
import { Link } from '@aragon/ui'

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

Set to `true` to add a `target="_blank"` attribute.

### Other props

Any other prop will be passed to the `LinkBase` component, then to the [`<a>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).
