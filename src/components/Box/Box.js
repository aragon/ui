import React from 'react'
import PropTypes from 'prop-types'
import { GU, RADIUS, textStyle } from '../../style'
import { useTheme } from '../../theme/Theme'
import { useLayout } from '../Layout/Layout'

function getPaddingValue(padding) {
  if (typeof padding === 'boolean') {
    return padding ? 2 * GU : 0
  }
  return padding
}

function Box({ heading, children, padding, ...props }) {
  const theme = useTheme()
  const { layoutName } = useLayout()
  const fullWidth = layoutName === 'small'

  const paddingValue = getPaddingValue(padding)

  return (
    <div
      as={heading ? 'section' : 'div'}
      css={`
        position: relative;
        border-radius: ${fullWidth ? 0 : RADIUS}px;
        border-style: solid;
        border-color: ${theme.border};
        border-width: ${fullWidth ? '1px 0' : '1px'};
        background: ${theme.surface};
        color: ${theme.surfaceContent};
        & + & {
          margin-top: ${2 * GU}px;
        }
      `}
      {...props}
    >
      {heading && (
        <div
          css={`
            display: flex;
            align-items: center;
            height: ${4 * GU}px;
            border-bottom: 1px solid ${theme.border};
          `}
        >
          <HeaderContent heading={heading} padding={paddingValue} />
        </div>
      )}
      <div
        css={`
          padding: ${paddingValue}px;
        `}
      >
        <div>{children}</div>
      </div>
    </div>
  )
}

Box.propTypes = {
  heading: PropTypes.node,
  children: PropTypes.node,
  padding: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
}

Box.defaultProps = {
  padding: true,
}

function HeaderContent({ heading, padding }) {
  const theme = useTheme()

  if (!heading) {
    return null
  }

  if (typeof heading !== 'string') {
    return heading
  }

  return (
    <h1
      css={`
        padding-left: ${padding}px;
        color: ${theme.surfaceContentSecondary};
        ${textStyle('label2')};
      `}
    >
      {heading}
    </h1>
  )
}

HeaderContent.propTypes = {
  heading: PropTypes.node,
}

export { Box }
export default Box
