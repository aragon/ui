import React from 'react'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/SidePanel/README.md'
import { SidePanel } from '@aragon/ui'
import Container from '../components/Page/DemoContainer'

// TODO: Iframe-loading capabilities needed before implementing this demo page
const PageSidePanel = ({ title }) => <Page title={title} readme={readme} />

export default PageSidePanel
