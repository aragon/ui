import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/Card/Card.md'
import { Card, Text } from '@aragon/ui'
import Container from '../components/Page/DemoContainer'

const TextContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 0 20px;
  justify-content: space-around;
  align-items: center;
  white-space: nowrap;
`

const PageCard = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <div>
          <Card>
            <TextContainer>
              <Text>Default Card</Text>
            </TextContainer>
          </Card>
        </div>
        <Card width="100%">
          <TextContainer>
            <Text>Flexible Width</Text>
          </TextContainer>
        </Card>
      </Container>
    </Page.Demo>
  </Page>
)

export default PageCard
