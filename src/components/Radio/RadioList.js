import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Text from '../Text/Text'
import RadioGroup from './RadioGroup'
import RadioListItem from './RadioListItem'
import { noop, stylingProps } from '../../utils'

class RadioList extends React.Component {
  static propTypes = {
    description: PropTypes.node,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.node.isRequired,
        title: PropTypes.node.isRequired,
      })
    ),
    onChange: PropTypes.func,
    selected: ({ items, selected }, _, componentName) => {
      if (!Number.isInteger(selected) || selected >= items.length) {
        throw new Error(
          `Invalid prop \`selected\` supplied to \`${componentName}\`. ` +
            '`selected` must be an integer less than the length of `items`. ' +
            `Given ${selected} instead.`
        )
      }
    },
    title: PropTypes.node,
  }
  static defaultProps = {
    items: [],
    onChange: noop,
    selected: 0,
  }
  render() {
    const { description, items, onChange, selected, title } = this.props
    return (
      <div {...stylingProps(this)}>
        {title && (
          <Title>
            <Text size="large" weight="bold">
              {title}
            </Text>
          </Title>
        )}
        {description && <Description>{description}</Description>}
        <StyledRadioGroup onChange={onChange} selected={selected}>
          {items.map(({ description, title }, i) => (
            <RadioListItem
              key={i}
              description={description}
              index={i}
              title={title}
            />
          ))}
        </StyledRadioGroup>
      </div>
    )
  }
}

const Title = styled.h2`
  margin-bottom: 5px;
`

const Description = styled(Text.Block)`
  margin-bottom: 18px;
`

const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: column;
`

export default RadioList
