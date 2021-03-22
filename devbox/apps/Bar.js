import React from 'react'
import { Bar, BackButton, Button } from '@tecommons/ui'

export default () => (
  <div
    css={`
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    `}
  >
    <Bar
      primary={<BackButton />}
      secondary={<Button label="Share" />}
      css={`
        width: 500px;
      `}
    />
  </div>
)
