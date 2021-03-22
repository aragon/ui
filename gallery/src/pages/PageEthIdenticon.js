import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/EthIdenticon/README.md'
import { EthIdenticon } from '@tecommons/ui'
import Container from '../components/Page/DemoContainer'

const ADDRESS = '0xcafE1A77e83698c83CA8931F54A755176eF75f2d'

const PageBadgeNumber = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo opaque height={200}>
      <Container centered css="height: 100vh">
        <EthIdenticonRow>
          <div>
            <EthIdenticon address={ADDRESS} />
          </div>
          <div>
            <EthIdenticon address={ADDRESS} scale={2} radius={25} />
          </div>
          <div>
            <EthIdenticon address={ADDRESS} radius={8} scale={3} soften={0.7} />
          </div>
        </EthIdenticonRow>
      </Container>
    </Page.Demo>
  </Page>
)

const EthIdenticonRow = styled.div`
  display: flex;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
`

export default PageBadgeNumber
