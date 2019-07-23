import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/IdentityBadge/README.md'
import { IdentityBadge, Text } from '@aragon/ui'
import Container from '../components/Page/DemoContainer'

const PageIdentityBadge = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo opaque height={150}>
      <Container centered>
        <BadgesRow>
          <div>
            <IdentityBadge
              customLabel="Custom Label User"
              entity="0xc41e4c10b37d3397a99d4a90e7d85508a69a5c4c"
              connectedAccount
            />
          </div>
          <div>
            <IdentityBadge
              customLabel="Not current user"
              entity="0xc41e4c10b37d3397a99d4a90e7d85508a69a5c4c"
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
          <div>
            <IdentityBadge
              customLabel="Badge Only"
              entity="0x7c708ac7db979fa06705f8880f29f82cfc406993"
              badgeOnly={true}
              connectedAccount
            />
          </div>
        </BadgesRow>
      </Container>
    </Page.Demo>
  </Page>
)

const BadgesRow = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 40px);
  & > div {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
`

const TextContainer = styled.div`
  width: 100%;
  padding: 30px 0;
  justify-content: space-around;
  white-space: nowrap;
`

export default PageIdentityBadge
