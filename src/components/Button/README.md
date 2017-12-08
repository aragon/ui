# Button

A simple Button component.

## Usage

```jsx
import { Button } from '@aragon/ui'

const App = () => (
  <Button>Hello World</Button>
)
```

## Properties

### `mode`

- Type: `String`
- Values: `normal` (default), `outline`, `strong` or `text`.

Set this property to the desired visual variant.

#### Example:

```jsx
const App = () => (
  <div>
    <Button mode="outline">Cancel</Button>
    <Button mode="strong">Accept</Button>
  </div>
)
```

### `wide`

- Type: `Boolean`
- Default: `false`

Set to true to obtain a button that expands horizontally.

#### Example:

```jsx
const MyButton = () => (
  <Button wide>Accept</Button>
)
```

## Attached Components

### `Anchor`

An `<a>` styled to be visually similar to Buttons, supporting the same properties.

#### Example:

```jsx
const LinkButton = () => (
  <Button.Anchor mode="strong" href="https://aragon.one/" target="_blank">
    Aragon
  </Button.Anchor>
)
```
