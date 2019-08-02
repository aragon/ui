import React from 'react'
import styled from 'styled-components'
import {
  Box,
  IconCheck,
  IconCross,
  IconAdd,
  Button,
  Text,
  theme,
} from '@aragon/ui'

const MODES = ['normal', 'strong', 'positive', 'negative']
const SIZES = ['normal', 'small']

function getIcon(mode) {
  if (mode === 'negative') {
    return <IconCross />
  }
  if (mode === 'positive') {
    return <IconCheck />
  }
  return <IconAdd />
}

function App() {
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `}
    >
      <Box css="padding: 24px">
        <div
          css={`
            display: grid;
            grid-template-columns: repeat(4, auto);
            grid-gap: 24px;
          `}
        >
          {SIZES.map(size =>
            MODES.map(mode =>
              [...Array(4)].map((_, i) => (
                <Button
                  key={size + mode + i}
                  mode={mode}
                  size={size}
                  label={mode[0].toUpperCase() + mode.slice(1)}
                  icon={getIcon(mode)}
                  display={i === 1 ? 'icon' : i === 0 ? 'all' : 'label'}
                  disabled={i === 3}
                />
              ))
            )
          )}
        </div>
      </Box>
    </div>
  )
}

export default App
