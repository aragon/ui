import React from 'react'
import styled from 'styled-components'
import { IconCheck, IconCross, IconAdd, Button, Text, theme } from '@aragon/ui'

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
        overflow-y: scroll;
        overflow-x: hidden;
        background: hsl(200, 30%, 85%);
      `}
    >
      <div
        css={`
          min-height: 0;
          h1 {
            margin: 40px 0;
            text-align: center;
          }
          h2 {
            margin: 20px 0;
            text-align: center;
          }
          .emphasis {
            padding: 20px 0 80px;
          }
          .row {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
            > span {
              margin-left: 10px;
            }
          }
        `}
      >
        {null && (
          <h1>
            <Text size="xxlarge">Button variations</Text>
          </h1>
        )}
        <div css="padding: 40px 0">
          {SIZES.map(size =>
            MODES.map(mode => (
              <div key={size + mode} css="display: flex">
                {[...Array(3)].map((_, i) => (
                  <div key={size + mode + i} css="margin: 0 20px 20px 0">
                    <Button
                      mode={mode}
                      size={size}
                      label={mode}
                      icon={i > 0 ? getIcon(mode) : null}
                      iconOnly={i === 1}
                    />
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default App
