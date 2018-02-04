/* @flow */
import type { Node } from 'react'
import React from 'react'
import styled from 'styled-components'
import Text from '../Text/Text'
import theme from '../../theme'

const StyledField = styled.div`
  margin-bottom: 20px;
`

const StyledAsterisk = styled.span`
  color: ${theme.accent};
  float: right;
  padding-top: 3px;
  font-size: 12px;
`

type Props = {
  children: Node,
  label: string,
}

const Field = ({ children, label, ...props }: Props) => {
  const isRequired = React.Children.toArray(children).some(
    ({ props: childProps }) => childProps.required
  )
  return (
    <StyledField {...props}>
      <label>
        <Text.Block color={theme.textSecondary} smallcaps>
          {label}
          {isRequired && <StyledAsterisk title="Required">*</StyledAsterisk>}
        </Text.Block>
        {children}
      </label>
    </StyledField>
  )
}

export default Field
