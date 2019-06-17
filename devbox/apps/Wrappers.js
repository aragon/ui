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
  TabBar,
  Theme,
  useLayout,
} from '@aragon/ui'
import ToggleTheme from '../components/ToggleTheme'

function Header1() {
  return (
    <Header
      primary="Voting"
      secondary={<Button mode="strong" label="New vote" />}
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

function Bar4() {
  const [selected, setSelected] = useState(0)
  return (
    <Bar
      primary={
        <TabBar
          selected={selected}
          onChange={setSelected}
          items={['App permissions', 'System permissions']}
        />
      }
      secondary={
        <TabBar
          selected={selected}
          onChange={setSelected}
          items={['App permissions', 'System permissions']}
        />
      }
    />
  )
}

function Cards1({ interactive }) {
  const cardProps = interactive ? { onClick: () => {} } : {}
  return (
    <CardLayout>
      {[...Array(10)].map((v, i) => (
        <Card key={i} {...cardProps} />
      ))}
    </CardLayout>
  )
}

function Cards2() {
  return <Cards1 interactive />
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
    <ToggleTheme>
      <Header1 />
      <Bar2 />
      <Cards2 />
      <Bar1 />
      <Cards1 />
      <Bar3 />
      <Split1 />
      <Bar4 />
      <Split1 />
    </ToggleTheme>
  )
}
