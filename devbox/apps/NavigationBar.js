import React from 'react'
import styled from 'styled-components'
import {
  AppBar,
  AppView,
  AragonApp,
  Button,
  NavigationBar,
  SidePanel,
  unselectable,
} from '@aragon/ui'

class App extends React.Component {
  state = {
    items: ['Level 1'],
  }
  reset = () => {
    this.setState(({ items }) => ({
      items: ['Level 1'],
    }))
  }
  forward = () => {
    this.setState(({ items }) => ({
      items: [...items, 'Level ' + (items.length + 1)],
    }))
  }
  backward = () => {
    this.setState(({ items }) => ({
      items: items.length > 1 ? items.slice(0, -1) : items,
    }))
  }
  render() {
    const { items } = this.state
    return (
      <AragonApp publicUrl="/aragon-ui/">
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
      </AragonApp>
    )
  }
}

const Main = styled.div`
  ${unselectable};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;

  button {
    margin-right: 20px;
    border: 1px solid #666;
    color: #333;
    background: #eee;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }

  button:disabled {
    color: #999;
    border-color: #999;
  }
`

export default App
