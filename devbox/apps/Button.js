import React from 'react'
import styled from 'styled-components'
import {
  Box,
  IconCheck,
  IconCross,
  IconAdd,
  Button,
  ButtonText,
  Text,
  theme,
  GU,
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
        display: grid;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: ${3 * GU}px;
      `}
    >
      <Box
        css={`
          padding: ${3 * GU}px;
        `}
      >
        <div
          css={`
            display: grid;
            grid-template-columns: repeat(4, auto);
            grid-gap: ${3 * GU}px;
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
      <Box
        css={`
          padding: ${3 * GU}px;
        `}
      >
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            css={`
              display: flex;
              justify-content: space-between;
              width: 100%;
            `}
          >
            <ButtonText
              horizontalPadding="right"
              href={i === 1 ? 'http://example.com' : undefined}
            >
              No left padding
            </ButtonText>
            <ButtonText href={i === 1 ? 'http://example.com' : undefined}>
              {i === 1 ? 'Text button (link)' : 'Text button'}
            </ButtonText>
            <ButtonText
              horizontalPadding="left"
              href={i === 1 ? 'http://example.com' : undefined}
            >
              No right padding
            </ButtonText>
          </div>
        ))}
      </Box>
    </div>
  )
}

export default App
