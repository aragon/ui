import React from 'react'
import styled from 'styled-components'
import { RadioButton, RadioGroup } from '@aragon/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/Input/RadioButton.md'

class PageRadioButton extends React.Component {
  state = {
    value: 0,
  }
  handleChange = event => {
    this.setState({ value: Number(event.target.value) })
  }
  render() {
    const { title } = this.props
    const { value } = this.state
    return (
      <Page title={title} readme={readme}>
        <Page.Demo opaque>
          <Container>
            <div>
              <h1 style={{ marginBottom: '20px' }}>
                Selected item: {Number(value) + 1}
              </h1>
              <div>
                {[...Array(3)].map((_, i) => (
                  <Item key={i}>
                    <RadioButton
                      checked={value === i}
                      onChange={this.handleChange}
                      value={i}
                    />
                    Item {i + 1}
                  </Item>
                ))}
              </div>
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

export default PageRadioButton
