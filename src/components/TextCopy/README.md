# TextCopy

A read-only text input component that allows the user to copy the value to the clipboard.

Extra props will be passed to the `TextInput` component which is used internally.

## Usage

```jsx
<TextCopy value="Something to copy" />
```

## Props

### `adornment`

| Type         | Default value |
| ------------ | ------------- |
| `React node` | None          |

Allows to set an adornment that will get used on the left side of the text field (in left to right languages). The copy button is always displayed on the other side.

### `message`

| Type     | Default value |
| -------- | ------------- |
| `String` | `"Copied"`    |

The message that gets displayed when the copy is successful.

### `monospace`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `true`        |

Set this to false to disable the use of the monospace font.

### `onCopy`

| Type                 | Default value |
| -------------------- | ------------- |
| `Function` or `null` | None          |

When not set, a toast will get displayed on copy, with the `message` provided.

When set to `null`, disables the message entirely.

When set to a function, calls this function when the copy is successful, with the `message` as a parameter.

### `value`

| Type     | Default value |
| -------- | ------------- |
| `String` | None          |

The field content (single line).
