import React from 'react'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/AragonApp/AppBar.md'
import { AppBar, Button } from '@aragon/ui'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
`

const PageAppBar = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <AppBar
          title="Your Aragon App"
          endContent={
            <Button mode="strong" compact>
              Log In
            </Button>
          }
        />
      </Container>
    </Page.Demo>
  </Page>
)

export default PageAppBar
