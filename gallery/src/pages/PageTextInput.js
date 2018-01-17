import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/Input/TextInput.md'
import { TextInput } from '@aragon/ui'
import Container from '../components/Page/DemoContainer'

const DemoHeader = styled.h4`
  margin-bottom: 10px;
`

const PageTextInput = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <div>
          <TextInput placeholder="TextInput" type="text" />
        </div>
        <div>
          <TextInput readOnly type="text" value="Readonly" />
        </div>
        <div>
          <TextInput disabled type="text" value="Disabled" />
        </div>
      </Container>
      <DemoHeader>TextInput.Number</DemoHeader>
      <Container>
        <div>
          <TextInput.Number placeholder="Number" />
        </div>
      </Container>
    </Page.Demo>
  </Page>
)

export default PageTextInput
