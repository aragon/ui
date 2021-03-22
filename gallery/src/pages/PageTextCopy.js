import React from 'react'
import { TextCopy, Tag, GU } from '@tecommons/ui'

import Page from 'comps/Page/Page'
import Container from '../components/Page/DemoContainer'
import readme from 'ui-src/components/TextCopy/README.md'

function PageTextCopy({ title }) {
  return (
    <Page title={title} readme={readme}>
      <Page.Demo opaque>
        <Container>
          <div>
            <div
              css={`
                margin-bottom: ${2 * GU}px;
              `}
            >
              <TextCopy value="Something to copy" />
            </div>
            <div>
              <TextCopy
                value="0xcafE1A77e84698c83CA8931F54A755176eF75f2C"
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
            </div>
          </div>
        </Container>
      </Page.Demo>
    </Page>
  )
}

export default PageTextCopy
