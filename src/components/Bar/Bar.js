import React, { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { GU, RADIUS } from '../../style'
import { useTheme } from '../../theme/Theme'

const BAR_PADDING = 2 * GU

const BarContext = React.createContext(false)
const BarPrimaryContext = React.createContext(false)
const BarSecondaryContext = React.createContext(false)

// Returns true if a component is declared inside of the Bar tree
function useInsideBar() {
  const insideBar = useContext(BarContext)
  const insideBarPrimary = useContext(BarPrimaryContext)
  const insideBarSecondary = useContext(BarSecondaryContext)

  const values = useMemo(
    () => ({
      insideBar,
      insideBarPrimary,
      insideBarSecondary,
    }),
    [insideBar, insideBarPrimary, insideBarSecondary]
  )

  return values
}

function Bar({ children, primary, secondary }) {
  const theme = useTheme()

  const content = children || (
    <div
      css={`
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
      `}
    >
      <div
        css={`
          display: flex;
          align-items: center;
          height: 100%;
          padding-left: ${BAR_PADDING}px;
        `}
      >
        <BarPrimaryContext.Provider value={true}>
          {primary}
        </BarPrimaryContext.Provider>
      </div>
      <div
        css={`
          display: flex;
          align-items: center;
          height: 100%;
          padding-right: ${BAR_PADDING}px;
        `}
      >
        <BarSecondaryContext.Provider value={true}>
          {secondary}
        </BarSecondaryContext.Provider>
      </div>
    </div>
  )

  return (
    <BarContext.Provider value={true}>
      <div
        css={`
          padding-bottom: ${2 * GU}px;
        `}
      >
        <div
          css={`
            border-radius: ${RADIUS}px;
            background: ${theme.surface};
            border: 1px solid ${theme.border};
            height: ${8 * GU}px;
            overflow: hidden;
          `}
        >
          {content}
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

Bar.PADDING = BAR_PADDING

export { Bar, useInsideBar }
export default Bar
