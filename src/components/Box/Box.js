import React from 'react'
import PropTypes from 'prop-types'
import { GU, RADIUS } from '../../utils'
import { useTheme } from '../../theme/Theme'

function Box({ heading, children, padding, ...props }) {
  const theme = useTheme()

  return (
    <section
      css={`
        border-radius: ${RADIUS}px;
        border: 1px solid ${theme.border};
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
          <HeaderContent heading={heading} />
        </div>
      )}
      <div
        css={`
          padding: ${padding ? 2 * GU : 0}px;
        `}
      >
        <div>{children}</div>
      </div>
    </section>
  )
}

Box.propTypes = {
  heading: PropTypes.node,
  children: PropTypes.node,
  padding: PropTypes.bool,
}

Box.defaultProps = {
  padding: true,
}

function HeaderContent({ heading }) {
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
        padding-left: ${2 * GU}px;
        font-size: 12px;
        text-transform: uppercase;
        color: ${theme.surfaceContentSecondary};
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
