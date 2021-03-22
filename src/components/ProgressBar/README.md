# ProgressBar

## Usage

```jsx
import { ProgressBar } from '@tecommons/ui'

const App = () => (
  <ProgressBar value={0.3} />
)
```

## Props

### `color`

- Type: `String`
- Default: `accent` color from `theme`

To change the color of the active bar.

### `value`

- Type: `Number`
- Values: from `0` to `1`, or `-1`.
- Default: `-1`

The value, between `0` and `1`. Set to `-1` for the indeterminate state.

### `animate`

- Type: `Boolean`
- Default: `true`

Set this to `false` to disable the animations. Useful to improve the
performances if the progress bar is not visible but rendered.
