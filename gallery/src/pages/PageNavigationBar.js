import React from 'react'
import styled from 'styled-components'
import { AppBar, Button, NavigationBar } from '@aragon/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'

const StyledContainer = styled(Container)`
  width: 100%;
`

const PageAppBar = ({ title }) => (
  <Page title={title}>
    <Page.Demo>
      <StyledContainer>
        <AppBar
          endContent={
            <Button mode="strong" compact>
              Log In
            </Button>
          }
        >
          <NavigationBar />
        </AppBar>
      </StyledContainer>
    </Page.Demo>
  </Page>
)

export default PageAppBar
