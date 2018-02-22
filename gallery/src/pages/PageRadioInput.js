import React from 'react'
import { RadioInput, RadioGroup } from '@aragon/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/Input/RadioInput.md'

class PageRadioInput extends React.Component {
  state = {
    selected: 0,
  }
  handleChange = event => {
    alert(`Selected radio ${event.target.value}`)
  }
  handleSelect = selected => {
    this.setState({ selected })
  }
  render() {
    const { title } = this.props
    const { selected } = this.state
    return (
      <Page title={title} readme={readme}>
        <Page.Demo height={100}>
          <Container>
            <h1>Some radio buttons:</h1>
            <div>
              <RadioGroup>
                <RadioInput
                  checked={selected === 0}
                  onChange={this.handleChange}
                  onSelect={this.handleSelect}
                  value={0}
                />
                <RadioInput
                  checked={selected === 1}
                  onChange={this.handleChange}
                  onSelect={this.handleSelect}
                  value={1}
                />
                <RadioInput
                  checked={selected === 2}
                  onChange={this.handleChange}
                  onSelect={this.handleSelect}
                  value={2}
                />
              </RadioGroup>
            </div>
          </Container>
        </Page.Demo>
      </Page>
    )
  }
}

export default PageRadioInput
