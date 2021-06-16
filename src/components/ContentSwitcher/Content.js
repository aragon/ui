import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { GU, textStyle } from '../../style'
import { useTheme } from '../../theme'
import ButtonBase from '../ButtonBase/ButtonBase'

function Content({ paddingSettings, index, item, selected, onChange }) {
  const theme = useTheme()

  const handleClick = useCallback(() => {
    onChange(index)
  }, [index, onChange])

  return (
    <li css="list-style: none">
      <ButtonBase
        onClick={handleClick}
        css={`
          ${textStyle('title4')};
          border-radius: 10em;
          transition: background 1000ms ease-in-out;
          ${selected &&
            `background: linear-gradient(
            108deg,
            ${theme.primary} 1.46%,
            ${theme.primaryEnd} 100%
          );`}
          color: ${selected ? theme.primaryContent : theme.secondaryContent};
          padding: ${paddingSettings.vertical}px ${
          paddingSettings.horizontal
        }px ${paddingSettings.vertical}px ${paddingSettings.horizontal}px;
          margin: 2px;
          &:active {
            color: ${theme.primaryContent};
            background: linear-gradient(
              108deg,
              ${theme.primary} 1.46%,
              ${theme.primaryEnd} 100%
            );
          }
        `}
      >
        {item}
      </ButtonBase>
    </li>
  )
}

Content.propTypes = {
  paddingSettings: PropTypes.object,
  index: PropTypes.number.isRequired,
  item: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
}

Content.defaultProps = {
  paddingSettings: { horizontal: 2 * GU, vertical: GU },
}

export default Content
