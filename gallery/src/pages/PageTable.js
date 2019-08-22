import React from 'react'
import { Table, TableCell, TableHeader, TableRow, Text } from '@aragon/ui'

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
            <TableCell>
              <Text>January</Text>
            </TableCell>
            <TableCell>
              <Text>February</Text>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Text>10 commits</Text>
            </TableCell>
            <TableCell>
              <Text>32 commits</Text>
            </TableCell>
          </TableRow>
        </Table>
      </Container>
    </Page.Demo>
  </Page>
)
export default PageTable
