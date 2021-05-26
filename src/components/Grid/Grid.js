import React from 'react'
import PropTypes from 'prop-types'
import { Inside } from 'use-inside'
import { useLayout } from '../Layout/Layout'
import { GU, SPACING } from '../../style/constants'

function Grid({ children, layout, columns, rowHeight, gap, ...props }) {
  const { layoutName } = useLayout()
  const fullWidth = layoutName === 'small'
  const gridAutoRowValue =
    typeof rowHeight !== 'number' ? 'auto' : `${rowHeight}px`
  const currentGap = typeof gap !== 'undefined' ? gap : SPACING[layoutName]

  const gridPadding = {
    large: 12,
    medium: GU,
    small: GU,
  }

  const columnsWidth = {
    large: 7 * GU,
    medium: 6 * GU,
  }

  const template = layout
    ? `${
        fullWidth
          ? '1fr'
          : `repeat(${layoutName === 'medium' ? 12 : 16}, ${
              columnsWidth[layoutName]
            }px)`
      };`
    : `${fullWidth ? '1fr' : `repeat(${columns}, auto-fill)`};`

  return (
    <Inside name="Grid">
      <div
        css={`
          display: grid;
          grid-gap: ${currentGap}px;
          grid-template-columns: ${template};
          grid-auto-rows: ${gridAutoRowValue};
          padding: 0 ${gridPadding[layoutName]}px 0;
        `}
        {...props}
      >
        {children}
      </div>
    </Inside>
  )
}

Grid.propTypes = {
  children: PropTypes.node,
  layout: PropTypes.bool,
  columns: PropTypes.number,
  rowHeight: PropTypes.oneOfType([PropTypes.number]),
  gap: PropTypes.oneOfType([PropTypes.oneOf([undefined]), PropTypes.number]),
}

Grid.defaultProps = {
  layout: false,
  columns: 2,
}

export { Grid }
export default Grid
