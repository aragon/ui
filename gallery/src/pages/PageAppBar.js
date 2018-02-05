import React from 'react'
import styled from 'styled-components'
import { AppBar, Button } from '@aragon/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/AragonApp/AppBar.md'

const StyledContainer = styled(Container)`
  width: 100%;
`

const PageAppBar = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <StyledContainer>
        <AppBar
          title="Your Aragon App"
          endContent={
            <Button mode="strong" compact>
              Log In
            </Button>
          }
        />
      </StyledContainer>
    </Page.Demo>
  </Page>
)

export default PageAppBar
