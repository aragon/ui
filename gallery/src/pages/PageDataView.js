import React from 'react'

import Page from 'comps/Page/Page'
import readme from 'ui-src/components/DataView/README.md'

function PageDataView({ title }) {
  return <Page title={title} readme={readme} />
}

export default PageDataView
