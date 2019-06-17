import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { GU } from '../../utils'
import { useLayout } from '../Layout/Layout'

const CardLayoutContext = React.createContext(false)

// Returns true if a component is declared inside of the CardLayout tree
function useInsideCardLayout() {
  return useContext(CardLayoutContext)
}

function useCols() {
  const { name } = useLayout()
  if (name === 'large') {
    return 6
  }
  if (name === 'medium') {
    return 4
  }
  return 2
}

function CardLayout({ rowHeight, children }) {
  const cols = useCols()

  return (
    <CardLayoutContext.Provider value={true}>
      <div
        css={`
          display: grid;
          grid-gap: ${2 * GU}px;
          grid-auto-flow: row;
          align-items: start;
          grid-template-columns: repeat(${cols}, auto);
          grid-auto-rows: ${rowHeight}px;
          padding-bottom: ${3 * GU}px;
        `}
      >
        {children}
      </div>
    </CardLayoutContext.Provider>
  )
}

CardLayout.propTypes = {
  children: PropTypes.node,
  rowHeight: PropTypes.number,
}

CardLayout.defaultProps = {
  rowHeight: 21 * GU,
}

export { CardLayout, useInsideCardLayout }
export default CardLayout
