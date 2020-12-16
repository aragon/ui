import React, { useState } from 'react'
import {
  Header,
  Layout,
  Bar,
  Box,
  Button,
  BackButton,
  Card,
  CardLayout,
  Split,
  Tabs,
  Theme,
  useLayout,
  IconPlus,
} from '@tecommons/ui'
import { ToggleThemeButton } from '../components/current-theme'

function Cards({ count = 10, interactive }) {
  const cardProps = interactive ? { onClick: () => {} } : {}
  return (
    <CardLayout>
      {[...Array(count)].map((v, i) => (
        <Card key={i} {...cardProps} />
      ))}
    </CardLayout>
  )
}

export default () => {
  return (
    <>
      <Header
        primary="Voting"
        secondary={
          <Button mode="strong" label="New vote" icon={<IconPlus />} />
        }
      />
      <Bar />
      <Cards count={1} />
      <Cards count={2} />
      <Cards count={3} />
      <Cards count={4} />
      <Cards count={5} />
      <Cards count={10} />
    </>
  )
}
