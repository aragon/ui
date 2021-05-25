import React from 'react'
import PropTypes from 'prop-types'
import { Inside } from 'use-inside'
import { useLayout } from '../Layout/Layout'

function GridItem({
  children,
  gridColumn,
  gridRow,
  alignVertical,
  alignHorizontal,
  ...props
}) {
  const { layoutName } = useLayout()
  const ignore = layoutName === 'small'
  return (
    <Inside name="GridItem">
      <div
        css={`
          grid-column: ${typeof gridColumn !== 'undefined' && !ignore
            ? gridColumn
            : 'auto'};
          grid-row: ${typeof gridRow !== 'undefined' && !ignore
            ? gridRow
            : 'auto'};
          align-self: ${typeof alignVertical !== 'undefined'
            ? alignVertical
            : 'auto'};
          justify-self: ${typeof alignHorizontal !== 'undefined'
            ? alignHorizontal
            : 'auto'};
        `}
        {...props}
      >
        {children}
      </div>
    </Inside>
  )
}

GridItem.propTypes = {
  children: PropTypes.node,
  gridColumn: PropTypes.string,
  gridRow: PropTypes.string,
  alignVertical: PropTypes.string,
  alignHorizontal: PropTypes.string,
}

export { GridItem }
export default GridItem
