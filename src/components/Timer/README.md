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

- Type `Enum: [ 'yMdms', 'yMdm', 'yMd', 'yM', 'Mdhms', 'Mdhm', 'Mdh', 'Md', 'dhms', 'dhm', 'hms', 'hm', 'ms', 'm', 's' ]`
- Default: `'dhms'`

Format output in years 'y', months 'M', days 'd', hours 'h', minutes 'm', seconds 's'

### `showEmpty`

- Type `Boolean`
- Default: `false`

Display the units on the left side of the timer when they are equal to zero.
