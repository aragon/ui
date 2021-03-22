# ButtonBase

A foundational component used to build other button-like components. When `href` is set, an `<a />` element will be used ([safe](https://mathiasbynens.github.io/rel-noopener/) by default). If not, a `<button />` element will be used instead. It also features a focused state. You might want to use `Link` or `Button` instead.

## Usage

```jsx
import { LinkBase } from '@tecommons/ui'

function App() {
  return (
    <LinkBase href="https://example.com/" external>
      Example
    </LinkBase>
  )
}
```

## Props

### disabled

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | false         |

When set to true, the `disabled` prop will be passed to the button element, and `onClick` will get ignored. If an `href` is present and `disabled` is true, the `href` won’t get passed to the `<a>` element underneath.

### external

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `false`       |

Ignored if `href` is not set. Set to `true` to add a `target="_blank"` attribute and [make it safe](https://mathiasbynens.github.io/rel-noopener/) by default.

### focusRingRadius

| Type     | Default value |
| -------- | ------------- |
| `Number` | `0`           |

The radius applied to the focus ring.

### focusRingSpacing

| Type                | Default value |
| ------------------- | ------------- |
| `Number` or `Array` | `0`           |

The space between the element and the focus ring. When an array is used, the first and second values will be used for the horizontal and vertical spacings, respectively.

### href

| Type     | Default value |
| -------- | ------------- |
| `String` | None          |

When set, the component will act like a normal HTML anchor.

### onClick

| Type       | Default value |
| ---------- | ------------- |
| `Function` | None          |

Gets called when the user activates the link. Like other buttons, it gets called when the enter key is pressed on the keyboard.

### showFocusRing

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `true`        |

Whether or not to display the focus ring when focused.

### Other props

Any other prop will be passed to the [`<a>` element ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)) if `href` is present, or the [`<button>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) otherwise.
