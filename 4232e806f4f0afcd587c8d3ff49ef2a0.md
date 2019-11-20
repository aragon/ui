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
- Default: `{ mass: 1, tension: 120, friction: 20 }`

`spring Presets`
There are presets to use for springConfig with different combinations of mass, tension and friction. More information can be found [here](https://www.react-spring.io/docs/hooks/api). See the following example to see how to use them.

- Presets: `default`, `gentle`, `wobbly`, `stiff`, `slow`, `molasses`

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

### `width`

- Type: `Number`
- Default: `300`

### `height`

- Type: `Number`
- Default: `200`

### `dotRadius`

- Type: `Number`
- Default: `7 / 2`

### `animDelay`

- Type: `Number`
- Default: `500`

### `borderColor`

- Type: `String`
- Default: `rgba(209, 209, 209, 0.5)`

### `labelColor`

- Type: `String`
- Default: `#6d777b`

### `reset`

- Type: `Boolean`
- Default: `false`

### `lines`

Pass the values that will be used to draw the lines. The color atribute in Subtypes overrides the `color` prop.

- Type: `Array of Subtypes`
- Subtypes: `id(Number), values(Array of Numbers from 0 to 1 - Required), color(String)` or `values(Array of Numbers from 0 to 1 - Required)`
- Default: `[]`

### `label`

- Type: `Function` or `Null`
- Default: `idex => index + 1`

### `color`

- Type: `Function`
- Default: `hsl(${(index * (360 / lines.length) + 40) % 360}, 60%, 70%)`
