import React from 'react'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/Table/Table.md'
import { Table, TableCell, TableHeader, TableRow, Text } from '@aragon/ui'
import Container from '../components/Page/DemoContainer'

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
