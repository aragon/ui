import React from 'react'
import { Table, TableCell, TableHeader, TableRow } from '@tecommons/ui'

import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/Table/Table.md'

const PageTable = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <Table
          header={
            <TableRow>
              <TableHeader title="Activity" />
            </TableRow>
          }
        >
          <TableRow>
            <TableCell>January</TableCell>
            <TableCell>February</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>10 commits</TableCell>
            <TableCell>32 commits</TableCell>
          </TableRow>
        </Table>
      </Container>
    </Page.Demo>
  </Page>
)
export default PageTable
