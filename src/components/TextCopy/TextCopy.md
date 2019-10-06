# TextInput

A readonly text input component that allows the user to copy the value to the clipboard.

Extra-properties will be passed to the TextInput

## Usage

```jsx
function App() {
  const [value, setValue] = useState('')
  return (
    <TextCopy
      value={value}
      onClick={() => {
				// ... do something
      }}
    />
  )
}
```

## Props

### `button`

| Type         | Default value |
| ------------ | ------------- |
| `Object`     | `null`        |

### `onClick`

| Type       | Default value |
| ---------- | ------------- |
| `Function` | None          |

The native `click` event. Gets triggered when the copy button is clicked.

### `multiline`

- Type: `Boolean`
- Default: `false`

Set to true to use multiple lines. Internally uses a `textarea` HTML element.

### `wide`

- Type: `Boolean`
- Default: `false`

Set to true to obtain an input that expands horizontally.
