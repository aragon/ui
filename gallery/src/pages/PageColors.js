import React from 'react'
import styled from 'styled-components'
import { colors, brand } from '@aragon/ui'
import Page from 'comps/Page/Page'
import ColorGroup from 'comps/ColorGroup/ColorGroup'

const PageButton = ({ title }) => (
  <Page title={title}>
    <p>The Aragon color palettes.</p>
    <div>
      <h2>Aragon Colors</h2>
      <p>
        These palettes contain the colors used by Aragon. It is not recommended
        to refer to them in your Aragon apps, prefer using the Aragon UI Theme.
      </p>
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
    <ColorGroup
      title={
        <div>
          <h2>Aragon Brand</h2>
          <p>
            This palette contains the base colors that define the Aragon brand.
          </p>
        </div>
      }
      colors={brand}
      compact
    />
  </Page>
)

export default PageButton
