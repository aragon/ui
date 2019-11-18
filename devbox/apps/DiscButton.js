import React from 'react'
import { DiscButton } from '@aragon/ui'
import { Center } from '../components/Center'

export default () => (
  <Center>
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
  </Center>
)
