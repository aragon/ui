import React from 'react'
import PropTypes from 'prop-types'
import { Inside } from 'use-inside'
import { GU, RADIUS } from '../../style'
import { useTheme } from '../../theme/Theme'
import { useLayout } from '../Layout/Layout'

const BAR_PADDING = 2 * GU

function Bar({ children, primary, secondary, ...props }) {
  const theme = useTheme()
  const { layoutName } = useLayout()

  const fullScreen = layoutName === 'small'

  const content = children || (
    <div
      css={`
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
      `}
    >
      <div
        css={`
          display: flex;
          align-items: center;
          height: 100%;
          padding-left: ${BAR_PADDING}px;
        `}
      >
        <Inside name="Bar:primary">{primary}</Inside>
      </div>
      <div
        css={`
          display: flex;
          align-items: center;
          height: 100%;
          padding-right: ${BAR_PADDING}px;
        `}
      >
        <Inside name="Bar:secondary">{secondary}</Inside>
      </div>
    </div>
  )

  return (
    <Inside name="Bar">
      <div
        css={`
          border-radius: ${fullScreen ? 0 : RADIUS}px;
          background: ${theme.surface};
          border-style: solid;
          border-color: ${theme.border};
          border-width: ${fullScreen ? '1px 0' : '1px'};
          height: ${8 * GU}px;
          margin-bottom: ${2 * GU}px;
        `}
        {...props}
      >
        {content}
      </div>
    </Inside>
  )
}

Bar.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.node,
  secondary: PropTypes.node,
}

Bar.PADDING = BAR_PADDING

export default Bar
