import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Table = ({ header, children, ...props }) => (
  <StyledTable {...props}>
    {header && <thead>{header}</thead>}
    <tbody>{children}</tbody>
  </StyledTable>
)

Table.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
}

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
`

export default Table
