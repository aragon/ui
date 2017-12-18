import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/Text/README.md'
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
        <Text.Block size="xsmall">X-Small Text</Text.Block>
        <Text.Block size="small">Small Text</Text.Block>
        <Text.Block size="normal">Normal Text</Text.Block>
        <Text.Block size="large">Large Text</Text.Block>
        <Text.Block size="xlarge">X-Large Text</Text.Block>
        <Text.Block size="xxlarge">XX-Large Text</Text.Block>
      </Container>
    </Page.Demo>
  </Page>
)

export default PageText
