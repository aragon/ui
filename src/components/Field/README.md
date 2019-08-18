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

## Props

### `label`

| Type     | Default value |
| ---------| ------------- |
| `String` | None          |

Set a label for your Field.

#### Example:

```jsx
const App = () => (
  <Field label="Billing Address">
    {/* Field Input(s) */}
  </Field>
)
```

### `required`

| Type      | Default value |
| ----------| ------------- |
| `Boolean` | None          |

Marks the field as a required field. If not provided, `Field` will attempt to
detect if the field is required by checking if any of its children contain a
truthy `required` prop.
