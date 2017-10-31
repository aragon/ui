import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from '@aragon/ui/components/Section/README.md'

const PageSection = ({ title }) => (
  <Page title={title} readme={readme} />
)

export default PageSection
