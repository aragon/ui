/* @flow */
import type { Node } from 'react'
import React from 'react'
import styled from 'styled-components'
import Text from '../Text/Text'
import theme from '../../theme'

const StyledField = styled.div`
  margin-bottom: 20px;
`

const StyledAsterix = styled.span`
  color: ${theme.gradientStart};
  float: right;
  &:after {
    content: '*';
  }
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
        {children.props.required && <StyledAsterix />}
      </Text.Block>
      {children}
    </label>
  </StyledField>
)

export default Field
