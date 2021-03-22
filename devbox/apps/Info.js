import React from 'react'
import { Split, Box, Info, GU } from '@tecommons/ui'

const MODES = ['info', 'warning', 'error', 'description']

function InfoDemo({ content, title }) {
  return (
    <Box>
      {MODES.map((mode, i) => (
        <Info
          key={i}
          mode={mode}
          title={title ? mode : ''}
          css={`
            & + & {
              margin-top: ${2 * GU}px;
            }
          `}
        >
          {content}
        </Info>
      ))}
    </Box>
  )
}

export default ({ ...props }) => (
  <div
    {...props}
    css={`
      margin-top: ${6 * GU}px;
    `}
  >
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
  </div>
)
