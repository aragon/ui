import React from 'react'
import { Button, AppView, Bar, TabBar } from '@aragon/ui'

export default () => (
  <div
    css={`
      display: flex;
      align-items: center;
      height: 100vh;
    `}
  >
    <Bar>
      <TabBar items={['App permissions', 'System permissions']} />
    </Bar>
  </div>
)
