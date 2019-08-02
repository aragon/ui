import React from 'react'
import { Split, Box, Info } from '@aragon/ui'

const MODES = ['info', 'warning', 'error', 'description']

function InfoDemo({ content, title }) {
  return (
    <Box css="margin-top: 48px">
      {MODES.map((mode, i) => (
        <Info
          key={i}
          mode={mode}
          title={title ? mode : ''}
          css={`
            & + & {
              margin-top: 16px;
            }
          `}
        >
          {content}
        </Info>
      ))}
    </Box>
  )
}

export default () => (
  <Split
    primary={
      <InfoDemo
        content="
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua, consetetur sadipscing elitr et dolore magna
          aliquyam erat aliquyam consetetur sadipscing tempor magna
          aliquyam erat invidunt.
        "
      />
    }
    secondary={
      <InfoDemo
        title
        content="
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, nonumy
          eirmod tempor.
        "
      />
    }
  />
)
