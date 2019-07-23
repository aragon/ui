import React from 'react'
import Page from 'comps/Page/Page'
import readme from 'ui-src/components/PartitionBar/README.md'
import { PartitionBar } from '@aragon/ui'

const data = [
  {
    name: 'Name AAA',
    percentage: 30,
  },
  {
    name: 'Name DDD',
    percentage: 60,
  },
  {
    name: 'Name OOO',
    percentage: 10,
  },
]

const PagePartitionBar = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <div style={{ height: '200px', padding: '30px' }}>
        <PartitionBar data={data} />
      </div>
    </Page.Demo>
  </Page>
)

export default PagePartitionBar
