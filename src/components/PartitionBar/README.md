# PartitionBar

A component to draw partition bars with labels.

## Usage

```jsx
import { PartitionBar } from '@aragon/ui'

const data = [
  {
    name: 'Name AAA',
    percentage: 30,
  },
  {
    name: 'Name DDD',
    percentage: 60,
  },
  {
    name: 'Name OOO',
    percentage: 10,
  },
]

const App = () => <PartitionBar data={data} />
```

## Properties

### `data`

- Type: `Array of Objects`
- Subtypes:
  - `name` / Type: `String` (Required)
  - `percentage` / Type: `Number` (Required)

The `data` attribute is an Array with two subtypes: `name` and `percentage`.

### `colors`

- Type: `Array of Strings`
- Default: `[ '#000000', '#57666F', '#028CD1', '#21AAE7', '#39CAD0', '#ADE9EC', '#80AEDC' ]`

Defines the colors to be used by each item in data's Array.

### `caption`

- Type: `Function`
- Default:

```jsx
function({ name, bullet, percentage }) {
  return (
    <React.Fragment>
      <DefaultItem>
        {bullet}
        <Text title={name} color={theme.textSecondary}>
          {name}
        </Text>
      </DefaultItem>
      <Percentage>{percentage}%</Percentage>
    </React.Fragment>
  )
}
```
