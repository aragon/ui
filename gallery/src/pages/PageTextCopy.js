import React from 'react'
import { TextCopy, Tag } from '@aragon/ui'

import Page from 'comps/Page/Page'
import Container from '../components/Page/DemoContainer'
import readme from 'ui-src/components/TextCopy/README.md'

const PageTextCopy = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo opaque>
      <Container>
        <TextCopy value="Copy me!" />
      </Container>
      <Container>
        <TextCopy
          value="0xcafE1A77e84698c83CA8931F54A755176eF75f2C"
          icon={
            <Tag mode="identity"
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

export default PageTextCopy
