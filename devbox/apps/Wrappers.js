import React, { useState } from 'react'
import {
  AppHeader,
  AppView,
  Bar,
  Button,
  Card,
  CardsLayout,
  TabBar,
} from '@aragon/ui'

function Header1() {
  return (
    <AppHeader
      heading="Voting"
      action={<Button mode="strong" label="New vote" />}
    />
  )
}

function Bar1() {
  const [selected, setSelected] = useState(0)
  return (
    <Bar>
      <TabBar
        selected={selected}
        onChange={setSelected}
        items={['App permissions', 'System permissions']}
      />
    </Bar>
  )
}

function Cards1() {
  return (
    <CardsLayout>
      {[...Array(10)].map((v, i) => (
        <Card key={i} onClick={() => 1} />
      ))}
    </CardsLayout>
  )
}

export default () => {
  const item = useState()
  return (
    <AppView>
      <Header1 />
      <Bar1 />
      <Cards1 />
      <Bar1 />
    </AppView>
  )
}
