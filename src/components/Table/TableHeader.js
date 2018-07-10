import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '../../theme'
import Text from '../Text/Text'

const StyledTableHeader = styled.th`
  padding: 0;
  padding-left: ${({ align }) => (align === 'left' ? '21px' : '0')};
  padding-right: ${({ align }) => (align === 'right' ? '21px' : '0')};
  line-height: 30px;
  font-weight: normal;
  text-align: ${({ align }) => align};
  white-space: nowrap;
`

const TableHeader = ({ title, align, ...props }) => (
  <StyledTableHeader align={align} {...props}>
    <Text.Block color={theme.textSecondary} smallcaps>
      {title}
    </Text.Block>
  </StyledTableHeader>
)

TableHeader.propTypes = {
  title: PropTypes.string,
  align: PropTypes.string,
}

TableHeader.defaultProps = {
  align: 'left',
}

export default TableHeader
