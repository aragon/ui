import React from 'react'
import PropTypes from 'prop-types'
import { Inside, useInside } from 'use-inside'
import { GU, textStyle } from '../../style'
import { useTheme } from '../../theme/Theme'
import { useLayout } from '../Layout/Layout'
import { warnOnce } from '../../utils'

function Box({ heading, headingColor, children, padding, ...props }) {
  const theme = useTheme()
  const [insideSplitPrimary] = useInside('Split:primary')
  const { layoutName } = useLayout()
  const fullWidth = layoutName === 'small'

  const defaultPadding = (fullWidth ? 2 : insideSplitPrimary ? 5 : 3) * GU

  if (padding === true) {
    warnOnce(
      'Box:padding:true',
      'Box: setting true on the padding prop is deprecated. Omit it, or set it to undefined instead.'
    )
    padding = defaultPadding
  }
  if (padding === false) {
    warnOnce(
      'Box:padding:false',
      'Box: setting false on the padding prop is deprecated. Use 0.'
    )
    padding = 0
  }

  const contentPadding = padding === undefined ? defaultPadding : padding
  const borderWidth =
    headingColor !== undefined ? '0px;' : fullWidth ? '1px 0' : '1px'
  const background = headingColor !== undefined ? headingColor : theme.surface
  return (
    <Inside name="Box">
      <div
        as={heading ? 'section' : 'div'}
        css={`
          position: relative;
          border-style: solid;
          border-color: ${theme.border};
          border-width: ${borderWidth};
          background: ${background};
          color: ${theme.surfaceContent};
          & + & {
            margin-top: ${2 * GU}px;
          }
        `}
        {...props}
      >
        {heading && (
          <h1
            css={`
              display: flex;
              align-items: center;
              height: ${4 * GU}px;
              padding: 0 ${defaultPadding}px;
              border-bottom: 1px solid ${theme.border};

              // We pass the text style and color to the heading children, so
              // that a node structure can inherit from it. Most components set
              // their color and text style, but it is something to be aware of.
              color: ${theme.surfaceContentSecondary};
              ${textStyle('label2')};
            `}
          >
            <Inside name="Box:heading">{heading}</Inside>
          </h1>
        )}
        <div
          css={`
            padding: ${contentPadding}px;
            background: ${background};
          `}
        >
          <div>
            <Inside name="Box:content">{children}</Inside>
          </div>
        </div>
      </div>
    </Inside>
  )
}

Box.propTypes = {
  heading: PropTypes.node,
  headingColor: PropTypes.node,
  children: PropTypes.node,
  padding: PropTypes.oneOfType([
    PropTypes.number,

    // deprecated
    PropTypes.bool,
  ]),
}

export default Box
