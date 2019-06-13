import React from 'react'
import { useLayout, GU } from '@aragon/ui'

function Split({ primary, secondary }) {
  const { name: layout } = useLayout()
  const small = layout === 'small'
  return (
    <div
      css={`
        display: ${small ? 'block' : 'flex'};
        padding-bottom: ${3 * GU}px;
      `}
    >
      <div
        css={`
          flex-grow: 1;
        `}
      >
        {primary}
      </div>
      <div
        css={`
          flex-shrink: 0;
          flex-grow: 0;
          width: ${small ? '100%' : `${33 * GU}px`};
          margin-left: ${small ? 0 : 2 * GU}px;
          padding-top: ${small ? 2 * GU : 0}px;
        `}
      >
        {secondary}
      </div>
    </div>
  )
}

export { Split }
export default Split
