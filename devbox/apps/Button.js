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
} from '@tecommons/ui'

const MODES = ['normal', 'strong', 'positive', 'negative']
const SIZES = ['medium', 'small', 'mini']

function getIcon(mode) {
  if (mode === 'negative') {
    return <IconCross />
  }
  if (mode === 'positive') {
    return <IconCheck />
  }
  return <IconAdd />
}

function App({ onlyBoxes }) {
  return (
    <div
      css={`
        ${onlyBoxes
          ? ''
          : `
            display: grid;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: ${3 * GU}px 0 0;
          `}
      `}
    >
      {SIZES.map(size => (
        <Box heading={`Button (${size})`} key={size}>
          <div
            css={`
              display: grid;
              grid-template-columns: repeat(4, auto);
              grid-gap: ${3 * GU}px;
            `}
          >
            {MODES.map(mode =>
              [...Array(4)].map((_, i) => (
                <div key={size + mode + i}>
                  <Button
                    mode={mode}
                    size={size}
                    label={mode[0].toUpperCase() + mode.slice(1)}
                    icon={getIcon(mode)}
                    display={i === 1 ? 'icon' : i === 0 ? 'all' : 'label'}
                    disabled={i === 3}
                  />
                </div>
              ))
            )}
          </div>
        </Box>
      ))}
      <Box heading="ButtonText">
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
