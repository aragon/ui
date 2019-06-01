import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Radio from '../Input/Radio'
import Text from '../Text/Text'
import color from '../../utils/color'
import { theme, colors } from '../../theme'
import { unselectable } from '../../utils/styles'

const { contentBorder } = theme
const labelBoxBorder = color(colors.Sea['Light Sea'])

const RadioListItem = ({ description, index, title }) => (
  <Label>
    <RadioWrapper id={index} />
    <LabelBox>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </LabelBox>
  </Label>
)

RadioListItem.propTypes = {
  description: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.node.isRequired,
}

// Styled components
const Label = styled.label`
  display: flex;

  &:not(:first-child) {
    margin-top: 10px;
  }

  ${unselectable()};
`

const LabelBox = styled.div`
  flex-grow: 1;
  margin-left: 12px;
  padding: 12px 12px;
  border: 1px ${contentBorder} solid;
  border-radius: 3px;
  transition: border 100ms ease-in-out;
  cursor: pointer;
  &:hover {
    border-color: ${labelBoxBorder.alpha(0.35)};
  }
`

const Title = styled(Text).attrs({
  weight: 'bold',
})``

const Description = styled(Text.Block)`
  margin-top: 5px;
`

const RadioWrapper = styled(Radio)`
  flex-shrink: 0;
  margin-top: 16px;
`

export default RadioListItem
