# Radio

A radio button component.

## Usage

```jsx
import { Radio, RadioGroup } from '@aragon/ui'

const onChange = checked => { console.log('checked', checked) }

const App = () => (
  <RadioGroup>
    <Radio checked index={0} value="first" onChange={onChange} />
    <Radio index={1} value="second" onChange={onChange} />
    <Radio index={2} value="third" onChange={onChange} />
  </RadioGroup>
)
```

## Properties

### Native `<input type="radio" />`

See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).
