import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/Footer/README.md'
import { Text, Footer } from '@aragon/ui'

const Container = styled.div`
  padding: 30px;
  p {
    margin-top: 30px;
    &:first-child {
      margin-top: 0;
    }
  }
`

const PageFooter = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <Text.Paragraph>Default:</Text.Paragraph>
        <Footer />
        <Text.Paragraph>Compact mode:</Text.Paragraph>
        <Footer compact />
      </Container>
    </Page.Demo>
  </Page>
)

export default PageFooter
