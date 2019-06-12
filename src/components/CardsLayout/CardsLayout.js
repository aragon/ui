import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { GU } from '../../utils'
import { useLayout } from '../Layout/Layout'

const CardsLayoutContext = React.createContext(false)

// Returns true if a component is declared inside of the CardsLayout tree
function useInsideCardsLayout() {
  return useContext(CardsLayoutContext)
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

function CardsLayout({ children }) {
  const cols = useCols()

  return (
    <CardsLayoutContext.Provider value={true}>
      <div
        css={`
          display: grid;
          grid-gap: ${2 * GU}px;
          grid-auto-flow: row;
          align-items: start;
          grid-template-columns: repeat(${cols}, auto);
          grid-auto-rows: ${21 * GU}px;
          padding-bottom: ${3 * GU}px;
        `}
      >
        {children}
      </div>
    </CardsLayoutContext.Provider>
  )
}

CardsLayout.propTypes = {
  children: PropTypes.node,
}

export { CardsLayout, useInsideCardsLayout }
export default CardsLayout
