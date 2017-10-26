# Button

A simple Button component.

## Usage

```jsx
import { Button } from '@aragon/ui'

const App = () => (
  <Button>Hello World</Button>
)
```

## Properties

### `mode`

- Type: `String`
- Values: `"normal"` (default), `"outline"`, `"strong"` or `"text"`.

Set this property to the desired visual variant.

#### Example:

```jsx
const App = () => (
  <div>
    <Button mode="outline">Cancel</Button>
    <Button mode="strong">Accept</Button>
  </div>
)
```
