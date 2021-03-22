# Field

A wrapper component for form fields.

## Usage

```jsx
import { Field } from '@tecommons/ui'

const App = () => (
  <Field label="Enter name here:">
    <input />
  </Field>
)
```

## Props

### `label`

| Type     | Default value |
| -------- | ------------- |
| `String` | None          |

Set a label for your Field.

#### Example:

```jsx
const App = () => <Field label="Billing Address">{/* Field Input(s) */}</Field>
```

### `required`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | None          |

Marks the field as a required field. If not provided, `Field` will attempt to
detect if the field is required by checking if any of its children contain a
truthy `required` prop.

### `children`

| Type                       | Default value |
| -------------------------- | ------------- |
| `React node` or `Function` | None          |

The field content, usually a form element like `TextInput`.

When a function is passed, it will take an object as parameter containing an
`id` key, whose value is set to a unique id that can be passed to the desired form element.

Example:

```jsx
<Field label="Phone number">
  {({ id }) => (
    <p>
      <TextInput placeholder="Prefix" value="+44" />
      <TextInput placeholder="Number" value="" id={id} />
    </p>
  )}
</Field>
```
