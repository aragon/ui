import React from 'react'
import { ModalProvider, ModalConsumer, Modal, Button } from '@aragon/ui'
import Page from 'comps/Page/Page'
import DemoContainer from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/ModalManager/ModalManager.md'

const MyModal = ({ onHide }) => (
  <Modal
    title="Title"
    body={
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    }
    onHide={onHide}
    blocking={true}
    More={
      <Button.Anchor mode="strong" href="https://ui.aragon.org/ModalManager" target="_blank">
        More button
      </Button.Anchor>
    }
  />
)

const PageModalManager = ({ title }) => (
  <ModalProvider>
    <Page title={title} readme={readme}>
      <Page.Demo opaque>
        <DemoContainer>
          <ModalConsumer>
            {({ showModal }) => (
              <Button mode="strong" compact onClick={() => showModal(MyModal)}>
                Show modal
              </Button>
            )}
          </ModalConsumer>
        </DemoContainer>
      </Page.Demo>
    </Page>
  </ModalProvider>
)

export default PageModalManager
