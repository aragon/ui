import React, { useState } from 'react'
import styled from 'styled-components'
import {
  AppBar,
  AppView,
  ButtonIcon,
  Checkbox,
  Field,
  IconMenu,
  NavigationBar,
  SidePanel,
  Tag,
  unselectable,
} from '@tecommons/ui'

const useItems = () => {
  const [items, setItems] = useState([1])
  return [
    items,
    {
      reset() {
        setItems([1])
      },
      forward() {
        setItems([...items, items.length + 1])
      },
      back() {
        if (items.length > 1) {
          setItems(items.slice(0, -1))
        }
      },
    },
  ]
}

const MenuButton = () => (
  <ButtonIcon
    label="Menu"
    css={`
      width: auto;
      height: 100%;
      margin: 0 8px 0 -30px;
      padding: 0 8px 0 16px;
    `}
  >
    <IconMenu />
  </ButtonIcon>
)

const DemoBadge = () => (
  <span css="margin-left: 20px">
    <Tag mode="app">ANT</Tag>
  </span>
)

const Item = ({ showMenu, showBadge, level }) => (
  <span
    css={`
      display: flex;
      align-items: center;
      height: 100%;
    `}
  >
    {showMenu && <MenuButton />}
    <span>Level {level}</span>
    {showBadge && <DemoBadge />}
  </span>
)

const App = () => {
  const [items, { back, forward, reset }] = useItems()
  const [showMenu, setShowMenu] = useState(false)
  const [compactMode, setCompactMode] = useState(false)
  return (
    <AppView
      appBar={
        <AppBar>
          <NavigationBar
            items={items.map(level => (
              <Item
                level={level}
                showMenu={showMenu && level === 1}
                showBadge={level === 2}
              />
            ))}
            onBack={back}
            compact={compactMode}
          />
        </AppBar>
      }
    >
      <Demo>
        <div css="display: flex; flex-direction: column">
          <div>
            <Button onClick={back} disabled={items.length < 2}>
              ⬅
            </Button>
            <Button onClick={reset} disabled={items.length < 2}>
              reset
            </Button>
            <Button onClick={forward}>➡</Button>
          </div>
          <div css="align-self: flex-start;margin-top: 20px">
            <div>
              <label css="cursor: pointer">
                <Checkbox onChange={setShowMenu} checked={showMenu} />
                <span>Menu button</span>
              </label>
            </div>
            <div>
              <label css="cursor: pointer">
                <Checkbox onChange={setCompactMode} checked={compactMode} />
                <span>Compact mode</span>
              </label>
            </div>
          </div>
        </div>
      </Demo>
    </AppView>
  )
}

const Button = styled.button`
  margin-right: 20px;
  color: #333;
  background: #eee;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
  border: 0;
  outline: 0;
  &:active {
    background: #e5e5e5;
  }
  &:disabled {
    color: #999;
    border-color: #999;
  }
`

const Demo = styled.div`
  ${unselectable};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
`

export default App
