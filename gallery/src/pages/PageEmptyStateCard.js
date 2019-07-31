import React from 'react'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/Card/EmptyStateCard.md'
import { Button, EmptyStateCard, IconHome } from '@aragon/ui'
import Container from '../components/Page/DemoContainer'

const PageEmptyStateCard = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <EmptyStateCard
          text="You seem to not have any content on your wall."
          illustration={
            <IconHome
              color="blue"
              css={`
                margin: auto;
                width: 140px;
                height: auto;
              `}
            />
          }
          action={
            <Button onClick={() => console.log('Button was clicked')}>
              Click me
            </Button>
          }
        />
      </Container>
    </Page.Demo>
  </Page>
)

export default PageEmptyStateCard
