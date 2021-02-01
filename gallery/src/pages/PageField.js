import React from 'react'
import { Field, TextInput } from '@tecommons/ui'

import Page from 'comps/Page/Page'
import Container from '../components/Page/DemoContainer'
import readme from 'ui-src/components/Field/README.md'

const PageField = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo opaque>
      <Container>
        <div>
          <Field label="Enter name here:">
            <TextInput />
          </Field>
        </div>
      </Container>
      <Container>
        <div>
          <Field label="Enter name here:">
            <TextInput required />
          </Field>
        </div>
      </Container>
    </Page.Demo>
  </Page>
)

export default PageField
