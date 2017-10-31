import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from '@aragon/ui/components/PreFooter/README.md'
import { PreFooter } from '@aragon/ui'

const PagePreFooter = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <PreFooter />
    </Page.Demo>
  </Page>
)

export default PagePreFooter
