# Switch

A simple switch component.

## Usage

```jsx
import React, { useState } from 'react'
import { Switch } from '@tecommons/ui'

const App = () => {
  const [checked, setChecked] = useState(false)
  return <Switch checked={checked} onChange={setChecked} />
}
```

## Props

### `checked`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `false`       |

### `disabled`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `false`       |

### `onChange`

| Type                                  | Default value |
| ------------------------------------- | ------------- |
| `Function`: `(checked: Boolean) -> *` | `() => {}`    |
