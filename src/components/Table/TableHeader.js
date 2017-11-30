/* @flow */
import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import Text from '../Text/Text'

const StyledTableHeader = styled.th`
  padding-left: 21px;
  text-align: left;
  font-weight: normal;
`

type Props = {
  title: string,
}

const TableHeader = ({ title, ...props }: Props) => (
  <StyledTableHeader {...props}>
    <Text color={theme.textSecondary} smallcaps>
      {title}
    </Text>
  </StyledTableHeader>
)

export default TableHeader
