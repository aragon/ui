import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useViewport } from '../../providers/Viewport/Viewport'
import { BREAKPOINTS, GU } from '../../style'

const SIZES = Object.entries(BREAKPOINTS)
  .filter(([name]) => name !== 'min')
  .sort((a, b) => a[1] - b[1])

// Minimum margin around a layouts
const MIN_MARGIN = 3 * GU

function getLayoutSize(parentWidth) {
  let index = SIZES.length
  while (index--) {
    if (parentWidth >= SIZES[index][1]) {
      return [
        SIZES[index][0],
        SIZES[index][1] - (index === 0 ? 0 : MIN_MARGIN * 2),
      ]
    }
  }
  return SIZES[0]
}

function useLayout(parentWidth) {
  const { width: viewportWidth } = useViewport()

  // If the parent width is not passed, use the viewport width.
  const [name, width] = useMemo(
    () =>
      getLayoutSize(parentWidth === undefined ? viewportWidth : parentWidth),
    [viewportWidth, parentWidth]
  )

  return { name, width, layoutName: name }
}

function Layout({ children, parentWidth }) {
  const { layoutName, width } = useLayout(parentWidth)
  const cssWidth = layoutName === 'small' ? 'auto' : `${width}px`

  return (
    <div>
      <div
        css={`
          margin: 0 auto;
          padding-bottom: ${3 * GU}px;
          width: ${cssWidth};
        `}
      >
        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  parentWidth: PropTypes.number,
}

export { useLayout, Layout }
