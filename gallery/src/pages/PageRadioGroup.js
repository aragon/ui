import React from 'react'
import styled from 'styled-components'

import Page from 'comps/Page/Page'

import readme from 'ui-src/components/Radio/RadioGroup.md'
import { Radio, RadioGroup } from '@tecommons/ui'
import Container from '../components/Page/DemoContainer'

class PageRadioGroup extends React.Component {
  state = {
    activeId: '1',
  }
  handleChange = activeId => {
    this.setState({ activeId })
  }
  render() {
    const { title } = this.props
    const { activeId } = this.state
    return (
      <Page title={title} readme={readme}>
        <Page.Demo opaque>
          <Container>
            <div>
              <h1 style={{ marginBottom: '20px' }}>
                Selected item: {activeId}
              </h1>
              <RadioGroup onChange={this.handleChange} selected={activeId}>
                {[...Array(3)].map((_, i) => (
                  <Item key={i}>
                    <Radio id={String(i + 1)} />
                    Item {i + 1}
                  </Item>
                ))}
              </RadioGroup>
            </div>
          </Container>
        </Page.Demo>
      </Page>
    )
  }
}

const Item = styled.label`
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
  color: #000;
  &:active {
    color: #666;
  }
`

export default PageRadioGroup
