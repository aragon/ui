import React from 'react'
import styled from 'styled-components'
import { Root, Modal, Button } from '@tecommons/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/providers/Root/README.md'

class PageRoot extends React.Component {
  state = {
    openModal: false,
    openModalRoot: false
  }

  handleCloseRoot = () => {
    this.setState({ openModalRoot: false })
  }

  handleClose = () => {
    this.setState({ openModal: false })
  }

  render() {
    const { title } = this.props
    const { openModal, openModalRoot } = this.state
    
    return (
      <Page title={title} readme={readme}>
        <Page.Demo>
          <Root.Provider>
            <Container>
              <Button
                mode="primary"
                onClick={() => {
                  this.setState({
                    openModalRoot: true,
                  })
                }}
              >
                Open Modal in the local Root
              </Button>
              <Modal visible={openModalRoot} onClose={this.handleCloseRoot}>
                <div
                  css={`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 300px;
                  `}
                >
                  <Button mode="secondary" onClick={this.handleCloseRoot}>
                    Close modal
                  </Button>
                </div>
              </Modal>
            </Container>
          </Root.Provider>

          <Container>
            <Button
              mode="primary"
              onClick={() => {
                this.setState({
                  openModal: true,
                })
              }}
            >
              Open Modal in the parent Root
            </Button>
            <Modal visible={openModal} onClose={this.handleClose}>
              <div
                css={`
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  height: 300px;
                `}
              >
                <Button mode="secondary" onClick={this.handleClose}>
                  Close modal
                </Button>
              </div>
            </Modal>
          </Container>
        </Page.Demo>
      </Page>
    )
  }
}

export default PageRoot
