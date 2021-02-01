# CircleGraph

A circular graph component.

## Usage

```jsx
import { CircleGraph } from '@tecommons/ui'

const App = () => <CircleGraph value={1 / 3} />
```

## Props

### `color`

| Type                   | Default value |
| ---------------------- | ------------- |
| `Function` or `String` | None          |

The color representing the active part in the circle. When a function is passed, it takes the interpolated `value` as a unique parameter, and is expected to return a color. Avoid doing anything slow in this function as it gets called 60 times per second.

### `label`

| Type                 | Default value |
| -------------------- | ------------- |
| `Function` or `Node` | None          |

If a React node is passed, it gets rendered directly.

If a function is passed, it gets called to generate the label displayed on the graph. It takes two parameters: the animated value and the static value. The animated value should be enough in most cases, but the second parameter can be helpful in certain cases. This function should return an object containing the following nodes:

- `value`: the main number (defaults to `Math.round(value * 100)`).
- `suffix`: the suffix to display (defaults to `%`).
- `prefix`: the optional prefix to display (defaults to `<` when `value` is below 1).
- `secondary`: a secondary label to display below the main one.

Avoid doing anything slow in this function as it gets called 60 times per second.

#### Example:

```jsx
<CircleGraph label={value => Math.round(value)} />
```

### `size`

| Type     | Default value |
| -------- | ------------- |
| `Number` | `80`          |

The size (width and height) of the graph.

### `strokeWidth`

| Type     | Default value |
| -------- | ------------- |
| `Number` | `4`           |

Width of the circle stroke, in `px`.

### `value`

| Type     | Default value   |
| -------- | --------------- |
| `Number` | None (required) |

The value represented by the graph, between 0 and 1.
