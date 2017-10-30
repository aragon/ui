# Text

The Text component is used to display text with some additional features.

It is generally not necessary to use `<Text>` with the default properties:
`<BaseStyles>` sets this style to the HTML elements by default.

## Usage

```jsx
<Text>Some Text</Text>
```

## Properties

### `block`

- Type: `Boolean`
- Default value: `false`

Set this property to a `true` to render the text as a `<div>`. Useful to group
more than a single paragraph. Takes priority over `inline`.

```jsx
<Text size='large' block>
  <p>Some text</p>
  <ul>
    <li>Item</li>
    <li>Item</li>
  </ul>
  <p>Some text</p>
</Text>
```

### `color`

- Type: `String`
- Default value: `undefined`

Set this property to a color value to change the text color.

```jsx
<Text color='tomato'>Text Example</Text>
```

### `heading`

- Type: `Number` or `String`
- Default value: `undefined`

Set this property to a number between `1` and `6` to render the text as a
heading. It will be rendered as `<h1>` to `<h6>` HTML elements.

```jsx
<Text heading='1'>Example</Text>
```

### `inline`

- Type: `Boolean`
- Default value: `false`

Set this property to a `true` to render the text as a `<span>`. Useful to use
`<Text>` inside a parent that only allows [Phrasing Content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content).

```jsx
<h1>
  <span>Hello </span>
  <Text size='xsmall'>World</Text>
</h1>
```

### `smallcaps`

- Type: `Boolean`
- Default value: `false`

Set this property to a `true` to render the text as small capitals.

```jsx
<Text smallcaps>Title Example</Text>
```
