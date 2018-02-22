import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Text from '../Text/Text'
import theme from '../../theme'
import { unselectable } from '../../utils/styles'
import RadioInput from '../Input/RadioInput'

const RadioListItem = ({
  className,
  description,
  selected,
  title,
  ...radioProps
}) => (
  <Label className={className}>
    <Radio checked={selected} {...radioProps} />
    <LabelBox selected={selected}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </LabelBox>
  </Label>
)
RadioListItem.propTypes = {
  description: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,

  className: PropTypes.string,
  selected: PropTypes.bool,
}

// Utility styles from RadioInput
const { dimmed: radioDimmed } = RadioInput.css

// Styled components
const Label = styled.label`
  display: flex;

  &:not(:first-child) {
    margin-top: 10px;
  }

  &:hover ${RadioInput.Radio}:not(:checked) {
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
  ${RadioInput.Radio}:focus ~ &,
  ${RadioInput.Radio}:hover ~ & {
    border-color: rgba(33, 183, 196, 0.35);
  }
  ${RadioInput.Radio}:checked ~ & {
    border-color: rgba(33, 183, 196, 0.7);
  }
`

const Title = styled(Text).attrs({
  weight: 'bold',
})``

const Description = styled(Text.Block)`
  margin-top: 5px;
`

const Radio = styled(RadioInput)`
  flex-shrink: 0;
  margin-top: 16px;
`

export default RadioListItem
