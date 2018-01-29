import React from 'react'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/SidePanel/README.md'
import { SidePanel } from '@aragon/ui'
import Container from '../components/Page/DemoContainer'

const PageSidePanel = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <SidePanel />
      </Container>
    </Page.Demo>
  </Page>
)

export default PageSidePanel
