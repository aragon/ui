import React from 'react'
import styled from 'styled-components'
import { ContentSwitcher, GU } from '@aragon/ui'

const ITEMS = ['One', 'Two', 'Three long', 'Four very very long', 'Five']
const ITEMS2 = ['One', 'Two']

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
        <div>
          {
            'custom padding passed: paddingSettings= {{ horizontal: 20, vertical: 20 }}'
          }
        </div>
        <ContentSwitcher
          onChange={() => {
            console.log('item 3 selected only')
          }}
          selected={5}
          items={[...ITEMS, 'different padding arround words']}
          disabled
          // paddingSettings={{ horizontal: 20, vertical: 20 }}
        />
        <div>{'wide width passed: wide'}</div>
        <ContentSwitcher
          onChange={() => {
            console.log('item 3 selected only')
          }}
          selected={5}
          items={[...ITEMS, 'Wide']}
          disabled
          wide
        />
        <div
          css={`
            display: grid;
            grid-template-columns: 30% 1fr;
            grid-gap: 20px;
            padding: 40px 0;
          `}
        >
          <ContentSwitcher
            title="Title"
            subtitle="Subtitle"
            onChange={() => {
              console.log('item 0 selected only')
            }}
            selected={0}
            items={ITEMS2}
            disabled
          />
        </div>
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
    return (
      <ContentSwitcher
        onChange={this.handleSelect}
        selected={index}
        items={items}
      />
    )
  }
}

export default App
