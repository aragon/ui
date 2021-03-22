# Card

A Card component.

## Usage

```jsx
import { Main, Card } from '@tecommons/ui'

function App() {
  return (
    <Main>
      <Card>Card content</Card>
    </Main>
  )
}
```

## Props

### `width`

- Type: `String`
- Default: `282px`

Set the width of your card in pixels.

#### Example:

```jsx
const MyCard = () => (
  <Card width="500px">{/* Your card's content goes here */}</Card>
)
```

### `height`

- Type: `String`
- Default: `322px`

Set the height of your card in pixels.

#### Example:

```jsx
const MyCard = () => (
  <Card height="800px">{/* Your card's content goes here */}</Card>
)
```
