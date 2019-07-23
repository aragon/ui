import React from 'react'
import { ExternalLink } from '@aragon/ui'

import Page from 'comps/Page/Page'
import DemoContainer from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/Link/ExternalLink.md'

const PageExternalLink = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo opaque>
      <DemoContainer>
        <ExternalLink
          href="https://mathiasbynens.github.io/rel-noopener/malicious.html"
        >
          External Link
        </ExternalLink>
      </DemoContainer>
    </Page.Demo>
  </Page>
)

export default PageExternalLink
