import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/EthIdenticon/README.md'
import { EthIdenticon } from '@aragon/ui'
import Container from '../components/Page/DemoContainer'

const PageBadgeNumber = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <EthIdenticonRow>
          <div>
            <EthIdenticon address="0xcafE1A77e84698c83CA8931F54A755176eF75f2C" />
          </div>
          <div>
            <EthIdenticon
              address="0xcafE1A77e84698c83CA8931F54A755176eF75f2C"
              scale={2}
              radius={25}
            />
          </div>
          <div>
            <EthIdenticon
              address="0xcafE1A77e84698c83CA8931F54A755176eF75f2C"
              scale={3}
              soften={0.7}
            />
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
