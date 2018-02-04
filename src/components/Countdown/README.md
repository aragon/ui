# Countdown

Displays a countdown.

## Usage

```jsx
import { Countdown } from '@aragon/ui'

const DAY_IN_MS = 1000 * 60 * 60 * 24
const endDate = new Date(Date.now() + 5 * DAY_IN_MS)

const App = () => (
  <Countdown end={endDate} />
)
```

## Properties

### `end`

- Type: `Date` (required)

The end of the countdown, as a `Date` instance.
