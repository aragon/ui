import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import { RedrawFromDate } from '@aragon/ui'
import Container from '../components/Page/DemoContainer'

const redrawDemo = (date, label) => {
  return class extends React.Component {
    render() {
      return (
        <RedrawFromDate fromDate={date}>
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
                <span>{label}</span>
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
        </RedrawFromDate>
      )
    }
  }
}

const SECONDS = 1000
const MINUTES = 60 * SECONDS
const HOURS = 60 * MINUTES

const Demo1 = redrawDemo(new Date(Date.now() - 3 * HOURS), '3 hours')
const Demo2 = redrawDemo(new Date(Date.now() - 10 * MINUTES), '10 minutes')
const Demo3 = redrawDemo(new Date(Date.now() - 1 * MINUTES), '1 minute')

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
