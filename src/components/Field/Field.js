/* @flow */
import type { Node } from 'react'
import React from 'react'
import styled from 'styled-components'
import Text from '../Text/Text'
import theme from '../../theme'
import { unselectable } from '../../utils/styles'

const StyledField = styled.div`
  margin-bottom: 20px;
`

const StyledAsterisk = styled.span`
  color: ${theme.accent};
  float: right;
  padding-top: 3px;
  font-size: 12px;
`

const StyledTextBlock = styled(Text.Block)`
  ${unselectable()};
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
        <StyledTextBlock color={theme.textSecondary} smallcaps>
          {label}
          {isRequired && <StyledAsterisk title="Required">*</StyledAsterisk>}
        </StyledTextBlock>
        {children}
      </label>
    </StyledField>
  )
}

export default Field
