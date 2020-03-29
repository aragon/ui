# Timer

Displays a countdown or stopwatch.

## Usage

```jsx
import { Timer } from '@aragon/ui'

const NOW = Date.now()
const DAY = 1000 * 60 * 60 * 24

const endDate = new Date(NOW + 5 * DAY)
const startDate = new Date(NOW - 5 * DAY)

const App = () => (
  <div>
    <Timer end={endDate} />
    <Timer start={startDate} />
  </div>
)
```


## Props

### `end`

| Type      | Default value |
| --------- | ------------- |
| `Date`    | None          |

The end of the countdown, as a `Date` instance.

### `start`

| Type      | Default value |
| --------- | ------------- |
| `Date`    | None          |

The start of a timer, as a `Date` instance.

### `format`

| Type      | Default value |
| --------- | ------------- |
| `Enum`    | `'dhms'`      |

- Options: `[ 'yMdhms', 'yMdhm', 'yMdh','yMd', 'yM', 'Mdhms', 'Mdhm', 'Mdh', 'Md', 'dhms', 'dhm', 'hms', 'hm', 'ms', 'm', 's' ]`

Format output in years 'y', months 'M', days 'd', hours 'h', minutes 'm', seconds 's'

### `showEmpty`

| Type         | Default value |
| ------------ | ------------- |
| `Boolean`    | `False`       |

Display the units on the left side of the timer when they are equal to zero.

### `showIcon`

| Type         | Default value |
| ------------ | ------------- |
| `Boolean`    | `True`        |

Display the clock icon on the left side of the timer.
