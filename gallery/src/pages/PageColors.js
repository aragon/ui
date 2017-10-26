import React from 'react'
import styled from 'styled-components'
import { colors, brand } from '@aragon/ui'
import Page from 'comps/Page/Page'
import ColorGroup from 'comps/ColorGroup/ColorGroup'

const PageButton = ({ title }) => (
  <Page title={title}>
    <p>
      The Aragon color palettes. It is not recommended to use them directly,
      prefer using the Aragon UI Theme.
    </p>
    <div>
      <h2>Color Groups</h2>
      {Object.entries(colors).map(([name, colors]) => (
        <ColorGroup
          key={name}
          name={name}
          colors={colors}
          title={<h3>{name}</h3>}
          compact
        />
      ))}
    </div>
    <ColorGroup name="Aragon Brand" colors={brand} compact />
  </Page>
)

export default PageButton
