import React from 'react'
import { AddressField, Badge } from '@aragon/ui'

import Page from 'comps/Page/Page'
import Container from '../components/Page/DemoContainer'
import readme from 'ui-src/components/AddressField/README.md'

const PageAddressField = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo opaque>
      <Container>
        <AddressField address="0xcafE1A77e84698c83CA8931F54A755176eF75f2C" />
      </Container>
      <Container>
        <AddressField
          address="0xcafE1A77e84698c83CA8931F54A755176eF75f2C"
          icon={
            <Badge.Identity
              css={`
                width: 39px;
                height: 38px;
                display: flex;
                align-items: center;
                justify-content: center;
              `}
            >
              Icon
            </Badge.Identity>
          }
        />
      </Container>
    </Page.Demo>
  </Page>
)

export default PageAddressField
