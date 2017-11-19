import React from 'react'
import styled from 'styled-components'
import { theme } from '@aragon/ui'
import Page from 'comps/Page/Page'
import ColorGroup from 'comps/ColorGroup/ColorGroup'
import readme from 'ui-src/theme/README.md'

const PageButton = ({ title }) => (
  <Page title={title} readme={readme}>
    <ColorGroup name="Aragon UI Theme" colors={theme} />
  </Page>
)

export default PageButton
