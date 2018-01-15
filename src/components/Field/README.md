# Field

A wrapper component for form fields.

## Usage

```jsx
import { Field } from '@aragon/ui'

const App = () => (
  <Field label="Enter name here:">
    <input />
  </Field>
)
```

## Properties

### `label`

- Type: `String`

Set a label for your Field.

#### Example:

```jsx
const App = () => (
  <Field label="Billing Address">
    {/* Field Input(s) */}
  </Field>
)
```
