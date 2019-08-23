# LinkBase

An `<a />` element that is [safe](https://mathiasbynens.github.io/rel-noopener/) by default. It also features a focused state. `LinkBase` is usually used as a foundation for other components, you might want to use `Link` instead.

## Usage

```jsx
import { LinkBase } from '@aragon/ui'

function App() {
  return <LinkBase href="https://example.com/">Example</LinkBase>
}
```

## Props

### onClick

| Type       | Default value |
| ---------- | ------------- |
| `Function` | None          |

Gets called when the user activates the link. Like other buttons, it gets called when the enter key is pressed on the keyboard.

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

### focusRingRadius

| Type     | Default value |
| -------- | ------------- |
| `Number` | `4`           |

The radius applied to the focus ring.

### focusRingSpacing

| Type     | Default value |
| -------- | ------------- |
| `Number` | `6`           |

The space between the element and the focus ring.

### focusVisible

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `true`        |

Whether or not to display the focused state.

### Other props

Any other prop will be passed to the `<a>` element, see [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).
