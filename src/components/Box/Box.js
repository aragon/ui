import React from 'react'
import PropTypes from 'prop-types'
import { GU, RADIUS, textStyle } from '../../style'
import { useTheme } from '../../theme/Theme'
import { useLayout } from '../Layout/Layout'
import { useInside } from '../../utils'

// Padding values for the heading and the content.
function getPaddingValues(padding, { insideSplitPrimary, fullWidth }) {
  const defaultPadding = (fullWidth ? 2 : insideSplitPrimary ? 5 : 3) * GU

  // Separate values for the header and content
  if (Array.isArray(padding)) {
    return padding
  }

  // Default value if true, disable padding on the content otherwise
  if (typeof padding === 'boolean') {
    return [defaultPadding, padding ? defaultPadding : 0]
  }

  // The heading follows the content padding except when 0,
  // in which case it will follow the default value.
  return [padding === 0 ? defaultPadding : padding, padding]
}

function Box({ heading, children, padding, ...props }) {
  const theme = useTheme()
  const [insideSplitPrimary] = useInside('Split:primary')
  const { layoutName } = useLayout()
  const fullWidth = layoutName === 'small'

  const [headerPadding, contentPadding] = getPaddingValues(padding, {
    insideSplitPrimary,
    fullWidth,
  })

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
          {typeof heading !== 'string' ? (
            heading
          ) : (
            <h1
              css={`
                padding: 0 ${headerPadding}px;
                ${textStyle('label2')};
                color: ${theme.surfaceContentSecondary};
              `}
            >
              {heading}
            </h1>
          )}
        </div>
      )}
      <div
        css={`
          padding: ${contentPadding}px;
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
  padding: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
}

Box.defaultProps = {
  padding: true,
}

export { Box }
export default Box
