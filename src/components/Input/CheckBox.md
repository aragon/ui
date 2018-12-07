# CheckBox

A checkbox component.

## Usage

```jsx
import { CheckBox } from '@aragon/ui'

const onChange = checked => { console.log('checked', checked) }

const App = () => (
  <div>
    <label><CheckBox onChange={onChange} checked /> First</label>
    <label><CheckBox onChange={onChange} /> Second</label>
    <label><CheckBox onChange={onChange} /> Third</label>
  </div>
)
```
