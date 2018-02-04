import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/Badge/README.md'
import { Badge } from '@aragon/ui'
import Container from '../components/Page/DemoContainer'

const PageTable = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <BadgesRow>
          <div>
            <Badge shape="round">Default Badge</Badge>
          </div>
          <div>
            <Badge.Info>?</Badge.Info>
          </div>
          <div>
            <Badge.Notification count={1000} />
          </div>
          <div>
            <Badge.App>Finance</Badge.App>
          </div>
          <div>
            <Badge.Identity>Sam</Badge.Identity>
          </div>
          <div>
            <Badge.Notification count={3} small />
          </div>
          <div>
            <Badge.App>ANT</Badge.App>
          </div>
          <div>
            <Badge.Identity>0x0998B61aE8eD80f9370B579ee8085e4e05ff7451</Badge.Identity>
          </div>
        </BadgesRow>
      </Container>
    </Page.Demo>
  </Page>
)

const BadgesRow = styled.div`
  display: flex;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
`

export default PageTable
