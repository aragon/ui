# RadioInput

A radio button input component.

## Usage

```jsx
import { RadioGroup, RadioInput } from '@aragon/ui'

const onChange = event => { console.log('checked', event.target.value) }

const App = () => (
  <RadioGroup>
    <RadioInput checked index={0} value="first" onChange={onChange} />
    <RadioInput index={1} value="second" onChange={onChange} />
    <RadioInput index={2} value="third" onChange={onChange} />
  </RadioGroup>
)
```

## Properties

### `inline`

- Type: `Boolean`
- Default: `false`

Whether to display the radio button as an inline element or not.

### Native `<input type="radio" />`

See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).
