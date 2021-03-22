# Accordion

A simple accordion component.

## Usage

```jsx
import { Main, Accordion } from '@tecommons/ui'

function App() {
  return (
    <Main>
      <Accordion
        items={[
          ['Row content', 'Expandable content'],
          [<div>Row content</div>, <div>Expandable content</div>],
        ]}
      />
    </Main>
  )
}
```

## Props

### `items`

| Type               | Default value   |
| ------------------ | --------------- |
| `Array` of `Array` | None (required) |

The items composing the accordion list. The first entry of each nested array is the content of the row, while the second entry is the content of the expandable part.
