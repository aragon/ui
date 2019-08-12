# CircleGraph

A circular graph component.

## Usage

```jsx
import { CircleGraph } from '@aragon/ui'

const App = () => <CircleGraph value={1/3} />
```

## Props

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

### `color`

* Type: `String`
* Default: `#21c1e7`

The border color of the circle.

#### Example:

```jsx
<CircleGraph color="#FF6969" />
```

### `width`

* Type: `Number`
* Default: `4`

Width of the circle.

#### Example:

```jsx
<CircleGraph width={8} />
```
