import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'
import readme from 'ui-src/components/Bar/README.md'

const PageBar = ({ title }) => <Page title={title} readme={readme} />

export default PageBar
