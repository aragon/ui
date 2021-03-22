# LineChart

A component to draw line charts.

## Usage

```jsx
import { LineChart } from '@tecommons/ui'

function App() {
  return (
    <LineChart
      lines={[values]}
      springConfig={{ mass: 1, tension: 120, friction: 80 }}
      label={index => labels[index]}
      height={90}
      color={() => `#21aae7`}
    />
  )
}
```

## Props

### `springConfig`

This prop will define the motion of the chart.

| Type     | Default value  |
| -------- | -------------- |
| `Spring` | `springs.lazy` |

`spring Presets`

There are presets to use for springConfig with different combinations of mass, tension and friction. More information can be found [here](https://www.react-spring.io/docs/hooks/api). See the following example to see how to use them.

- Presets: `springs.lazy`, `springs.smooth`, `springs.swift`, `springs.instant`

Example:

```jsx
import { LineChart, springs } from '@tecommons/ui'

function App() {
  return <LineChart values={[0.2, 0.3, 0.2]} springConfig={spring.slow} />
}
```

### `total`

| Type     | Default value |
| -------- | ------------- |
| `Number` | `-1`          |

The expected total (x axis of the chart). When not provided, the length of `values` is used instead.

### `width`

| Type     | Default value |
| -------- | ------------- |
| `Number` | None          |

The width of the chart. When not set, the SVG takes the width of its parent.

### `height`

| Type     | Default value |
| -------- | ------------- |
| `Number` | 200           |

- Type: `Number`
- Default: `200`

The height of the chart.

### `dotRadius`

| Type     | Default value |
| -------- | ------------- |
| `Number` | `7 / 2`       |

The radius of every dot in the chart.

### `animDelay`

| Type     | Default value |
| -------- | ------------- |
| `Number` | `500`         |

The delay before displaying the chart the first time it gets rendered.

### `borderColor`

| Type     | Default value              |
| -------- | -------------------------- |
| `String` | `rgba(209, 209, 209, 0.5)` |

The border color.

### `labelColor`

| Type     | Default value |
| -------- | ------------- |
| `String` | `#6d777b`     |

The label color.

### `reset`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `false`       |

Can be used to restart the transition. Set to `true`, then to `false` again.

### `lines`

Pass the values that will be used to draw the lines. The color atribute in Subtypes overrides the `color` prop.

| Type                | Subtypes                                                                                                                                       | Default value |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `Array of Subtypes` | `id(Number)`,<br>`values(Array of Numbers from 0 to 1 - Required)`,<br>`color(String)` or<br>`values(Array of Numbers from 0 to 1 - Required)` | `[]`          |

### `label`

| Type                 |
| -------------------- |
| `Function` or `null` |

Example:

```jsx
<LineChart label={index => ((index % 26) + 10).toString(36)} />
```

This function gets called to render a label on the x axis.

### `color`

| Type       |
| ---------- |
| `Function` |

Example:

```jsx
<LineChart
  color={(index, { lines }) => {
    return `hsl(${(index * (360 / lines.length) + 40) % 360}, 60%, 70%)`
  }}
/>
```

This function gets called to render the color of a line.
