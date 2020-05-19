import React from 'react'
import PropTypes from 'prop-types'
import Radio from '../Input/Radio'
import { useTheme } from '../../theme'
import { unselectable } from '../../utils'
import { GU } from '../../style'

const RadioListItem = React.memo(function RadioListItem({
  description,
  index,
  title,
}) {
  const theme = useTheme()
  return (
    <label
      css={`
        display: flex;
        ${unselectable()};
        & + & {
          margin-top: ${1 * GU}px;
        }
      `}
    >
      <Radio
        id={index}
        css={`
          flex-shrink: 0;
          margin-top: 1px;
        `}
      />
      <div
        css={`
          flex-grow: 1;
          margin-left: 12px;
          padding: 12px 12px;
          border-radius: 3px;
          transition: border 100ms ease-in-out;
          cursor: pointer;
          border: 1px ${theme.border} solid;
          &:hover {
            border-color: ${theme.accent.alpha(0.35)};
          }
        `}
      >
        <strong>{title}</strong>
        <div
          css={`
            margin-top: ${0.5 * GU}px;
          `}
        >
          {description}
        </div>
      </div>
    </label>
  )
})

RadioListItem.propTypes = {
  description: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.node.isRequired,
}

export default RadioListItem
