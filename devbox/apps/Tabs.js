import React from 'react'
import styled from 'styled-components'
import { Tabs, GU } from '@tecommons/ui'

const ITEMS = ['One', 'Two', 'Three', 'Four', 'Five']

class App extends React.Component {
  render() {
    return (
      <div
        css={`
          height: 100vh;
          padding-top: ${3 * GU}px;
        `}
      >
        {ITEMS.map((item, i) => (
          <div
            key={i}
            css={`
              margin-bottom: ${3 * GU}px;
            `}
          >
            <TabsDemo items={ITEMS.slice(0, i + 1)} />
          </div>
        ))}
      </div>
    )
  }
}

class TabsDemo extends React.Component {
  state = {
    index: 0,
  }
  handleSelect = index => {
    this.setState({ index })
  }
  render() {
    const { index } = this.state
    const { items } = this.props
    return <Tabs onChange={this.handleSelect} selected={index} items={items} />
  }
}

export default App
