import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { GU } from '../../style'
import { useLayout } from '../Layout/Layout'

const CardLayoutContext = React.createContext(false)

// Returns true if a component is declared inside of the CardLayout tree
function useInsideCardLayout() {
  return useContext(CardLayoutContext)
}

function CardLayout({ children, columnWidthMin, rowHeight, ...props }) {
  const { layoutName, width } = useLayout()
  const fullWidth = layoutName === 'small'

  return (
    <CardLayoutContext.Provider value={true}>
      <div
        css={`
          display: grid;
          grid-gap: ${2 * GU}px;
          grid-auto-flow: row;
          align-items: start;
          grid-template-columns: repeat(
            auto-fit,
            minmax(${columnWidthMin}px, 1fr)
          );
          grid-auto-rows: ${rowHeight}px;
          padding: 0 ${fullWidth ? 2 * GU : 0}px ${2 * GU}px;
          margin: 0 auto;
        `}
        {...props}
      >
        {children}
      </div>
    </CardLayoutContext.Provider>
  )
}

CardLayout.propTypes = {
  children: PropTypes.node,
  columnWidthMin: PropTypes.number,
  rowHeight: PropTypes.number,
}

CardLayout.defaultProps = {
  columnWidthMin: 21 * GU,
  rowHeight: 21 * GU,
}

export { CardLayout, useInsideCardLayout }
export default CardLayout
