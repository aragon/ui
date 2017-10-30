import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from '@aragon/ui/components/Text/README.md'
import { Text, colors } from '@aragon/ui'

const Container = styled.div`
  padding: 20px;
  background: ${colors.Rain['Aqua Blue']};
  border-radius: 5px;
  p {
    margin: 0;
  }
  p + p {
    margin-top: 20px;
  }
`

const PageText = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <Text size="xsmall">X-Small Text</Text>
        <Text size="small">Small Text</Text>
        <Text size="normal">Normal Text</Text>
        <Text size="large">Large Text</Text>
        <Text size="xlarge">X-Large Text</Text>
        <Text size="xxlarge">XX-Large Text</Text>
      </Container>
    </Page.Demo>
  </Page>
)

export default PageText
