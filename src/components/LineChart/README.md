# LineChart

A component to draw line charts.

## Usage

```jsx
import { LineChart } from '@aragon/ui'

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

- Type: `Spring`
- Default: `springs.lazy`

`spring Presets`

There are presets to use for springConfig with different combinations of mass, tension and friction. More information can be found [here](https://www.react-spring.io/docs/hooks/api). See the following example to see how to use them.

- Presets: `springs.lazy`, `springs.smooth`, `springs.swift`, `springs.instant`

Example:

```jsx
import { LineChart, springs } from '@aragon/ui'

function App() {
  return <LineChart values={[0.2, 0.3, 0.2]} springConfig={spring.slow} />
}
```

### `total`

- Type: `Number`
- Default: `-1`

The expected total (x axis of the chart). When not provided, the length of `values` is used instead.

### `width`

- Type: `Number`
- Default: `300`

The width at which the chart renders, before expanding to fit its parent.

### `height`

- Type: `Number`
- Default: `200`

The height at which the chart renders, before expanding to fit its parent.

### `dotRadius`

- Type: `Number`
- Default: `7 / 2`

The radius of every dot in the chart.

### `animDelay`

- Type: `Number`
- Default: `500`

The delay before displaying the chart the first time it gets rendered.

### `borderColor`

- Type: `String`
- Default: `rgba(209, 209, 209, 0.5)`

The border color.

### `labelColor`

- Type: `String`
- Default: `#6d777b`

The label color.

### `reset`

- Type: `Boolean`
- Default: `false`

Can be used to restart the transition. Set to `true`, then to `false` again.

### `lines`

Pass the values that will be used to draw the lines. The color atribute in Subtypes overrides the `color` prop.

- Type: `Array of Subtypes`
- Subtypes: `id(Number), values(Array of Numbers from 0 to 1 - Required), color(String)` or `values(Array of Numbers from 0 to 1 - Required)`
- Default: `[]`

### `label`

- Type: `Function` or `null`

Example:

```jsx
<LineChart label={index => ((index % 26) + 10).toString(36)} />
```

This function gets called to render a label on the x axis.

### `color`

- Type: `Function`

Example:

```jsx
<LineChart
  color={(index, { lines }) => {
    return `hsl(${(index * (360 / lines.length) + 40) % 360}, 60%, 70%)`
  }}
/>
```

This function gets called to render the color of a line.
