# Timer

Displays a countdown or stopwatch

## Usage

```jsx
import { Timer } from '@aragon/ui'

const DAY_IN_MS = 1000 * 60 * 60 * 24
const endDate = new Date(Date.now() + 5 * DAY_IN_MS)

const App = () => (
  <Timer end={endDate} />
)
```

or

```jsx
import { Timer } from '@aragon/ui'

const DAY_IN_MS = 1000 * 60 * 60 * 24
const startDate = new Date(Date.now() - 5 * DAY_IN_MS)

const App = () => (
  <Timer start={startDate} />
)
```


## Properties

### `end`

- Type: `Date`

The end of the countdown, as a `Date` instance.

### `start`

- Type: `Date`

The start of a timer, as a `Date` instance.

### `format`

- Type `Enum: [ 'dhms', 'dhm', 'hms', 'hm', 'ms' ]`

Format output in days 'd', hours 'h', minutes 'm', seconds 's'
