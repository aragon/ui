import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import { Redraw } from '@aragon/ui'
import Container from '../components/Page/DemoContainer'

const redrawDemo = interval => {
  return class extends React.Component {
    render() {
      return (
        <Redraw interval={interval}>
          {() => {
            const color = Math.floor(Math.random() * 0xffff).toString(16)
            if (!this.count) this.count = 0
            return (
              <span
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '200px',
                  height: '100px',
                  marginRight: '10px',
                  background: `#${color}dd22`,
                  fontSize: '13px',
                }}
              >
                <span>redraw every: {interval}ms</span>
                <span
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    fontSize: '11px',
                  }}
                >
                  render count: {++this.count}
                </span>
              </span>
            )
          }}
        </Redraw>
      )
    }
  }
}

const Demo1 = redrawDemo(500)
const Demo2 = redrawDemo(1000)
const Demo3 = redrawDemo(2000)

const PageTable = ({ title }) => (
  <Page title={title} readme={''}>
    <Page.Demo opaque>
      <Container>
        <Demo1 />
        <Demo2 />
        <Demo3 />
      </Container>
    </Page.Demo>
  </Page>
)

export default PageTable
