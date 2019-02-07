import React from 'react'
import styled from 'styled-components'
import {
  AppBar,
  AppView,
  Badge,
  Button,
  NavigationBar,
  SidePanel,
  unselectable,
} from '@aragon/ui'

class App extends React.Component {
  state = {
    items: ['Level 1'],
  }
  addLevel(items) {
    const label = `Level ${items.length + 1}`
    return [
      ...items,
      items.length === 1 ? (
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '20px' }}>{label}</span>
          <Badge.App>ANT</Badge.App>
        </span>
      ) : (
        label
      ),
    ]
  }
  removeLevel(items) {
    return items.length > 1 ? items.slice(0, -1) : items
  }
  reset = () => {
    this.setState(({ items }) => ({ items: ['Level 1'] }))
  }
  forward = () => {
    this.setState(({ items }) => ({ items: this.addLevel(items) }))
  }
  backward = () => {
    this.setState(({ items }) => ({ items: this.removeLevel(items) }))
  }
  render() {
    const { items } = this.state
    return (
      <AppView
        appBar={
          <AppBar>
            <NavigationBar items={items} onBack={this.backward} />
          </AppBar>
        }
      >
        <Main>
          <div>
            <button onClick={this.backward} disabled={items.length < 2}>
              ⬅
            </button>
            <button onClick={this.reset} disabled={items.length < 2}>
              reset
            </button>
            <button onClick={this.forward}>➡</button>
          </div>
        </Main>
      </AppView>
    )
  }
}

const Main = styled.div`
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
