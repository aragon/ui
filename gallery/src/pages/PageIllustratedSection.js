import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/IllustratedSection/README.md'

const PageIllustratedSection = ({ title }) => (
  <Page title={title} readme={readme} />
)

export default PageIllustratedSection
