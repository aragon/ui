import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/AragonApp/AragonApp.md'
import { AragonApp } from '@aragon/ui'

const Container = styled.div`
  display: flex;
  max-width: 800px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  & > div {
    margin-left: 20px;
  }
  & > div:first-child {
    margin: 0;
  }
`

const PageAragonApp = ({ title }) => <Page title={title} readme={readme} />

export default PageAragonApp
