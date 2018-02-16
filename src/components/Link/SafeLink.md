# SafeLink

A basic `<a />` anchor that sets `rel="noopener noreferrer"`. See [security rationale](https://mathiasbynens.github.io/rel-noopener).

## Usage

```jsx
import { SafeLink } from '@aragon/ui'

const App = () => (
  <SafeLink href="http://malicioussite.com" target="_blank">
    Malicious website
  </SafeLink>
)
```

## Properties

### Native `<a />`

See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).
