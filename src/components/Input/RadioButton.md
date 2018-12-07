# RadioButton

A radio button component.

## Usage

```jsx
import { RadioButton, RadioGroup } from '@aragon/ui'

const onChange = checked => { console.log('checked', checked) }

const App = () => (
  <RadioGroup>
    <RadioButton checked index={0} value="first" onChange={onChange} />
    <RadioButton index={1} value="second" onChange={onChange} />
    <RadioButton index={2} value="third" onChange={onChange} />
  </RadioGroup>
)
```

## Properties

### Native `<input type="radio" />`

See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).
