import React from 'react'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/Card/EmptyStateCard.md'
import { EmptyStateCard, IconHome } from '@aragon/ui'
import Container from '../components/Page/DemoContainer'

const PageEmptyStateCard = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <div>
          <EmptyStateCard
            actionText="Create a new post!"
            text="You seem to not have any content on your wall."
            icon={() => <IconHome color="blue" />}
          />
        </div>
        <div>
          <EmptyStateCard
            actionDisabled
            actionText="Create a new post!"
            text="You seem to not have any content on your wall."
            icon={() => <IconHome color="blue" />}
          />
        </div>
      </Container>
    </Page.Demo>
  </Page>
)

export default PageEmptyStateCard
