/* @flow */
import type { Node } from 'react'
import React from 'react'
import styled from 'styled-components'
import Text from '../Text/Text'
import theme from '../../theme'

const StyledField = styled.div`
  margin-bottom: 20px;
`

type Props = {
  children: Node,
  label: string,
}

const Field = ({ children, label, ...props }: Props) => (
  <StyledField {...props}>
    <label>
      <Text.Block color={theme.textSecondary} smallcaps>
        {label}
      </Text.Block>
      {children}
    </label>
  </StyledField>
)

export default Field
