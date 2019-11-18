# ExternalLink

A basic `<a />` anchor that sets `target="_blank"` to load the URL into a new browsing context and uses [<SafeLink />](/safe-link/).

## Usage

```jsx
import { ExternalLink } from '@aragon/ui'

const App = () => (
  <ExternalLink href="http://malicioussite.com">
    External Link
  </ExternalLink>
)
```

## Props

See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).
