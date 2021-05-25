import React from 'react'
import PropTypes from 'prop-types'
import { Inside } from 'use-inside'
import { useLayout } from '../Layout/Layout'
import { SPACING } from '../../style/constants'

function Grid({ children, columns, rowHeight, gap, ...props }) {
  const { layoutName } = useLayout()
  const fullWidth = layoutName === 'small'
  const gridAutoRowValue =
    typeof rowHeight !== 'number' ? 'auto' : `${rowHeight}px`
  const currentGap = typeof gap !== 'undefined' ? gap : SPACING[layoutName]

  return (
    <Inside name="Grid">
      <div
        css={`
          display: grid;
          grid-gap: ${currentGap}px;
          grid-template-columns: repeat(${fullWidth ? 1 : columns}, 1fr);
          grid-auto-rows: ${gridAutoRowValue};
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
  columns: PropTypes.number,
  rowHeight: PropTypes.oneOfType([PropTypes.number]),
  gap: PropTypes.oneOfType([PropTypes.oneOf([undefined]), PropTypes.number]),
}

Grid.defaultProps = {
  // use 16 column as default
  columns: 16,
}

export { Grid }
export default Grid
