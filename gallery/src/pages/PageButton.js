import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from '@aragon/ui/components/Button/README.md'
import { Button, colors } from '@aragon/ui'

const Container = styled.div`
  display: flex;
  max-width: 800px;
  padding: 20px;
  background: ${colors.Rain['Aqua Blue']};
  border-radius: 5px;
  & > div {
    margin-left: 20px;
  }
  & > div:first-child {
    margin: 0;
  }
`

const PageButton = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <div>
          <Button>Normal Button</Button>
        </div>
        <div>
          <Button mode="outline">Outline Mode</Button>
        </div>
        <div>
          <Button mode="strong">Strong Mode</Button>
        </div>
        <div>
          <Button mode="text">Text Mode</Button>
        </div>
      </Container>
    </Page.Demo>
  </Page>
)

export default PageButton
