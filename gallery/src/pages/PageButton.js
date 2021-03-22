import React from 'react'
import styled from 'styled-components'
import { Button } from '@tecommons/ui'
import Page from 'comps/Page/Page'
import readme from 'ui-src/components/Button/README.md'

function PageButton({ title }) {
  return (
    <Page title={title} readme={readme}>
      <Page.Demo container={false}>
        <div>
          <Row>
            <div>
              <Button>Normal</Button>
            </div>
            <div>
              <Button mode="strong">Strong</Button>
            </div>
            <div>
              <Button mode="positive">Positive</Button>
            </div>
            <div>
              <Button mode="negative">Negative</Button>
            </div>
            <div>
              <Button disabled>Disabled</Button>
            </div>
          </Row>
          <Row>
            <div style={{ width: '100%' }}>
              <Button mode="secondary" wide>
                Wide
              </Button>
            </div>
          </Row>
          <Row>
            <div>
              <Button>Medium</Button>
            </div>
            <div>
              <Button size="small">Small</Button>
            </div>
            <div>
              <Button size="mini">Mini</Button>
            </div>
          </Row>
        </div>
      </Page.Demo>
    </Page>
  )
}

function Row({ children }) {
  return (
    <div
      css={`
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
      `}
    >
      {children}
    </div>
  )
}

export default PageButton
