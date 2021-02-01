import React from 'react'
import styled from 'styled-components'
import { Info } from '@tecommons/ui'

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
