import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'
import readme from 'ui-src/components/Header/README.md'

const PageHeader = ({ title }) => <Page title={title} readme={readme} />

export default PageHeader
