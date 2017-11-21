import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/Header/README.md'
import { Text, Header, colors } from '@aragon/ui'

const Container = styled.div`
  p {
    margin-top: 30px;
  }
`

const PageHeader = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <Text>Default:</Text>
        <Header />
        <Text>With menu entries:</Text>
        <Header
          menuItems={[
            ['/entry1', 'Entry 1'],
            ['/entry2', 'Entry 2'],
            ['/entry3', 'Entry 3', true],
            ['/entry4', 'Entry 4'],
          ]}
        />
        <Text spaced>With a title:</Text>
        <Header title="Project" />
      </Container>
    </Page.Demo>
  </Page>
)

export default PageHeader
