# Section

## Usage

By default, `Section` centers horizontally its content, using 10 columns from the grid.

```jsx
import { Section } from '@aragon/ui'

const App = () => (
  <Section>
    <h1>Hello World</h1>
  </Section>
)
```

## Properties

### `large`

- Type: `Boolean`
- Default value: `false`

Set to true to make the component wider (12 columns).

```jsx
<Section large>
  <h1>Hello World</h1>
</Section>
```

### `visual`

- Type: `Boolean`
- Default value: `false`

Set the `visual` property to `true` to render the HTML element as a `div` instead of `section`.

```jsx
<main>
  <h1>Hello World</h1>
  <Section visual>
    <h2>Hello World</h2>
  </Section>
</main>
```
