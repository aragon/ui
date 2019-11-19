import React from 'react'
import PropTypes from 'prop-types'
import { GU } from '../../style'
import { noop } from '../../utils'
import RadioGroup from './RadioGroup'
import RadioListItem from './RadioListItem'

function RadioList({
  description,
  items,
  onChange,
  selected,
  title,
  ...props
}) {
  return (
    <div {...props}>
      {title && (
        <h2
          css={`
            margin-bottom: ${0.5 * GU}px;
            font-weight: 600;
          `}
        >
          {title}
        </h2>
      )}
      {description && (
        <div
          css={`
            margin-bottom: ${2.5 * GU}px;
          `}
        >
          {description}
        </div>
      )}
      <RadioGroup
        onChange={onChange}
        selected={selected}
        css={`
          display: flex;
          flex-direction: column;
        `}
      >
        {items.map(({ description, title }, i) => (
          <RadioListItem
            key={i}
            description={description}
            index={i}
            title={title}
          />
        ))}
      </RadioGroup>
    </div>
  )
}

RadioList.propTypes = {
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

RadioList.defaultProps = {
  items: [],
  onChange: noop,
  selected: 0,
}

export default RadioList
