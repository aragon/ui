import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import color from 'onecolor'
import Text from '../Text/Text'
import { theme, colors } from '../../theme'
import { unselectable } from '../../utils/styles'
import RadioButton from '../Input/RadioButton'

const { contentBorder } = theme
const labelBoxBorder = color(colors.Sea['Light Sea'])

class RadioListItem extends React.Component {
  static propTypes = {
    description: PropTypes.node.isRequired,
    index: PropTypes.number.isRequired,
    title: PropTypes.node.isRequired,

    className: PropTypes.string,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    selected: PropTypes.bool,
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
      className,
      description,
      selected,
      title,
      index: ignoredIndex,
      onChange: ignoredOnChange,
      onSelect: ignoredOnSelect,
      ...radioProps
    } = this.props
    return (
      <Label className={className}>
        <Radio
          checked={selected}
          onChange={this.handleOnChange}
          {...radioProps}
        />
        <LabelBox selected={selected}>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </LabelBox>
      </Label>
    )
  }
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
  transition: border 200ms linear;
  cursor: pointer;

  &:focus,
  &:hover {
    border-color: ${labelBoxBorder.alpha(0.35).cssa()};
  }
`

const Title = styled(Text).attrs({
  weight: 'bold',
})``

const Description = styled(Text.Block)`
  margin-top: 5px;
`

const Radio = styled(RadioButton)`
  flex-shrink: 0;
  margin-top: 16px;
`

export default RadioListItem
