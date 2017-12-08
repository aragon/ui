import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/Form/Input.md'
import { Input } from '@aragon/ui'

const Container = styled.div`
  display: flex;
  max-width: 800px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  & > div {
    margin-left: 20px;
  }
  & > div:first-child {
    margin: 0;
  }
`

const DemoHeader = styled.h4`
  margin-bottom: 10px;
`

const PageInput = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <div>
          <Input placeholder="Input" type="text" />
        </div>
        <div>
          <Input readOnly type="text" value="Readonly" />
        </div>
        <div>
          <Input disabled type="text" value="Disabled" />
        </div>
      </Container>
      <DemoHeader>Input.Text</DemoHeader>
      <Container>
        <div>
          <Input.Text placeholder="Text" />
        </div>
      </Container>
      <DemoHeader>Input.Number</DemoHeader>
      <Container>
        <div>
          <Input.Number placeholder="Number" />
        </div>
      </Container>
    </Page.Demo>
  </Page>
)

export default PageInput
