import React from 'react'
import styled from 'styled-components'
import { MessageHub, Button } from '@aragon/ui'

import Page from 'comps/Page/Page'
import DemoContainer from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/MessageHub/README.md'

const Container = styled(DemoContainer)`
  p {
    margin: 0;
  }
  p + p {
    margin-top: 20px;
  }
`

const PageMessageHub = ({ title }) => (
  <MessageHub>
    <Page title={title} readme={readme}>
      <Page.Demo opaque>
        <Container>
          <div>
            <MessageHub.Toast>
              {toast => (
                <Button mode="strong" compact onClick={() => toast('hello')}>
                  Add toast
                </Button>
              )}
            </MessageHub.Toast>
          </div>
        </Container>
      </Page.Demo>
    </Page>
  </MessageHub>
)

export default PageMessageHub
