import React from 'react'
import { Card } from '@tecommons/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/Card/Card.md'

function PageCard({ title }) {
  return (
    <Page title={title} readme={readme}>
      <Page.Demo>
        <Container>
          <div>
            <Card>
              <In>Default Card</In>
            </Card>
          </div>
          <Card width="100%">
            <In>Flexible Width</In>
          </Card>
        </Container>
      </Page.Demo>
    </Page>
  )
}

function In({ children }) {
  return (
    <div
      css={`
        display: flex;
        height: 100%;
        padding: 0 20px;
        justify-content: space-around;
        align-items: center;
        white-space: nowrap;
      `}
    >
      {children}
    </div>
  )
}

export default PageCard
