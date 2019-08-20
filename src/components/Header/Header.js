import React from 'react'
import PropTypes from 'prop-types'
import { GU, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { useLayout } from '../Layout/Layout'
import { Inside } from '../../utils'

function Header({ primary, secondary, children, ...props }) {
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
        {...props}
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
              <Inside name="Header:primary">
                <div
                  css={`
                    display: flex;
                    min-width: 0;
                    flex-shrink: 1;
                    flex-grow: 1;
                    margin-right: ${secondary ? 2 * GU : 0}px;
                  `}
                >
                  {typeof primary === 'string' && primary ? (
                    <Header.Title>{primary}</Header.Title>
                  ) : (
                    primary
                  )}
                </div>
              </Inside>
              <Inside name="Header:secondary">
                <div
                  css={`
                    flex-shrink: 0;
                  `}
                >
                  {secondary}
                </div>
              </Inside>
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

Header.Title = function HeaderTitle({ children, ...props }) {
  const theme = useTheme()
  const { layoutName } = useLayout()
  const fullWidth = layoutName === 'small'
  return (
    <h1
      css={`
        color: ${theme.content};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        ${textStyle(fullWidth ? 'title3' : 'title2')};
      `}
      {...props}
    >
      {children}
    </h1>
  )
}

Header.Title.propTypes = {
  children: PropTypes.node,
}

export default Header
