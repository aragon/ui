import React from 'react'
import PropTypes from 'prop-types'
import { GU } from '../../style'
import { useLayout } from '../Layout/Layout'
import { Inside } from '../../utils/inside'

function CardLayout({ children, columnWidthMin, rowHeight, ...props }) {
  const { layoutName } = useLayout()
  const fullWidth = layoutName === 'small'
  const gridAutoRowValue = rowHeight === 'auto' ? rowHeight : `${rowHeight}px`

  return (
    <Inside name="CardLayout">
      <div
        css={`
          display: grid;
          grid-gap: ${2 * GU}px;
          grid-auto-flow: row;
          grid-template-columns: repeat(
            ${fullWidth ? 'auto-fit' : 'auto-fill'},
            minmax(${columnWidthMin}px, 1fr)
          );
          grid-auto-rows: ${gridAutoRowValue};
          align-items: start;
          padding: 0 ${fullWidth ? 2 * GU : 0}px ${3 * GU}px;
          margin: 0 auto;
        `}
        {...props}
      >
        {children}
      </div>
    </Inside>
  )
}

CardLayout.propTypes = {
  children: PropTypes.node,
  columnWidthMin: PropTypes.number,
  rowHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

CardLayout.defaultProps = {
  columnWidthMin: 21 * GU,
  rowHeight: 21 * GU,
}

export { CardLayout }
export default CardLayout
