# SearchInput

A text input component with a set adornment that changes into a button when text is introduced in the input and when clicked on clears the input.

## Usage

```jsx
function App() {
  const [value, setValue] = useState('')
  return <SearchInput value={value} onChange={setValue} />
}
```

## Props

<div class="info">

Additional props will get passed to the internal `TextInput` component.

</div>

### `onChange`

| Type       | Default value |
| ---------- | ------------- |
| `Function` | None          |

The input box value and the two native `change` or `click` events.
