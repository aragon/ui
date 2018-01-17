import React from 'react'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/AragonApp/AragonApp.md'
import Container from '../components/Page/DemoContainer'

const PageAragonApp = ({ title }) => <Page title={title} readme={readme} />

export default PageAragonApp
