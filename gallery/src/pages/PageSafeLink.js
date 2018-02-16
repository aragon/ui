import React from 'react'
import { SafeLink } from '@aragon/ui'

import Page from 'comps/Page/Page'
import DemoContainer from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/Link/SafeLink.md'

const PageSafeLink = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo opaque>
      <DemoContainer>
        <SafeLink
          href="https://mathiasbynens.github.io/rel-noopener/malicious.html"
          target="_blank"
        >
          Malicious page
        </SafeLink>
      </DemoContainer>
    </Page.Demo>
  </Page>
)

export default PageSafeLink
