# Text

The Text component is used to display inline text with some additional features.

It is generally not necessary to use `<Text>` with the default properties:
`<BaseStyles>` sets this style to the HTML elements by default.

## Usage

```jsx
import { Text } from '@aragon/ui'

const App = () => (
  <Text>Some Text</Text>
)
```

## Properties

### `color`

- Type: `String`
- Default value: `undefined`

Set this property to a color value to change the text color.

```jsx
<Text color='tomato'>Text Example</Text>
```

### `size`

- Type: one of `'xsmall'`, `'small'`, `'normal'`, `'large'`, `'xlarge'`,` 'xxlarge'`
- Default value: `normal`

Set this property to change the size of the text.

### `smallcaps`

- Type: `Boolean`
- Default value: `false`

Set this property to a `true` to render the text as small capitals.

```jsx
<Text smallcaps>Title Example</Text>
```

### `weight`

- Type: one of `'normal'`, `'bold'`, `'bolder'`
- Default value: `normal`

Set this property to change the weight of the text.

## Attached Components

### `Block`

A block of text, supporting the same [properties](#properties).

### `Paragraph`

A paragraph of text, supporting the same [properties](#properties).
