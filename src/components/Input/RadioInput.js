import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import theme from '../../theme'

class RadioInput extends React.Component {
  static propTypes = {
    index: PropTypes.number,
    inline: PropTypes.bool,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
  }
  static defaultProps = {
    // By default, prevent the default change event from bubbling up
    onChange: event => {
      event.stopPropagation()
    },
    onSelect: () => {},
  }
  handleOnChange = event => {
    const { index, onChange, onSelect } = this.props
    onSelect(index)
    onChange(event)
  }
  render() {
    const {
      index: ignoredIndex,
      onChange: ignoredOnChange,
      onSelect: ignoredOnSelect,
      ...props
    } = this.props
    return <Radio onChange={this.handleOnChange} {...props} />
  }
}

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
const Radio = styled.input.attrs({
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
RadioInput.Radio = Radio

export default RadioInput
