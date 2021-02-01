import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'
import { Button, SidePanel } from '@tecommons/ui'

import Container from '../components/Page/DemoContainer'
import readme from 'ui-src/components/SidePanel/README.md'

class PageSidePanel extends React.Component {
  state = {
    opened: false,
  }
  handleOpen = () => {
    this.setState({ opened: true })
  }
  handleClose = () => {
    this.setState({ opened: false })
  }
  render() {
    const { opened } = this.state
    const { title } = this.props
    return (
      <Page title={title} readme={readme}>
        <Page.Demo opaque>
          <Container>
            <Wrapper>
              <ButtonWrapper>
                <Button mode="strong" onClick={this.handleOpen}>
                  Open Panel
                </Button>
              </ButtonWrapper>
            </Wrapper>
          </Container>
          <SidePanel
            title="SidePanel Title"
            onClose={this.handleClose}
            opened={opened}
          >
            Content goes here
          </SidePanel>
        </Page.Demo>
      </Page>
    )
  }
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export default PageSidePanel
