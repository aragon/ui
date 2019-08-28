import React from 'react'
import Page from 'comps/Page/Page'
import readme from 'ui-src/components/ButtonBase/README.md'

function PageButton({ title }) {
  return <Page title={title} readme={readme} />
}

export default PageButton
