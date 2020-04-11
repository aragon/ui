# Markdown

Render markdown content. Use the `normalized` prop to enable the default styling of the HTML elements. You can also extend the styles by setting the `className` and the `style` props.

## Usage

```jsx
function App() {
  return <Markdown content="# Some markdown content" />
}
```

## Props

### `allowHtml`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `false`       |

Allow HTML content in the markdown to be rendered.

### `content`

| Type     | Default value   |
| -------- | --------------- |
| `String` | None (required) |

The markdown content to render.

### `markdownToJsxOptions`

| Type       | Default value |
| ---------- | ------------- |
| `Function` | None          |

Use this function to extend the [markdown-to-jsx](https://github.com/probablyup/markdown-to-jsx) options. It takes the base options as a parameter, and expects a new options object to be returned.

### `normalized`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `false`       |

Set to `true` to enable the default styling of the HTML elements.
