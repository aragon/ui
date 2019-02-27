import React, { useState } from 'react'
import styled from 'styled-components'
import {
  AppBar,
  AppView,
  Badge,
  Button,
  NavigationBar,
  IconMenu,
  ButtonIcon,
  SidePanel,
  unselectable,
} from '@aragon/ui'

const useItems = addItem => {
  const [items, setItems] = useState([addItem(1)])
  return [
    items,
    {
      reset() {
        setItems([addItem(1)])
      },
      forward() {
        setItems([...items, addItem(items.length + 1)])
      },
      backward() {
        if (items.length > 1) {
          setItems(items.slice(0, -1))
        }
      },
    },
  ]
}

const Item = ({ level }) => (
  <span css="display: flex; align-items: center ">
    {level === 1 && (
      <ButtonIcon label="Menu" css="margin: 0 10px 0 -10px">
        <IconMenu />
      </ButtonIcon>
    )}
    <span>Level {level}</span>
    {level === 2 && (
      <span css="margin-left: 20px">
        <Badge.App>ANT</Badge.App>
      </span>
    )}
  </span>
)

const App = () => {
  const [items, { back, forward, reset }] = useItems(level => (
    <Item level={level} />
  ))
  return (
    <AppView
      appBar={
        <AppBar>
          <NavigationBar items={items} onBack={back} />
        </AppBar>
      }
    >
      <Demo>
        <div>
          <button onClick={back} disabled={items.length < 2}>
            ⬅
          </button>
          <button onClick={reset} disabled={items.length < 2}>
            reset
          </button>
          <button onClick={forward}>➡</button>
        </div>
      </Demo>
    </AppView>
  )
}

const Demo = styled.div`
  ${unselectable};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;

  button {
    margin-right: 20px;
    color: #333;
    background: #eee;
    border-radius: 3px;
    padding: 10px 20px;
    cursor: pointer;
    border: 0;
    outline: 0;
  }

  button:active {
    background: #e5e5e5;
  }

  button:disabled {
    color: #999;
    border-color: #999;
  }
`

export default App
