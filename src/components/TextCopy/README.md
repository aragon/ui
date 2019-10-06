# TextCopy

A field component to allow the user to copy its content to clipboard

## Usage

```jsx
import { TextCopy } from '@aragon-ui

function App() {
	return <TextCopy
		value="0xcafE1A77e84698c83CA8931F54A755176eF75f2C"
		icon={
			<Tag mode="identity"
				css={`
					width: 39px;
					height: 38px;
					display: flex;
					align-items: center;
					justify-content: center;
				`}
			>
				Icon
			</Tag>
		}
	/>
}
```

## Props

### `value`

| Type     | Default value   |
| -------- | --------------- |
| `String` | None (Required) |

Value of the field

### Example

```jsx
<TextCopy value="Copy me!" />
```

### `icon`

| Type   | Default value   |
| ------ | --------------- |
| `Node` | None            |

Icon to display in the field. Can pass anything that can be rendered, such as
num, string, DOM elements, an array of them, or fragments that contain them.

```jsx
<TextCopy
  value="0xcafE1A77e84698c83CA8931F54A755176eF75f2C"
  icon={
    <img />
  }
/>
```

### `onCopy`

| Type       | Default value   |
| ---------- | --------------- |
| `function` | None            |

Callback that will be triggered in place of the toast. You can pass `null` to disable showing the toast.

#### Example:

```jsx
<TextCopy
  value="0xcafE1A77e84698c83CA8931F54A755176eF75f2C"
	onCopy={text => {
		console.log('Text copied!')
	}}
/>
```
