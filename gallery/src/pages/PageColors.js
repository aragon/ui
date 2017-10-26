import React from 'react'
import styled from 'styled-components'
import { colors, brand } from '@aragon/ui'
import Page from 'comps/Page/Page'
import ColorGroup from 'comps/ColorGroup/ColorGroup'

const PageButton = ({ title }) => (
  <Page title={title}>
    {Object.entries(colors).map(([name, colors]) => (
      <ColorGroup key={name} name={name} colors={colors} compact />
    ))}
    <ColorGroup name="Aragon Brand" colors={brand} compact />
  </Page>
)

export default PageButton
