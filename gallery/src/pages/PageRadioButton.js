import React from 'react'
import { RadioButton, RadioGroup } from '@aragon/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/Input/RadioButton.md'

class PageRadioButton extends React.Component {
  state = {
    value: '0',
  }
  handleChange = event => {
    alert(`Selected radio with value: ${event.target.value}`)
    this.setState({ value: event.target.value })
  }
  render() {
    const { title } = this.props
    const { value } = this.state
    return (
      <Page title={title} readme={readme}>
        <Page.Demo height={100}>
          <Container>
            <h1>Some radio buttons:</h1>
            <div>
              <RadioGroup>
                <RadioButton
                  checked={value === '0'}
                  onChange={this.handleChange}
                  value="0"
                />
                <RadioButton
                  checked={value === '1'}
                  onChange={this.handleChange}
                  value="1"
                />
                <RadioButton
                  checked={value === '2'}
                  onChange={this.handleChange}
                  value="2"
                />
              </RadioGroup>
            </div>
          </Container>
        </Page.Demo>
      </Page>
    )
  }
}

export default PageRadioButton
