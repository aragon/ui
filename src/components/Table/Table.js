import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TableRow from './TableRow'
import { theme } from '../../theme'

const { contentBorder } = theme

const Table = ({ header, children, ...props }) => (
  <StyledTable {...props}>
    {header && <thead>{header}</thead>}
    <tbody>{children}</tbody>
  </StyledTable>
)

Table.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  noSideBorders: PropTypes.bool,
}

Table.defaultProps = {
  noSideBorders: false,
}

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;

  td {
    border-bottom: 1px solid ${contentBorder};
  }

  /* First and last cell styling */
  ${TableRow}:first-child td {
    border-top: 1px solid ${contentBorder};
  }
  td:first-child {
    border-left: ${({ noSideBorders }) =>
      noSideBorders ? 0 : `1px solid ${contentBorder}`};
  }
  td:last-child {
    border-right: ${({ noSideBorders }) =>
      noSideBorders ? 0 : `1px solid ${contentBorder}`};
  }

  /* First and last row styling */
  ${TableRow}:first-child td:first-child {
    border-top-left-radius: ${({ noSideBorders }) =>
      noSideBorders ? 0 : '3px'};
  }
  ${TableRow}:first-child td:last-child {
    border-top-right-radius: ${({ noSideBorders }) =>
      noSideBorders ? 0 : '3px'};
  }
  ${TableRow}:last-child td:first-child {
    border-bottom-left-radius: ${({ noSideBorders }) =>
      noSideBorders ? 0 : '3px'};
  }
  ${TableRow}:last-child td:last-child {
    border-bottom-right-radius: ${({ noSideBorders }) =>
      noSideBorders ? 0 : '3px'};
  }
`

export default Table
