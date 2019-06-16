import React from 'react'
import { Button, AppView, Bar, TabBar } from '@aragon/ui'

export default () => (
  <AppView>
    <Bar>
      <TabBar items={['App permissions', 'System permissions']} />
    </Bar>
  </AppView>
)
