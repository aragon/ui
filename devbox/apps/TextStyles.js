import React from 'react'
import { Box, textStyle, useLayout, GU, TEXT_STYLES } from '@tecommons/ui'

function App({ theme, ...props }) {
  const { name } = useLayout()

  return (
    <div
      css={`
        display: ${name === 'small' ? 'block' : 'flex'};
        justify-content: space-between;
      `}
    >
      <div
        css={`
          width: 100%;
          padding: ${8 * GU}px 0;
        `}
        {...props}
      >
        <h1
          css={`
            font-size: 40px;
            margin-bottom: ${4 * GU}px;
          `}
        >
          Text Styles
        </h1>
        <Box>
          {Object.keys(TEXT_STYLES).map(name => (
            <div
              css={`
                ${textStyle(name)};
                margin: 20px 0;
              `}
            >
              {name[0].toUpperCase() + name.slice(1, -1) + ' ' + name.slice(-1)}
            </div>
          ))}
        </Box>
      </div>
    </div>
  )
}

export default App
