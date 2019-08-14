import React, { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useViewport } from '../../providers/Viewport/Viewport'
import { BREAKPOINTS, GU } from '../../style'

function getSizes(breakpoints) {
  return Object.entries(breakpoints)
    .filter(([name]) => name !== 'min')
    .sort((a, b) => a[1] - b[1])
}

// Minimum margin around a layouts
const MIN_MARGIN = 3 * GU

function getLayoutSize(parentWidth, breakpoints) {
  const sizes = getSizes(breakpoints)

  let index = sizes.length
  while (index--) {
    if (parentWidth >= sizes[index][1]) {
      return [
        sizes[index][0],
        sizes[index][1] - (index === 0 ? 0 : MIN_MARGIN * 2),
      ]
    }
  }

  return sizes[0]
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

function Layout({ children, parentWidth, breakpoints, ...props }) {
  const { width: viewportWidth } = useViewport()

  const mergedBreakpoints = useMemo(
    () => ({ ...BREAKPOINTS, ...breakpoints }),
    [breakpoints]
  )

  // If the parent width is not passed, use the viewport width.
  const [layoutName, layoutWidth] = useMemo(
    () =>
      getLayoutSize(
        parentWidth === undefined ? viewportWidth : parentWidth,
        mergedBreakpoints
      ),
    [viewportWidth, parentWidth, mergedBreakpoints]
  )

  return (
    <LayoutContext.Provider value={{ layoutWidth, layoutName }}>
      <div
        {...props}
        css={`
          margin: 0 auto;
          padding-bottom: ${3 * GU}px;
          width: ${layoutName === 'small' ? 'auto' : `${layoutWidth}px`};
          min-width: ${mergedBreakpoints.min}px;
        `}
      >
        {children}
      </div>
    </LayoutContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  parentWidth: PropTypes.number,
  breakpoints: PropTypes.shape({
    min: PropTypes.number,
    small: PropTypes.number,
    medium: PropTypes.number,
    large: PropTypes.number,
  }),
}

Layout.defaultProps = {
  breakpoints: {},
}

export { useLayout, Layout }
