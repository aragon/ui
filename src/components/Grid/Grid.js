import React from 'react'
import PropTypes from 'prop-types'
import { Inside } from 'use-inside'
import { useLayout } from '../Layout/Layout'
import { GU, SPACING } from '../../style/constants'

function Grid({
  children,
  layout,
  columns,
  rowHeight,
  columnWidth,
  gap,
  gridPaddings,
  ...props
}) {
  const { layoutName } = useLayout()
  const fullWidth = layoutName === 'small'
  const gridAutoRowValue =
    typeof rowHeight !== 'number' ? 'auto' : `${rowHeight}`
  const currentGap = typeof gap !== 'undefined' ? gap : SPACING[layoutName]

  const currnetPadding =
    typeof gridPaddings !== 'undefined'
      ? gridPaddings
      : {
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
    : `${fullWidth ? '1fr' : `repeat(${columns}, ${columnWidth})`};`

  return (
    <Inside name="Grid">
      <div
        css={`
          display: grid;
          grid-gap: ${currentGap}px;
          grid-template-columns: ${template};
          grid-auto-rows: ${gridAutoRowValue};
          padding: 0 ${layout ? currnetPadding[layoutName] : 0}px 0;
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
  columns: PropTypes.string,
  rowHeight: PropTypes.string,
  columnWidth: PropTypes.string,
  gap: PropTypes.oneOfType([PropTypes.oneOf([undefined]), PropTypes.number]),
  gridPaddings: PropTypes.object,
}

Grid.defaultProps = {
  layout: false,
  columns: '2',
  columnWidth: 'auto-fill',
}

export { Grid }
export default Grid
