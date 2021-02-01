import React from 'react'
import styled from 'styled-components'
import {
  ContextMenu,
  ContextMenuItem,
  IconShare,
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from '@tecommons/ui'
import Page from 'comps/Page/Page'
import readme from 'ui-src/components/ContextMenu/README.md'
import Container from '../components/Page/DemoContainer'

const PageContextMenu = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo height={180}>
      <Container style={{ maxWidth: 'none' }}>
        <Table
          header={
            <TableRow>
              <TableHeader style={{ width: '100%' }} />
              <TableHeader title="Actions" />
            </TableRow>
          }
        >
          <TableRow>
            <TableCell />
            <TableCell>
              <ContextMenu>
                <ContextMenuItem>
                  <IconShare />
                  <Label>Share URL</Label>
                </ContextMenuItem>
              </ContextMenu>
            </TableCell>
          </TableRow>
        </Table>
      </Container>
    </Page.Demo>
  </Page>
)

const Label = styled.span`
  margin-left: 15px;
  white-space: nowrap;
`

export default PageContextMenu
