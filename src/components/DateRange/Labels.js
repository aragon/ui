import React from 'react'
import PropTypes from 'prop-types'
import { IconCalendar } from '../../icons/components'
import { textStyle } from '../../style'
import { useTheme } from '../../theme'
import { unselectable } from '../../utils'

import { START_DATE, END_DATE, INPUT_HEIGHT_WITHOUT_BORDER } from './consts'

const Labels = ({ enabled, startText, endText, ...props }) => {
  const theme = useTheme()

  const hasNoStart = startText === START_DATE
  const hasNoEnd = endText === END_DATE
  const startColor = hasNoStart ? theme.hint : 'inherit'
  const endColor = hasNoEnd ? theme.hint : 'inherit'
  const dividerColor = hasNoStart || hasNoEnd ? theme.hint : 'inherit'
  return (
    <div
      css={`
        z-index: 2;
        cursor: pointer;
        background: ${theme.surface};
        ${unselectable}
      `}
      {...props}
    >
      <div
        css={`
          position: absolute;
          width: calc(100% - 37px);
          display: grid;
          grid-template-columns: 50% 2px 50%;
          align-items: center;
          height: ${INPUT_HEIGHT_WITHOUT_BORDER}px;
          overflow: hidden;
          ${textStyle('body2')}
        `}
      >
        <div
          css={`
            color: ${startColor};
            text-align: center;
          `}
        >
          {startText}
        </div>
        <div
          css={`
            color: ${dividerColor};
          `}
        >
          |
        </div>
        <div
          css={`
            color: ${endColor};
            text-align: center;
          `}
        >
          {endText}
        </div>
      </div>
      <div
        css={`
          position: absolute;
          right: 11px;
          display: flex;
          align-items: center;
          height: ${INPUT_HEIGHT_WITHOUT_BORDER}px;
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
