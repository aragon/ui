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
    items: ['Surveys'],
  }
  forward = () => {
    this.setState(({ items }) => ({
      items: [...items, 'Survey Details'],
    }))
  }
  backward = () => {
    this.setState(({ items }) => ({
      items: items.length > 1 ? items.slice(0, -1) : items,
    }))
  }
  render() {
    return (
      <AragonApp publicUrl="/aragon-ui/">
        <AppView
          appBar={
            <AppBar>
              <NavigationBar items={this.state.items} onBack={this.backward} />
            </AppBar>
          }
        >
          <Main>
            <div>
              <button onClick={this.backward}>⬅</button>
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
    border: 2px solid #789;
    color: #789;
    background: #eee;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }
`

export default App
