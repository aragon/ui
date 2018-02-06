import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/Header/README.md'
import { Text, Header, colors } from '@aragon/ui'

const Container = styled.div`
  padding: 30px;
  p {
    margin-top: 30px;
    &:first-child {
      margin-top: 0;
    }
  }
`

const PageHeader = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <Text.Paragraph>Default:</Text.Paragraph>
        <Header />
        <Text.Paragraph>With menu entries:</Text.Paragraph>
        <Header
          menuItems={[
            ['/entry1', 'Entry 1'],
            ['/entry2', 'Entry 2'],
            ['/entry3', 'Entry 3', true],
            ['/entry4', 'Entry 4'],
          ]}
        />
        <Text.Paragraph spaced>With a title:</Text.Paragraph>
        <Header title="Project" />
      </Container>
    </Page.Demo>
  </Page>
)

export default PageHeader
