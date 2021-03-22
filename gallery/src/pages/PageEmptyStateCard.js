import React from 'react'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/Card/EmptyStateCard.md'
import { Button, EmptyStateCard } from '@tecommons/ui'
import Container from '../components/Page/DemoContainer'

const PageEmptyStateCard = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo container={false}>
      <EmptyStateCard
        text="You seem to not have any content on your wall."
        action={
          <Button onClick={() => console.log('Button was clicked')}>
            Action
          </Button>
        }
      />
    </Page.Demo>
  </Page>
)

export default PageEmptyStateCard
