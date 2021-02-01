import React from 'react'
import { AddressField, Tag } from '@tecommons/ui'

import Page from 'comps/Page/Page'
import Container from '../components/Page/DemoContainer'
import readme from 'ui-src/components/AddressField/README.md'

function PageAddressField({ title }) {
  return (
    <Page title={title} readme={readme}>
      <Page.Demo opaque>
        <Container>
          <AddressField address="0xcafE1A77e84698c83CA8931F54A755176eF75f2C" />
        </Container>
        <Container>
          <AddressField
            address="0xcafE1A77e84698c83CA8931F54A755176eF75f2C"
            icon={
              <Tag
                mode="identity"
                css={`
                  width: 39px;
                  height: 38px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                `}
              >
                Icon
              </Tag>
            }
          />
        </Container>
      </Page.Demo>
    </Page>
  )
}

export default PageAddressField
