import React from 'react'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/Field/README.md'
import { Field, TextInput } from '@aragon/ui'
import Container from '../components/Page/DemoContainer'

const PageField = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <div>
          <Field label="Enter name here:">
            <TextInput />
          </Field>
        </div>
      </Container>
    </Page.Demo>
  </Page>
)

export default PageField
