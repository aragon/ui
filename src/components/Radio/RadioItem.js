import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Text from '../Text/Text'
import theme from '../../theme'
import { unselectable } from '../../utils/styles'

class RadioItem extends React.Component {
  static propTypes = {
    description: PropTypes.node.isRequired,
    index: PropTypes.number.isRequired,
    title: PropTypes.node.isRequired,

    onSelect: PropTypes.func,
    selected: PropTypes.bool,
  }
  static defaultProps = {
    onSelect: () => {},
    selected: false,
  }
  handleOnSelect = event => {
    event.stopPropagation() // prevent the default change event from bubbling up

    const { index, onSelect } = this.props
    onSelect(index)
  }
  render() {
    const { description, selected, title, ...props } = this.props
    return (
      <Label {...props}>
        <Radio checked={selected} onChange={this.handleOnSelect} />
        <LabelBox selected={selected}>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </LabelBox>
      </Label>
    )
  }
}

// Utility styles for the radio input
const radioActive = css`
  display: flex;
  background: transparent;
`

const radioDimmed = css`
  &:after {
    opacity: 0.5;
    transition: none;
  }
`

// Styled components
const Label = styled.label`
  display: flex;

  &:not(:first-child) {
    margin-top: 10px;
  }

  &:hover input:not(:checked) {
    ${radioActive};
    ${radioDimmed};
  }

  ${unselectable()};
`

const LabelBox = styled.div`
  flex-grow: 1;
  margin-left: 12px;
  padding: 12px 12px;
  border: 1px ${theme.contentBorder} solid;
  border-radius: 3px;
  transition: border 200ms linear;
  cursor: pointer;

  &:focus,
  &:hover,
  input:focus ~ &,
  input:hover ~ & {
    border-color: rgba(33, 183, 196, 0.35);
  }
  input:checked ~ & {
    border-color: rgba(33, 183, 196, 0.7);
  }
`

const Title = styled(Text).attrs({
  weight: 'bold',
})``

const Description = styled(Text.Block)`
  margin-top: 5px;
`

const Radio = styled.input.attrs({
  type: 'radio',
})`
  flex-shrink: 0;
  appearance: none;
  margin-top: 16px;
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
    content: '';
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

export default RadioItem
