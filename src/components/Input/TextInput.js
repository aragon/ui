import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme } from '../../theme'
import { font } from '../../utils/styles'

const baseStyles = css`
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

// Simple input
const TextInput = styled.input`
  ${baseStyles};
`
TextInput.propTypes = {
  required: PropTypes.bool,
  type: PropTypes.oneOf([
    'email',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'url',
  ]),
}
TextInput.defaultProps = {
  required: false,
  type: 'text',
}

// <input type=number> (only for compat)
const TextInputNumber = styled.input.attrs({ type: 'number' })`
  ${baseStyles};
`

// Multiline input (textarea element)
const TextInputMultiline = styled.textarea`
  ${baseStyles};
  resize: vertical;
`
TextInputMultiline.propTypes = {
  required: PropTypes.bool,
}
TextInputMultiline.defaultProps = {
  required: false,
}

TextInput.Number = TextInputNumber
TextInput.Multiline = TextInputMultiline

export default TextInput
