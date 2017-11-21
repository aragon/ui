import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/Footer/README.md'
import { Text, Footer } from '@aragon/ui'

const Container = styled.div`
  p {
    margin-top: 30px;
  }
`

const PageFooter = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <Text>Default:</Text>
        <Footer />
        <Text>Compact mode:</Text>
        <Footer compact />
      </Container>
    </Page.Demo>
  </Page>
)

export default PageFooter
