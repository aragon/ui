import React from 'react'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/ProgressBar/README.md'

import { ProgressBar } from '@tecommons/ui'

const PageProgressBar = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <ProgressBar value={0.3} />
      </Container>
    </Page.Demo>
  </Page>
)

export default PageProgressBar
