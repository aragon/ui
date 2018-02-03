import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import Text from '../Text/Text'

const StyledTableHeader = styled.th`
  padding-left: ${({align}) => align === 'left'? '21px' : '0'};
  padding-right: ${({align}) => align === 'right'? '21px' : '0'};
  text-align: left;
  font-weight: normal;
  text-align: ${({ align }) => align};
`

const DefaultProps = {
  align: 'left',
}

const TableHeader = ({ title, align, ...props }) => (
  <StyledTableHeader align={align} {...props}>
    <Text.Block color={theme.textSecondary} smallcaps>
      {title}
    </Text.Block>
  </StyledTableHeader>
)

TableHeader.defaultProps = DefaultProps

export default TableHeader
