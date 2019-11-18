import React from 'react'
import styled from 'styled-components'
import { AppView } from '@aragon/ui'
import Page from 'comps/Page/Page'
import readme from 'ui-src/components/AppView/AppView.md'

const PageAppView = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <AppView title="My App">App content</AppView>
    </Page.Demo>
  </Page>
)

export default PageAppView
