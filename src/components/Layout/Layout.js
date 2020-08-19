import React, { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useViewport } from '../../providers/Viewport/Viewport'
import { BREAKPOINTS, GU } from '../../style'
import { cssPx } from '../../utils'

function getSizes(breakpoints) {
  return Object.entries(breakpoints)
    .filter(([name]) => name !== 'min')
    .sort((a, b) => a[1] - b[1])
}

const breakpointsType = PropTypes.shape({
  min: PropTypes.number,
  small: PropTypes.number,
  medium: PropTypes.number,
  large: PropTypes.number,
})

// Minimum margin around a layout
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

function useMergeBreakpoints(breakpoints) {
  const breakpointsAsString = JSON.stringify(breakpoints)

  // Only compute once by comparing values rather than object references in dependency array
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => ({ ...BREAKPOINTS, ...breakpoints }), [
    breakpointsAsString,
  ])
}

const LayoutContext = React.createContext({})

function useLayout() {
  const { layoutWidth, layoutName } = useContext(LayoutContext)
  return {
    layoutName,
    layoutWidth,

    // deprecated
    name: layoutName,
    width: layoutWidth,
  }
}

function Layout({
  breakpoints,
  children,
  paddingBottom,
  parentWidth,
  ...props
}) {
  const mergedBreakpoints = useMergeBreakpoints(breakpoints)

  return (
    <LayoutProvider parentWidth={parentWidth} breakpoints={breakpoints}>
      <LayoutWidthLimiter
        minWidth={mergedBreakpoints.min}
        paddingBottom={paddingBottom}
        {...props}
      >
        {children}
      </LayoutWidthLimiter>
    </LayoutProvider>
  )
}

Layout.propTypes = {
  breakpoints: breakpointsType,
  children: PropTypes.node,
  paddingBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  parentWidth: PropTypes.number,
}

Layout.defaultProps = {
  breakpoints: {},
  paddingBottom: 3 * GU,
}

// Can be used to build an alternative Layout component
Layout.__Context = LayoutContext

function LayoutProvider({ breakpoints, children, parentWidth }) {
  const { width: viewportWidth } = useViewport()
  const mergedBreakpoints = useMergeBreakpoints(breakpoints)

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
      {children}
    </LayoutContext.Provider>
  )
}

LayoutProvider.propTypes = {
  breakpoints: breakpointsType,
  children: PropTypes.node,
  parentWidth: PropTypes.number,
}

LayoutProvider.defaultProps = {
  breakpoints: {},
}

/* eslint-disable react/prop-types */
function LayoutWidthLimiter({ children, minWidth, paddingBottom, ...props }) {
  const { layoutName, layoutWidth } = useLayout()

  return (
    <div
      {...props}
      css={`
        width: ${layoutName === 'small' ? 'auto' : `${layoutWidth}px`};
        min-width: ${minWidth}px;
        margin: 0 auto;
        padding-bottom: ${cssPx(paddingBottom)};
      `}
    >
      {children}
    </div>
  )
}
/* eslint-enable react/prop-types */

export default Layout
export { useLayout, LayoutProvider }
