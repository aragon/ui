import React from 'react'
import styled from 'styled-components'
import { Button, Modal, Root } from '@aragon/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/Modal/README.md'

class PageModal extends React.Component {
  state = {
    openModal: false,
  }
  render() {
    const { title } = this.props
    const { openModal } = this.state
    return (
      <Page title={title} readme={readme}>
        <Page.Demo>
          <Root.Provider>
            <Container>
              <Wrapper>
                <Button
                  onClick={() => {
                    this.setState({
                      openModal: true,
                    })
                  }}
                >
                  Open Modal
                </Button>
                <Modal visible={openModal} onClose={this.handleClose}>
                  <div
                    css={`
                      height: 200px;
                      width: 300px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    <Button mode="secondary" onClick={this.handleClose}>
                      Close modal
                    </Button>
                  </div>
                </Modal>
              </Wrapper>
            </Container>
          </Root.Provider>
        </Page.Demo>
      </Page>
    )
  }

  handleClose = () => {
    this.setState({ openModal: false })
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
`

export default PageModal
