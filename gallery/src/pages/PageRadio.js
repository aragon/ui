import React from 'react'
import styled from 'styled-components'
import { Radio, RadioGroup } from '@tecommons/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/Input/Radio.md'

class PageRadio extends React.Component {
  state = {
    activeId: '1',
    singleChecked: false,
  }
  handleChange = activeId => {
    this.setState({ activeId })
  }
  render() {
    const { title } = this.props
    const { activeId, singleChecked } = this.state
    return (
      <Page title={title} readme={readme}>
        <Page.Demo opaque>
          <Container>
            <div>
              <h1 style={{ marginBottom: '20px' }}>Single radio</h1>
              <label>
                <Radio
                  id="single"
                  checked={singleChecked}
                  onChange={id => {
                    console.log(
                      `${singleChecked ? 'Unchecked' : 'Checked'} ${id}`
                    )
                    this.setState({ singleChecked: !singleChecked })
                  }}
                />
                Click me
              </label>
            </div>
          </Container>
          <Container>
            <div>
              <h1 style={{ marginBottom: '20px' }}>
                RadioGroup - selected item: {activeId}
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

export default PageRadio
