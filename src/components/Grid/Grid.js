import React from 'react'
import PropTypes from 'prop-types'
import { Inside } from 'use-inside'
import { useLayout } from '../Layout/Layout'
import { GU, SPACING } from '../../style/constants'

function Grid({ children, rowHeight, gap, ...props }) {
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

  return (
    <Inside name="Grid">
      <div
        css={`
          display: grid;
          grid-gap: ${currentGap}px;
          grid-template-columns: ${fullWidth
            ? '1fr'
            : `repeat(${layoutName === 'medium' ? 12 : 16}, ${
                columnsWidth[layoutName]
              }px)`};
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
  rowHeight: PropTypes.oneOfType([PropTypes.number]),
  gap: PropTypes.oneOfType([PropTypes.oneOf([undefined]), PropTypes.number]),
}

Grid.defaultProps = {
  // use 16 column as default
  columns: 16,
}

export { Grid }
export default Grid
