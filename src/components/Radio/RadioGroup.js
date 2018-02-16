import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Text from '../Text/Text'
import RadioItem from './RadioItem'

class RadioGroup extends React.Component {
  static propTypes = {
    description: PropTypes.node,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.node,
        title: PropTypes.node,
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
    onChange: () => {},
    selected: 0,
  }
  handleOnChange = index => {
    this.props.onChange(index)
  }
  render() {
    const { description, items, selected, title, ...props } = this.props
    return (
      <Group {...props}>
        {title && (
          <Title>
            <Text size="large" weight="bold">
              {title}
            </Text>
          </Title>
        )}
        {description && <Description>{description}</Description>}
        {items.map(({ description, title }, i) => (
          <RadioItem
            key={i}
            index={i}
            selected={i === selected}
            onSelect={this.handleOnChange}
            description={description}
            title={title}
          />
        ))}
      </Group>
    )
  }
}

const Group = styled.div.attrs({
  role: 'radiogroup',
})`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  margin-bottom: 5px;
`

const Description = styled(Text.Block)`
  margin-bottom: 8px;
`

export default RadioGroup
