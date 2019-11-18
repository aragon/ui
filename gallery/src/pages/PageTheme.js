import React from 'react'
import styled from 'styled-components'
import { theme } from '@aragon/ui'
import Page from 'comps/Page/Page'
import ColorGroup from 'comps/ColorGroup/ColorGroup'
import readme from 'ui-src/theme-legacy/README.md'

const PageButton = ({ title }) => (
  <Page title={title} readme={readme}>
    <ColorGroup name="aragonUI Theme" colors={theme} />
  </Page>
)

export default PageButton
