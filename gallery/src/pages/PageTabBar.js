import React from 'react'
import styled from 'styled-components'
import { TabBar } from '@aragon/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/TabBar/README.md'

const ITEMS = ['Strawberry', 'Banana', 'Apple', 'Cherry']

class PageTabBar extends React.Component {
  state = { selected: 0 }
  handleChange = selected => {
    this.setState({ selected })
  }
  render() {
    const { title } = this.props
    const { selected } = this.state
    return (
      <Page title={title} readme={readme}>
        <Page.Demo opaque>
          <div
            css={`
              display: flex;
              width: 100%;
              height: 200px;
              overflow-x: auto;
              justify-content: center;
              align-items: center;
            `}
          >
            <TabBar
              items={ITEMS}
              selected={selected}
              onChange={this.handleChange}
            />
          </div>
        </Page.Demo>
      </Page>
    )
  }
}

export default PageTabBar
