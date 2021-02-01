# DateRangePicker

A component for selecting a date range.

## Usage

```jsx
import React, { useState } from 'react'
import { DateRangePicker } from '@tecommons/ui'

const DateRange = () => {
  const [range, setRange] = useState({
    start: null,
    end: null,
  })
  return (
    <DateRangePicker
      startDate={range.start}
      endDate={range.end}
      onChange={setRange}
    />
  )
}
```

## Props

### `format`

- Type: `String`
- Default: `'MM/DD/YYYY'`

Format for the displayed dates.

### `onChange`

- Type: `Function`: `({start, end}: {start: Date, end: Date}) -> *`
- Default: `() => {}`

This callback is called whenever the user selects clicks "Apply" after selecting a date.

### `startDate`

- Type: `Date`
- Default: none

Selected start date.

### `endDate`

- Type: `Date`
- Default: none

Selected end date.
