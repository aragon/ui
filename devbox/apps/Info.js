import React from 'react'
import { Split, Box, Info } from '@aragon/ui'

const MODES = ['info', 'warning', 'error', 'description']

function InfoDemo({ content, title = '' }) {
  return (
    <Box
      css={`
        margin-top: 24px;
        flex-grow: 2;
      `}
    >
      {MODES.map((mode, i) => (
        <Info
          key={i}
          mode={mode}
          title={title}
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
          sed diam voluptua.
        "
      />
    }
    secondary={
      <InfoDemo
        title="Lorem ipsum dolor sit amet"
        content="
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, nonumy
          eirmod tempor.
        "
      />
    }
  />
)
