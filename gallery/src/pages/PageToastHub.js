import React from 'react'
import styled from 'styled-components'
import { ToastHub, Toast, Button } from '@tecommons/ui'

import Page from 'comps/Page/Page'
import DemoContainer from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/ToastHub/README.md'

const Container = styled(DemoContainer)`
  p {
    margin: 0;
  }
  p + p {
    margin-top: 20px;
  }
`

const PageToastHub = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo opaque>
      <Container>
        <div>
          <Toast>
            {toast => (
              <Button mode="strong" compact onClick={() => toast('hello')}>
                Add toast
              </Button>
            )}
          </Toast>
        </div>
      </Container>
    </Page.Demo>
  </Page>
)

export default PageToastHub
