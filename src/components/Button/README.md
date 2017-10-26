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
- Default value: `normal`
- Possible values: `'normal'`, `'outline'`, `'strong'`, `'text'`

Set this property to the desired style mode.

#### Example:

```jsx
const App = () => (
  <div>
    <Button mode="outline">Cancel</Button>
    <Button mode="strong">Accept</Button>
  </div>
)
```
