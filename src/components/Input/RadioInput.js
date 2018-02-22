import styled, { css } from 'styled-components'
import theme from '../../theme'

// Utility styles for the radio input
const radioActive = css`
  background: transparent;
  &:after {
    content: '';
  }
`

const radioDimmed = css`
  ${radioActive};
  &:after {
    opacity: 0.5;
    transition: none;
  }
`

// Styled component
const RadioInput = styled.input.attrs({
  type: 'radio',
})`
  appearance: none;
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  background: ${theme.secondaryBackground};
  border: 1px ${theme.contentBorder} solid;
  border-radius: 7px;
  width: 14px;
  height: 14px;
  outline: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:checked,
  &:focus,
  &:hover {
    ${radioActive};
  }

  &:after {
    background: ${theme.accent};
    width: 8px;
    height: 8px;
    border-radius: 4px;
    transition: opacity 200ms linear;
  }
  &:not(:checked):focus,
  &:not(:checked):hover {
    ${radioDimmed};
  }
`

RadioInput.css = {
  active: radioActive,
  dimmed: radioDimmed,
}

export default RadioInput
