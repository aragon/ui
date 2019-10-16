# Switch

A simple switch component.

## Usage

```jsx
import React, { useState } from 'react'
import { Switch } from '@aragon/ui'

const App = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Switch
      checked={checked}
      onChange={setChecked}
    />
  )
}
```

## Props

### `checked`

- Type: `Boolean`
- Default: `false`

### `disabled`

- Type: `Boolean`
- Default: `false`

### `onChange`

- Type: `Function`: `(checked: Boolean) -> *`
- Default: `() => {}`
