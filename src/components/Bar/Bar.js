import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { GU, RADIUS } from '../../utils'
import { useTheme } from '../../theme/Theme'

const BarContext = React.createContext(false)

// Returns true if a component is declared inside of the Bar tree
function useInsideBar() {
  return useContext(BarContext)
}

function Bar({ children, primary, secondary }) {
  const theme = useTheme()

  const content = children || (
    <div
      css={`
        display: flex;
        justify-content: space-between;
      `}
    >
      <div>{primary}</div>
      <div>{secondary}</div>
    </div>
  )

  return (
    <BarContext.Provider value={true}>
      <div
        css={`
          padding-bottom: ${3 * GU}px;
        `}
      >
        <div
          css={`
            // Having two containers with the same border radius is necessary
            // for components rendering on top of the Bar border, like TabBar.
            // overflow: hidden;
            border-radius: ${RADIUS}px;
          `}
        >
          <div
            css={`
              border-radius: ${RADIUS}px;
              background: ${theme.surface};
              border: 1px solid ${theme.border};
              height: ${8 * GU}px;
            `}
          >
            {content}
          </div>
        </div>
      </div>
    </BarContext.Provider>
  )
}

Bar.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.node,
  secondary: PropTypes.node,
}

export { Bar, useInsideBar }
export default Bar
