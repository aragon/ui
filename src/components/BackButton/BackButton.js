import React from 'react'
import PropTypes from 'prop-types'
import { RADIUS, GU } from '../../style'
import { useTheme } from '../../theme'
import { useInside } from '../../utils'
import { Bar } from '../Bar/Bar'
import { ButtonBase } from '../Button/ButtonBase'
import { IconArrowLeft } from '../../icons'

function BackButton({ label, ...props }) {
  const theme = useTheme()
  const [insideBarPrimary] = useInside('Bar:primary')

  return (
    <ButtonBase
      focusRingRadius={RADIUS}
      focusRingSpacing={1}
      css={`
        display: inline-flex;
        align-items: center;
        border-radius: ${RADIUS}px 0 0 ${RADIUS}px;
        height: 100%;
        margin-left: ${insideBarPrimary ? -Bar.PADDING : 0}px;
        padding: 0 ${3 * GU}px;
        border-right: 1px solid ${theme.border};
        color: ${theme.surfaceContent};
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
          color: ${theme.accent};
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

export { BackButton }
export default BackButton
