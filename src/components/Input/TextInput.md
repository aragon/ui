# TextInput

A basic text input component that can be used in single or multi-line modes.

## Usage

```jsx
function App() {
  const [value, setValue] = useState('')
  return (
    <TextInput
      value={value}
      onChange={event => {
        setValue(event.target.value)
      }}
    />
  )
}
```

## Props

### `adornment`

| Type         | Default value |
| ------------ | ------------- |
| `React node` | `null`        |

Allows to add an icon or any other component inside of a `TextInput`.

### `adornmentPosition`

| Type                 | Default value |
| -------------------- | ------------- |
| `"start"` or `"end"` | `"start"`     |

Set this to change the position of the adornment. `'start'` is displayed on the left, and `'end'` on the right. Note: in the future, the position will be reversed in right-to-left languages.

### `adornmentSettings.width`

| Type     | Default value |
| -------- | ------------- |
| `Number` | `34`          |

The total width of the adornment.

### `adornmentSettings.padding`

| Type     | Default value |
| -------- | ------------- |
| `Number` | `4`           |

The horizontal padding of the adornment.

### `onChange`

| Type       | Default value |
| ---------- | ------------- |
| `Function` | None          |

The native `change` event. Gets passed to either the `input` element, or `textarea` element if `multiline` is true.

### `type`

| Type     | Default value |
| -------- | ------------- |
| `String` | `"text"`      |

Any valid `<input>` type. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_<input>_types).

This prop is ignored if `multiline` is `true`.

### `multiline`

- Type: `Boolean`
- Default: `false`

Set to true to use multiple lines. Internally uses a `textarea` HTML element.

### `wide`

- Type: `Boolean`
- Default: `false`

Set to true to obtain an input that expands horizontally.
