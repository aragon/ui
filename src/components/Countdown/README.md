# Countdown (Timer alias)

Displays a countdown.

## Usage

```jsx
import { Countdown } from '@tecommons/ui'

const DAY_IN_MS = 1000 * 60 * 60 * 24
const endDate = new Date(Date.now() + 5 * DAY_IN_MS)

const App = () => (
  <Countdown end={endDate} />
)
```

## Props

### `end`

- Type: `Date` (required)

The end of the countdown, as a `Date` instance.
