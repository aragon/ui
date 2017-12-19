# CircleGraph

A circular graph component.

## Usage

```jsx
import { CircleGraph } from '@aragon/ui'

const App = () => <CircleGraph value={1/3} />
```

## Properties

### `size`

* Type: `Number`
* Default: `80`

The size (width and height) of the graph.

#### Example:

```jsx
<CircleGraph size={40} />
```

### `value`

* Type: `Number`
* Default: `1`

The value represented by the graph, between 0 and 1.

#### Example:

```jsx
<CircleGraph value={0.5} />
```

### `label`

* Type: `Function`
* Default: `value => Math.round(value * 100) + '%'`

A function to generate the label displayed on the graph.

#### Example:

```jsx
<CircleGraph label={value => Math.round(value)} />
```
