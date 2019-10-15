import React from 'react'
import PropTypes from 'prop-types'
import { IconCalendar } from '../../icons/components'
import { textStyle } from '../../style'
import { useTheme } from '../../theme'
import { unselectable } from '../../utils'

import { START_DATE, INPUT_HEIGHT_WITHOUT_BORDER } from './consts'

const Labels = ({ enabled, text }) => {
  const theme = useTheme()
  const color = text.indexOf(START_DATE) > -1 ? theme.hint : 'inherit'
  const [start, end] = text.split('|')
  return (
    <div
      css={`
        z-index: 2;
        cursor: pointer;
        background: ${theme.surface};
        ${unselectable}
      `}
    >
      <div
        css={`
          position: absolute;
          width: calc(100% - 28px);
          display: grid;
          grid-template-columns: 50% 2px 50%;
          align-items: center;
          height: ${INPUT_HEIGHT_WITHOUT_BORDER}px;
          overflow: hidden;
          color: ${color};
          ${textStyle('body2')}
        `}
      >
        <div css="text-align: center;">{start}</div>
        <div>|</div>
        <div css="text-align: center;">{end}</div>
      </div>
      <div
        css={`
          position: absolute;
          right: 4px;
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
  text: PropTypes.string.isRequired,
}

export default Labels
