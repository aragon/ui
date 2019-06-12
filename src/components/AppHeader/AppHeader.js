import React from 'react'
import PropTypes from 'prop-types'
import { GU } from '../../utils'

function AppHeader({ heading, action }) {
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
        <div>
          {typeof heading === 'string' ? (
            <h1 css="font-size: 26px">{heading}</h1>
          ) : (
            heading
          )}
        </div>
        <div>{action}</div>
      </div>
    </div>
  )
}

AppHeader.propTypes = {
  heading: PropTypes.node,
  action: PropTypes.node,
}

export default AppHeader
