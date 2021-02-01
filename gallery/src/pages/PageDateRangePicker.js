import React, { useState } from 'react'
import { DateRangePicker } from '@tecommons/ui'

import Page from 'comps/Page/Page'
import Container from '../components/Page/DemoContainer'
import readme from 'ui-src/components/DateRangePicker/README.md'

// eslint-disable-next-line react/prop-types
const PageDateRangePicker = ({ title }) => {
  const [range, setRange] = useState({
    start: null,
    end: null,
  })
  return (
    <Page title={title} readme={readme}>
      <Page.Demo opaque container={false}>
        <DateRangePicker
          startDate={range.start}
          endDate={range.end}
          onChange={setRange}
        />
      </Page.Demo>
    </Page>
  )
}

export default PageDateRangePicker
