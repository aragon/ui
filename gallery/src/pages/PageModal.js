import React from 'react'
import { Modal, Button } from '@aragon/ui'
import Page from 'comps/Page/Page'
import DemoContainer from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/ModalManager/Modal.md'

const PageModal = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo opaque>
      <DemoContainer>
        <Modal
          title="Title"
          body={
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          }
          onHide={() => console.log('Hide modal callback')}
          More={
            <Button.Anchor href="https://ui.aragon.org/Modal" mode="strong" target="_blank">
              More button
            </Button.Anchor>
          }
        />
      </DemoContainer>
    </Page.Demo>
  </Page>
)

export default PageModal
