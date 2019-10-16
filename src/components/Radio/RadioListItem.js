import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Radio from '../Input/Radio'
import Text from '../Text/Text'
import color from '../../utils/color'
import { colors } from '../../theme-legacy'
import { useTheme } from '../../theme'
import { unselectable } from '../../utils'
import GU  from '../../style'

const labelBoxBorder = color(colors.Sea['Light Sea'])
const RadioListItem = React.memo(function RadioListItem({
  description,
  index,
  title,
}) {
  const theme = useTheme()
  return (
    <Label>
      <RadioWrapper id={index} />
      <LabelBox
      css={`
        border: 1px ${theme.contentBorder} solid;
      `}
      >
        <Title>{title}</Title>
        <Description>{description}</Description>
      </LabelBox>
    </Label>
  )
})

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
  margin-top: ${GU / 2}px;
`

const RadioWrapper = styled(Radio)`
  flex-shrink: 0;
  margin-top: ${2 * GU}px;
`

export default RadioListItem
