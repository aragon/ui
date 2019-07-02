import React from 'react'
import PropTypes from 'prop-types'
import { RADIUS, GU } from '../../style'
import { useTheme } from '../../theme'
import { ButtonBase } from '../Button/ButtonBase'
import { Bar, useInsideBar } from '../Bar/Bar'

function BackButton({ label }) {
  const theme = useTheme()
  const { insideBarPrimary } = useInsideBar()
  return (
    <ButtonBase
      focusRingRadius={RADIUS}
      css={`
        border-radius: 0;
        height: 100%;
        margin-left: ${insideBarPrimary ? -Bar.PADDING : 0}px;
        padding: 0 ${3 * GU}px;
        border-right: 1px solid ${theme.border};
        background: ${theme.surfaceInteractive};
        &:active {
          background: ${theme.surfaceHighlight};
        }
      `}
    >
      <span
        css={`
          position: relative;
          top: 1px;
        `}
      >
        <Arrow color={theme.accent} />
      </span>
      <span
        css={`
          padding-left: ${1 * GU}px;
          color: ${theme.surfaceContent};
          font-size: 16px;
          font-weight: 600;
        `}
      >
        {label}
      </span>
    </ButtonBase>
  )
}

BackButton.propTypes = {
  label: PropTypes.string,
}

BackButton.defaultProps = {
  label: 'Back',
}

function Arrow({ color, ...props }) {
  return (
    <svg width={15} height={14} fill="none" {...props}>
      <path
        d="M7.47418 11.89L7.47416 11.8901C7.74229 12.1687 7.74411 12.6185 7.47288 12.8902C7.19413 13.17 6.75335 13.1699 6.47463 12.8901L1.10282 7.49629C0.832467 7.22484 0.832322 6.77477 1.10282 6.50371L7.47418 11.89ZM7.47418 11.89L7.4729 11.8888L3.2996 7.70621H13.5C13.8897 7.70621 14.2083 7.38572 14.2083 6.99539C14.2083 6.60321 13.8879 6.29325 13.5 6.29325H3.29928L7.47288 2.10258C7.74346 1.83153 7.74334 1.3814 7.47296 1.10991C7.19422 0.830029 6.75338 0.830029 6.47463 1.10991L1.1029 6.50363L7.47418 11.89Z"
        fill={color}
        stroke={color}
        strokeWidth={0.2}
      />
    </svg>
  )
}

export { BackButton }
export default BackButton
