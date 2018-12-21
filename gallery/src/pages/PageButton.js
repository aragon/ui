import React from 'react'
import styled from 'styled-components'
import { Button } from '@aragon/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/Button/README.md'

const DemoHeader = styled.h4`
  margin-bottom: 10px;
  padding: 20px 0;
`

const Row = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  align-items: center;
  > div {
    margin-left: 20px;
    &:first-child {
      margin-left: 0;
    }
  }
`

const PageButton = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <div>
          <Row>
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
          </Row>
          <Row>
            <div>
              <Button emphasis="positive">Positive Button</Button>
            </div>
            <div>
              <Button emphasis="negative">Negative Button</Button>
            </div>
            <div>
              <Button emphasis="positive" mode="strong">
                Positive Button
              </Button>
            </div>
            <div>
              <Button emphasis="negative" mode="strong">
                Negative Button
              </Button>
            </div>
          </Row>
          <Row>
            <div>
              <Button disabled>Disabled Button</Button>
            </div>
            <div>
              <Button mode="strong" disabled>
                Disabled Strong Button
              </Button>
            </div>
          </Row>
          <Row>
            <div>
              <Button mode="secondary" compact>
                Compact Button
              </Button>
            </div>
          </Row>
          <Row>
            <div style={{ width: '300px' }}>
              <Button mode="secondary" wide>
                Wide Button
              </Button>
            </div>
          </Row>
          <div>
            <DemoHeader>Button.Anchor</DemoHeader>
          </div>
          <Row>
            <div>
              <Button.Anchor href="https://aragon.org/" target="_blank">
                Link Button
              </Button.Anchor>
            </div>
          </Row>
        </div>
      </Container>
    </Page.Demo>
  </Page>
)

export default PageButton
