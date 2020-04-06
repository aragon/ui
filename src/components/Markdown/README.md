# Markdown

Render markdown content.

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

Use this function to extend the [markdow-to-jsx](https://github.com/probablyup/markdown-to-jsx) options. It takes the base options as a parameter, and expects a new options object to be returned.

### `unstyled`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `false`       |

Set to `true` to disable the default styling. See also NormalizedHtml.
