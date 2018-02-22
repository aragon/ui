import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Text from '../Text/Text'
import RadioGroup from './RadioGroup'
import RadioListItem from './RadioListItem'

class RadioList extends React.Component {
  static propTypes = {
    description: PropTypes.node,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.node.isRequired,
        title: PropTypes.node.isRequired,
        value: PropTypes.string,
      })
    ),
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
    selected: 0,
  }
  render() {
    const { description, items, selected, title, ...props } = this.props
    return (
      <div>
        {title && (
          <Title>
            <Text size="large" weight="bold">
              {title}
            </Text>
          </Title>
        )}
        {description && <Description>{description}</Description>}
        <Group {...props}>
          {items.map(({ description, title, value }, i) => (
            <RadioListItem
              key={i}
              index={i}
              selected={i === selected}
              description={description}
              title={title}
              value={value}
            />
          ))}
        </Group>
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

const Group = styled(RadioGroup)`
  display: flex;
  flex-direction: column;
`

export default RadioList
