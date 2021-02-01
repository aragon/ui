import React from 'react'
import styled from 'styled-components'
import { IdentityBadge, GU } from '@tecommons/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/IdentityBadge/README.md'

function PageIdentityBadge({ title }) {
  return (
    <Page title={title} readme={readme}>
      <Page.Demo container={false}>
        <div
          css={`
            display: flex;
            align-items: center;
            & > div {
              display: flex;
              align-items: center;
              margin-right: ${3 * GU}px;
            }
          `}
        >
          <div>
            <IdentityBadge
              customLabel="Olive Oyl"
              entity="0xc41e4c10b37d3397a99d4a90e7d85508a69a5c4c"
              connectedAccount
            />
          </div>
          <div>
            <IdentityBadge
              entity="0x2c9341a52cfa3f2c2554ca1803134137b9366b3c"
              connectedAccount
            />
          </div>
          <div>
            <IdentityBadge
              entity="0x7c708ac7db979fa06705f8880f29f82cfc406993"
              compact={true}
              connectedAccount
            />
          </div>
        </div>
      </Page.Demo>
    </Page>
  )
}

export default PageIdentityBadge
