import React from 'react'
import PropTypes from 'prop-types'
import { GU, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { useLayout } from '../Layout/Layout'
import { Inside } from '../../utils'

function Header({ primary, secondary, children }) {
  const theme = useTheme()
  const { layoutName } = useLayout()
  const fullWidth = layoutName === 'small'

  return (
    <Inside name="Header">
      <div
        css={`
          padding: ${fullWidth ? 0 : 3 * GU}px 0;
          background: ${fullWidth ? theme.surface : 'none'};
          margin-bottom: ${fullWidth ? 2 * GU : 0}px;
          box-shadow: ${fullWidth ? '0px 2px 3px rgba(0, 0, 0, 0.05)' : 'none'};
        `}
      >
        <div
          css={`
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: ${fullWidth ? 8 * GU : 5 * GU}px;
            padding: 0 ${fullWidth && !children ? 2 * GU : 0}px;
          `}
        >
          {children || (
            <>
              <div>
                <Inside name="Header:primary">
                  {typeof primary === 'string' ? (
                    <h1
                      css={`
                        color: ${theme.content};
                        ${textStyle(fullWidth ? 'title3' : 'title2')};
                      `}
                    >
                      {primary}
                    </h1>
                  ) : (
                    primary
                  )}
                </Inside>
              </div>
              <div>
                <Inside name="Header:secondary">{secondary}</Inside>
              </div>
            </>
          )}
        </div>
      </div>
    </Inside>
  )
}

Header.propTypes = {
  primary: PropTypes.node,
  secondary: PropTypes.node,
  children: PropTypes.node,
}

export default Header
