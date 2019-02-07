import React from 'react'
import styled from 'styled-components'
import { TabBar } from '@aragon/ui'

const ITEMS = ['One', 'Two', 'Three', 'Four', 'Five']

class App extends React.Component {
  render() {
    return (
      <Main>
        <Container>
          {ITEMS.map((item, i) => (
            <div style={{ marginBottom: '20px' }}>
              <TabBarDemo items={ITEMS.slice(0, i + 1)} />
            </div>
          ))}
        </Container>
      </Main>
    )
  }
}

class TabBarDemo extends React.Component {
  state = {
    index: 0,
  }
  handleSelect = index => {
    this.setState({ index })
  }
  render() {
    const { index } = this.state
    const { items } = this.props
    return (
      <TabBar onSelect={this.handleSelect} selected={index} items={items} />
    )
  }
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  overflow-x: hidden;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export default App
