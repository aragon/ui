import React from 'react'
import Page from 'comps/Page/Page'
import readme from 'ui-src/components/Timer/README.md'
import { Timer } from '@tecommons/ui'

const DAY_IN_MS = 1000 * 60 * 60 * 24
const endDate = new Date(Date.now() + 5 * DAY_IN_MS)
const startDate = new Date(Date.now() - 5 * DAY_IN_MS)

const PagePartitionBar = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <div style={{ padding: '30px' }}>
        <Timer end={endDate} />
      </div>
      <div style={{ padding: '30px' }}>
        <Timer start={startDate} />
      </div>
    </Page.Demo>
  </Page>
)

export default PagePartitionBar
