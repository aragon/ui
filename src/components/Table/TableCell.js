/* @flow */
import type { Node, ComponentType } from 'react'
import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import TableRow from './TableRow'

const { contentBackground, contentBorder } = theme

const StyledTableCell = styled.td`
  padding: 20px;
  background: ${contentBackground};
  border-bottom: 1px solid ${contentBorder};

  /* First and last cell styling */
  &:first-child {
    border-left: 1px solid ${contentBorder};
  }
  &:last-child {
    border-right: 1px solid ${contentBorder};
  }

  /* First and last row styling */
  ${TableRow}:first-child & {
    border-top: 1px solid ${contentBorder};
  }
  ${TableRow}:first-child &:first-child {
    border-top-left-radius: 3px;
  }
  ${TableRow}:first-child &:last-child {
    border-top-right-radius: 3px;
  }
  ${TableRow}:last-child &:first-child {
    border-bottom-left-radius: 3px;
  }
  ${TableRow}:last-child &:last-child {
    border-bottom-right-radius: 3px;
  }
`

const StyledTableCellContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

type Props = {
  children: Node,
  contentContainer: ComponentType<*>,
}

const DefaultProps = {
  contentContainer: StyledTableCellContent,
}

const TableCell = ({
  children,
  contentContainer: Container,
  ...props
}: Props) => (
  <StyledTableCell {...props}>
    <Container>{children}</Container>
  </StyledTableCell>
)

TableCell.defaultProps = DefaultProps

export { StyledTableCellContent }
export default TableCell
