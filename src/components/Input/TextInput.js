/* @flow */
import React from 'react'
import theme from '../../theme'
import { font } from '../../utils/styles'
import styled from 'styled-components'

const StyledInput = styled.input`
  ${font({ size: 'small', weight: 'normal' })};
  width: ${({ wide }) => (wide ? '100%' : 'auto')};

  padding: 5px 10px;
  background: ${theme.contentBackground};
  border: 1px solid ${theme.contentBorder};
  border-radius: 3px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);
  color: ${theme.textPrimary};
  appearance: none;
  &:focus {
    outline: none;
    border-color: ${theme.contentBorderActive};
  }
  &:read-only {
    color: transparent;
    text-shadow: 0 0 0 ${theme.textSecondary};
  }
`

type TextInputType =
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url'
type Props = {
  type: TextInputType,
}

const TextInput = (props: Props) => <StyledInput {...props} />
TextInput.defaultProps = {
  type: 'text',
}

TextInput.Number = props => <StyledInput type="number" {...props} />

export default TextInput
