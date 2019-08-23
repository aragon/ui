import React from 'react'
import PropTypes from 'prop-types'
import { useLayout } from '../Layout/Layout'
import { GU } from '../../style'
import { Inside } from '../../utils'

function Split({ primary, secondary }) {
  const { name: layout } = useLayout()
  const oneColumn = layout === 'small' || layout === 'medium'
  return (
    <Inside name="Split">
      <div
        css={`
          display: ${oneColumn ? 'block' : 'flex'};
          padding-bottom: ${3 * GU}px;
          width: 100%;
        `}
      >
        <Inside name="Split:primary">
          <div css="flex-grow: 1">{primary}</div>
        </Inside>
        <Inside name="Split:secondary">
          <div
            css={`
              flex-shrink: 0;
              flex-grow: 0;
              width: ${oneColumn ? '100%' : `${33 * GU}px`};
              margin-left: ${oneColumn ? 0 : 2 * GU}px;
              padding-top: ${oneColumn ? 2 * GU : 0}px;
            `}
          >
            {secondary}
          </div>
        </Inside>
      </div>
    </Inside>
  )
}

Split.propTypes = {
  primary: PropTypes.node,
  secondary: PropTypes.node,
}

export { Split }
export default Split
