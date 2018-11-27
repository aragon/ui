# Checkbox

A checkbox component.

## Usage

```jsx
import { Checkbox } from '@aragon/ui'

const onChange = event => { console.log('checked', event.target.value) }

const App = () => (
  <div>
    <Checkbox checked index={0} value="first" onChange={onChange} /> First 
    <Checkbox index={1} value="second" onChange={onChange} /> Second
    <Checkbox index={2} value="third" onChange={onChange} /> Third
  </div>
)
```

## Properties

### Native `<input type="checkbox" />`

See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).
