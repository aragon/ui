import React, { useState } from 'react'
import { Bar, BackButton, GU } from '@tecommons/ui'

import Page from 'comps/Page/Page'
import Container from '../components/Page/DemoContainer'
import readme from 'ui-src/components/BackButton/README.md'

function PageBackButton({ title }) {
  const [selected, setSelected] = useState(9)
  return (
    <Page title={title} readme={readme}>
      <h2>Demonstration</h2>
      <Bar primary={<BackButton onClick={() => goBack()} />} css="margin: 0" />
    </Page>
  )
}

export default PageBackButton
