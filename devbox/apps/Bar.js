import React from 'react'
import { Button, AppView, Bar, Tabs } from '@aragon/ui'

export default () => (
  <div
    css={`
      display: flex;
      align-items: center;
      height: 100vh;
    `}
  >
    <Bar>
      <Tabs items={['App permissions', 'System permissions']} />
    </Bar>
  </div>
)
