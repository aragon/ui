import React, { useMemo } from 'react'
import { GU } from '../../utils/styles'
import { useViewport } from '../../providers/Viewport/Viewport'
import { BREAKPOINTS } from '../../utils/styles/breakpoint'

const SIZES = Object.entries(BREAKPOINTS)
  .filter(([name]) => name !== 'min')
  .sort((a, b) => a[1] - b[1])

// Minimum margin around a layouts
const MIN_MARGIN = 3 * GU

function getLayoutSize(parentWidth) {
  let index = SIZES.length
  while (index--) {
    if (parentWidth >= SIZES[index][1]) {
      return SIZES[index] - (index === 0 ? 0 : MIN_MARGIN)
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

  return { name, width }
}

function Layout({ children, parentWidth }) {
  const { width } = useLayout(parentWidth)

  return (
    <div
      css={`
        padding-top: ${2 * GU}px;
      `}
    >
      <div
        css={`
          margin: 0 auto;
        `}
        style={{ width: `${layoutWidth}px` }}
      >
        {children}
        <div>{layoutWidth}</div>
      </div>
    </div>
  )
}

export { useLayout, Layout }
