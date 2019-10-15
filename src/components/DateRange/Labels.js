import React from 'react'
import PropTypes from 'prop-types'
import { IconCalendar } from '../../icons/components'
import { textStyle } from '../../style'
import { useTheme } from '../../theme'
import { unselectable } from '../../utils'

import { START_DATE, END_DATE } from './consts'

const Labels = ({ enabled, startText, endText, ...props }) => {
  const theme = useTheme()

  const hasNoStart = startText === START_DATE
  const hasNoEnd = endText === END_DATE
  const startColor = hasNoStart ? theme.hint : 'inherit'
  const endColor = hasNoEnd ? theme.hint : 'inherit'
  return (
    <div
      css={`
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 7px 6px;
        cursor: pointer;
        ${unselectable}
      `}
      {...props}
    >
      <div
        css={`
          display: flex;
          flex: 1;
          justify-content: space-around;
          align-items: center;
        `}
      >
        <div
          css={`
            color: ${startColor};
            text-align: center;
            ${textStyle(hasNoStart ? 'body2' : 'body3')}
          `}
        >
          {startText}
        </div>
        <div
          css={`
            color: ${theme.hint.alpha(0.3)};
            font-size: 13px;
          `}
        >
          |
        </div>
        <div
          css={`
            color: ${endColor};
            text-align: center;
            ${textStyle(hasNoEnd ? 'body2' : 'body3')}
          `}
        >
          {endText}
        </div>
      </div>
      <div
        css={`
          display: flex;
          padding: 0 4px 0 10px;
        `}
      >
        <IconCalendar
          css={`
            color: ${enabled ? theme.accent : theme.surfaceIcon};
          `}
        />
      </div>
    </div>
  )
}

Labels.propTypes = {
  enabled: PropTypes.bool,
  startText: PropTypes.string.isRequired,
  endText: PropTypes.string.isRequired,
}

export default Labels
