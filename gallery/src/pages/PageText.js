import React from 'react'
import styled from 'styled-components'
import { Text, colors } from '@aragon/ui'

import Page from 'comps/Page/Page'
import DemoContainer from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/Text/README.md'

const Container = styled(DemoContainer)`
  p {
    margin: 0;
  }
  p + p {
    margin-top: 20px;
  }
`

const PageText = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo opaque>
      <Container>
        <div>
          <Text.Paragraph size="xsmall">X-Small Text</Text.Paragraph>
          <Text.Paragraph size="small">Small Text</Text.Paragraph>
          <Text.Paragraph size="normal">Normal Text</Text.Paragraph>
          <Text.Paragraph size="large">Large Text</Text.Paragraph>
          <Text.Paragraph size="xlarge">X-Large Text</Text.Paragraph>
          <Text.Paragraph size="xxlarge">XX-Large Text</Text.Paragraph>
        </div>
      </Container>
    </Page.Demo>
  </Page>
)

export default PageText
