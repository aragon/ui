import React from 'react'
import { DateRangePicker } from '@aragon/ui'

import Page from 'comps/Page/Page'
import Container from '../components/Page/DemoContainer'
import readme from 'ui-src/components/DateRangePicker/README.md'

// eslint-disable-next-line react/prop-types
const PageDateRangePicker = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo opaque>
      <Container>
        <DateRangePicker />
      </Container>
    </Page.Demo>
  </Page>
)

export default PageDateRangePicker
