import React from 'react'
import styled from 'styled-components'
import { Info } from '@aragon/ui'

import Page from 'comps/Page/Page'
import Container from '../components/Page/DemoContainer'
import readme from 'ui-src/components/Info/README.md'

const PageInfo = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo opaque>
      <Container>
        <InfoRow>
          <div>
            <Info title="Information">Here is some info</Info>
          </div>
          <div>
            <Info>Here is some info without a title</Info>
          </div>
        </InfoRow>
      </Container>
      <Container>
        <InfoRow>
          <div>
            <Info.Action title="Action info">
              Here is some info for an action
            </Info.Action>
          </div>
          <div>
            <Info.Action>
              Here is some info for an action without a title
            </Info.Action>
          </div>
        </InfoRow>
      </Container>
      <Container>
        <InfoRow>
          <div>
            <Info.Alert title="Alert info">
              Here is some info for a alert
            </Info.Alert>
          </div>
          <div>
            <Info.Alert>
              Here is some info for a alert without a title
            </Info.Alert>
          </div>
        </InfoRow>
      </Container>
      <Container>
        <InfoRow>
          <div>
            <Info.Permissions title="Permission info">
              Here is some info for a permission
            </Info.Permissions>
          </div>
          <div>
            <Info.Permissions>
              Here is some info for a permission without a title
            </Info.Permissions>
          </div>
        </InfoRow>
      </Container>
    </Page.Demo>
  </Page>
)

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
`

export default PageInfo
