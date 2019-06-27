import React from 'react'
import { DiscButton } from '@aragon/ui'

export default () => (
  <div
    css={`
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100vw;
    `}
  >
    <DiscButton description="Help">
      <span
        css={`
          position: relative;
          top: 1px;
          font-size: 22px;
        `}
      >
        ?
      </span>
    </DiscButton>
  </div>
)
