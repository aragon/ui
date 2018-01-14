import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/Button/README.md'
import { Button } from '@aragon/ui'

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

const PageButton = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <div>
          <Button>Normal Button</Button>
        </div>
        <div>
          <Button mode="secondary">Secondary Button</Button>
        </div>
        <div>
          <Button mode="strong">Strong Mode</Button>
        </div>
        <div>
          <Button mode="outline">Outline Mode</Button>
        </div>
        <div>
          <Button mode="text">Text Mode</Button>
        </div>
      </Container>
      <Container>
        <div>
          <Button emphasis="positive">Positive Button</Button>
        </div>
        <div>
          <Button emphasis="negative">Negative Button</Button>
        </div>
      </Container>
      <Container>
        <Button compact>Compact Button</Button>
      </Container>
      <Container>
        <Button wide>Wide Button</Button>
      </Container>
      <DemoHeader>Button.Anchor</DemoHeader>
      <Container>
        <div>
          <Button.Anchor href="https://aragon.one/" target="_blank">
            Link Button
          </Button.Anchor>
        </div>
      </Container>
    </Page.Demo>
  </Page>
)

export default PageButton
