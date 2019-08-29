import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { GU, RADIUS, textStyle } from '../../style'
import { useTheme } from '../../theme/Theme'
import { useLayout } from '../Layout/Layout'
import { useInside } from '../../utils'

function getHeadingPadding(padding, defaultPadding) {
  // only follow the shared padding if not 0
  if (typeof padding === 'number') {
    return padding === 0 ? defaultPadding : padding
  }

  // always follow the heading padding if set independently
  if (typeof padding === 'object' && typeof padding.heading === 'number') {
    return padding.heading
  }

  // 0 if heading is set to false independently
  if (typeof padding === 'object' && padding.heading === false) {
    return 0
  }

  // default padding in all the other cases
  return defaultPadding
}

function getContentPadding(padding, defaultPadding) {
  // always follow the shared padding if set
  if (typeof padding === 'number') {
    return padding
  }

  // use the default padding if set to true, 0 otherwise
  if (typeof padding === 'boolean') {
    return padding ? defaultPadding : 0
  }

  // always follow the content padding if set independently
  if (typeof padding === 'object' && typeof padding.content === 'number') {
    return padding.content
  }

  // always 0 if content is set to false independently
  if (typeof padding === 'object' && padding.content === false) {
    return 0
  }

  // default padding in all the other cases
  return defaultPadding
}

function Box({ heading, children, padding, ...props }) {
  const theme = useTheme()
  const [insideSplitPrimary] = useInside('Split:primary')
  const { layoutName } = useLayout()
  const fullWidth = layoutName === 'small'

  const [headingPadding, contentPadding] = useMemo(() => {
    const defaultPadding = (fullWidth ? 2 : insideSplitPrimary ? 5 : 3) * GU

    return [
      getHeadingPadding(padding, defaultPadding),
      getContentPadding(padding, defaultPadding),
    ]
  }, [fullWidth, insideSplitPrimary, padding])

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
                padding: 0 ${headingPadding}px;
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
    PropTypes.shape({
      heading: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
      content: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    }),
  ]),
}

Box.defaultProps = {
  padding: true,
}

export { Box }
export default Box
