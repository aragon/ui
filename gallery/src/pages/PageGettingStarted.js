import React from 'react'

import Page from 'comps/Page/Page'
import readme from 'ui-docs/GettingStarted.md'

function GettingStarted({ title }) {
  return <Page title={title} readme={readme} />
}

export default GettingStarted
