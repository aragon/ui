import React from 'react'
import PropTypes from 'prop-types'
import { GU } from '../../style'
import { useTheme } from '../../theme'

function Header({ primary, secondary, children }) {
  const theme = useTheme()
  return (
    <div
      css={`
        padding-top: ${3 * GU}px;
        padding-bottom: ${3 * GU}px;
      `}
    >
      <div
        css={`
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: ${5 * GU}px;
        `}
      >
        {children || (
          <>
            <div>
              {typeof primary === 'string' ? (
                <h1
                  css={`
                    font-size: 26px;
                    color: ${theme.content};
                  `}
                >
                  {primary}
                </h1>
              ) : (
                primary
              )}
            </div>
            <div>{secondary}</div>
          </>
        )}
      </div>
    </div>
  )
}

Header.propTypes = {
  primary: PropTypes.node,
  secondary: PropTypes.node,
  children: PropTypes.node,
}

export default Header
