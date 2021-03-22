import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/PreFooter/README.md'
import { PreFooter } from '@tecommons/ui'

const PagePreFooter = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <PreFooter />
    </Page.Demo>
  </Page>
)

export default PagePreFooter
