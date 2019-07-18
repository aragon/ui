import React, { useContext, useMemo } from 'react'
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

const LayoutContext = React.createContext({})

function useLayout(parentWidth) {
  const { layoutWidth, layoutName } = useContext(LayoutContext)
  return {
    layoutName,
    layoutWidth,
    name: layoutName,
    width: layoutWidth,
  }
}

function Layout({ children, parentWidth }) {
  const { width: viewportWidth } = useViewport()

  // If the parent width is not passed, use the viewport width.
  const [layoutName, layoutWidth] = useMemo(
    () =>
      getLayoutSize(parentWidth === undefined ? viewportWidth : parentWidth),
    [viewportWidth, parentWidth]
  )

  return (
    <LayoutContext.Provider value={{ layoutWidth, layoutName }}>
      <div>
        <div
          css={`
            margin: 0 auto;
            padding-bottom: ${3 * GU}px;
            width: ${layoutName === 'small' ? 'auto' : `${layoutWidth}px`};
            min-width: ${BREAKPOINTS.min}px;
          `}
        >
          {children}
        </div>
      </div>
    </LayoutContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  parentWidth: PropTypes.number,
}

export { useLayout, Layout }
