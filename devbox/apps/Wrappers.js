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

function Header1() {
  return (
    <Header
      primary="Voting"
      secondary={<Button mode="strong" label="New vote" icon={<IconPlus />} />}
    />
  )
}

function Bar1() {
  const [selected, setSelected] = useState(0)
  return (
    <Tabs
      selected={selected}
      onChange={setSelected}
      items={['App permissions', 'System permissions']}
    />
  )
}

function Bar2() {
  return (
    <Bar>
      <BackButton />
    </Bar>
  )
}

function Bar3() {
  return <Bar primary={<BackButton />} secondary={<Button label="Share" />} />
}

function Cards({ number = 10, interactive }) {
  const cardProps = interactive
    ? {
        onClick: () => {
          console.log('click click')
        },
      }
    : {}
  return (
    <CardLayout>
      {[...Array(number)].map((v, i) => (
        <Card key={i} {...cardProps} />
      ))}
    </CardLayout>
  )
}

function Cards1() {
  return <Cards />
}

function Cards2() {
  return <Cards interactive />
}

function Cards3() {
  return <Cards number={1} />
}

function Boxes1() {
  return (
    <div>
      <Box heading="Status">Some content</Box>
      <Box heading="Minimum approval %">Some content</Box>
      <Box heading="Something else">Some content</Box>
    </div>
  )
}

function Split1() {
  return (
    <Split
      primary={
        <Box
          css={`
            height: 400px;
          `}
        >
          {' '}
        </Box>
      }
      secondary={<Boxes1 />}
    />
  )
}

export default () => {
  const item = useState()
  const { name: layout } = useLayout()
  return (
    <>
      <ToggleThemeButton />
      <Header1 />
      <Bar1 />
      <Cards3 />
      <Bar1 />
      <Cards2 />
      <Bar2 />
      <Cards1 />
      <Bar3 />
      <Split1 />
      <Split1 />
    </>
  )
}
