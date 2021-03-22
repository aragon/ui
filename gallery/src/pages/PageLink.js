import React from 'react'
import { Link } from '@tecommons/ui'

import Page from 'comps/Page/Page'
import DemoContainer from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/Link/README.md'

const PageLink = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo opaque>
      <DemoContainer>
        <div>
          <Link>Default link</Link>
        </div>
        <div>
          <Link
            href="https://mathiasbynens.github.io/rel-noopener/malicious.html"
            external
          >
            Link to a malicious page
          </Link>
        </div>
      </DemoContainer>
    </Page.Demo>
  </Page>
)

export default PageLink
