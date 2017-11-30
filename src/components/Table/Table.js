/* @flow */
import type { Node } from 'react'
import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
`

type Props = {
  children: Node,
  header?: Node,
}

const Table = ({ header, children, ...props }: Props) => (
  <StyledTable {...props}>
    {header && <thead>{header}</thead>}
    <tbody>{children}</tbody>
  </StyledTable>
)

export default Table
