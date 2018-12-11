# Checkbox

A checkbox component.

## Usage

```jsx
import { Checkbox } from '@aragon/ui'

const onChange = checked => { console.log('checked', checked) }

const App = () => (
  <div>
    <label><Checkbox onChange={onChange} checked /> First</label>
    <label><Checkbox onChange={onChange} /> Second</label>
    <label><Checkbox onChange={onChange} /> Third</label>
  </div>
)
```
