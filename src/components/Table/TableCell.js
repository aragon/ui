import React from 'react'
import PropTypes from '../../proptypes'
import styled from 'styled-components'
import { theme } from '../../theme'

const { contentBackground } = theme

const StyledTableCell = styled.td`
  padding: 20px;
  background: ${contentBackground};
  text-align: ${({ align }) => align};
`

const StyledTableCellContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ align }) =>
    align === 'right' ? 'flex-end' : 'space-between'};
`

const TableCell = ({
  children,
  contentContainer: Container,
  align,
  ...props
}) => (
  <StyledTableCell align={align} {...props}>
    <Container align={align}>{children}</Container>
  </StyledTableCell>
)

TableCell.propTypes = {
  align: PropTypes.string,
  contentContainer: PropTypes._component,
  children: PropTypes.node,
}

TableCell.defaultProps = {
  align: 'left',
  contentContainer: StyledTableCellContent,
}

export { StyledTableCellContent }
export default TableCell
