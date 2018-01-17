import React from 'react'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/AragonApp/AppBar.md'
import { AppBar, Button } from '@aragon/ui'
import Container from '../components/Page/DemoContainer'

const PageAppBar = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <div>
          <AppBar
            title="Your Aragon App"
            endContent={
              <Button mode="strong" compact>
                Log In
              </Button>
            }
          />
        </div>
      </Container>
    </Page.Demo>
  </Page>
)

export default PageAppBar
