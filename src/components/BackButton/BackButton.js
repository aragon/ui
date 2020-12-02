import React from 'react'
import PropTypes from 'prop-types'
import { useInside } from 'use-inside'
import { RADIUS, GU } from '../../style'
import { useTheme } from '../../theme'
import Bar from '../Bar/Bar'
import ButtonBase from '../ButtonBase/ButtonBase'
import { useLayout } from '../Layout/Layout'
import { IconArrowLeft } from '../../icons'

function BackButton({ label, ...props }) {
  const theme = useTheme()
  const [insideBarPrimary] = useInside('Bar:primary')

  const { layoutName } = useLayout()
  const compact = layoutName === 'small'
  const horizontalPadding = (compact ? 2 : 3) * GU

  return (
    <ButtonBase
      focusRingSpacing={1}
      css={`
        display: inline-flex;
        align-items: center;
        border-radius: 0 0 0 0;
        height: 100%;
        margin-left: ${insideBarPrimary ? -Bar.PADDING : 0}px;
        /* Adjust for icon's padding on the left */
        padding: 0 ${horizontalPadding}px 0 ${horizontalPadding - 4}px;
        border-right: 1px solid ${theme.border};
        color: ${theme.surfaceContentAuxiliar};
        background: ${theme.surfaceInteractive};
        &:active {
          background: ${theme.surfaceHighlight};
        }
      `}
      {...props}
    >
      <span
        css={`
          position: relative;
          top: 2px;
          color: ${theme.surfaceContentAuxiliar};
        `}
      >
        <IconArrowLeft />
      </span>
      <span
        css={`
          padding-left: ${1 * GU}px;
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

export default BackButton
