import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/Table/Table.md'
import { Table, TableCell, TableHeader, TableRow, Text } from '@aragon/ui'

const Container = styled.div`
  display: flex;
  max-width: 800px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  & > div {
    margin-left: 20px;
  }
  & > div:first-child {
    margin: 0;
  }
`

const DemoHeader = styled.h4`
  margin-bottom: 10px;
`

const TextContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

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
