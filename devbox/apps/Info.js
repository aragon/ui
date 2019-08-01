import React from 'react'
import { Box, Info } from '@aragon/ui'

export default () => (
  <div
    css={`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
  >
    <Box
      css={`
        margin-top: 24px;
        flex-grow: 2;
      `}
    >
      {[{}, { title: 'My title' }, { mode: 'warning' }, { mode: 'error' }].map(
        (props, i) => (
          <Info
            key={i}
            {...props}
            css={`
              & + & {
                margin-top: 16px;
              }
            `}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Info>
        )
      )}
    </Box>
  </div>
)
