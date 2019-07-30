import React from 'react'
import PropTypes from 'prop-types'
import { RADIUS, GU } from '../../style'
import { useTheme } from '../../theme'
import { ButtonBase } from '../Button/ButtonBase'
import { Bar, useInsideBar } from '../Bar/Bar'
import { IconArrowLeft } from '../../icons'

function BackButton({ label, ...props }) {
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

export { BackButton }
export default BackButton
