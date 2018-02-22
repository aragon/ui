# RadioInput

A radio button input component.

## Usage

```jsx
import { RadioGroup, RadioInput } from '@aragon/ui'

const onSelect = index => { console.log('Selected', index) }

const App = () => (
  <RadioGroup>
    <RadioInput checked index={0} onSelect={onSelect} />
    <RadioInput index={1} onSelect={onSelect} />
    <RadioInput index={2} onSelect={onSelect} />
  </RadioGroup>
)
```

## Properties

### `index`

- Type: `Number`

Index of the radio button. Propagated back to the parent by `onSelect()` (see below).

### `inline`

- Type: `Boolean`
- Default: `false`

Whether to display the radio button as an inline element or not.

### `onChange`

- Type: `Function`
- Default: `event => { event.stopPropagation() }`

Propagates `change` event back to the parent, see [MDN](https://developer.mozilla.org/en-US/docs/Web/Events/change).

By default, the event is prevented from propagating up to parents to avoid handling the `change` event if no `onChange` handler is given.

### `onSelect`

- Type: `Function`

Propagates the `index` (see above) back to the parent. This is useful to control which radio button is selected when there are multiple radios in a [group](../radio-group/) or [list](../radio-list/).

### Native `<input type="radio" />`

See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).
