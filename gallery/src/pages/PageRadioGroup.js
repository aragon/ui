import React from 'react'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/Radio/RadioGroup.md'
import { RadioButton, RadioGroup } from '@aragon/ui'
import Container from '../components/Page/DemoContainer'

const RADIO_LABELS = ['First', 'Second', 'Third']

class PageRadioGroup extends React.Component {
  state = {
    value: '',
  }
  handleChange = event => {
    this.setState({ value: event.target.value })
  }
  render() {
    const { title } = this.props
    const { value } = this.state
    return (
      <Page title={title} readme={readme}>
        <Page.Demo height={100}>
          <Container>
            <RadioGroup name="group" onChange={this.handleChange}>
              {RADIO_LABELS.map((label, i) => {
                const radioValue = label.toLowerCase()
                return (
                  <Label key={i} label={label}>
                    <RadioButton
                      inline
                      checked={radioValue === value}
                      value={radioValue}
                    />
                  </Label>
                )
              })}
            </RadioGroup>
          </Container>
        </Page.Demo>
      </Page>
    )
  }
}

const Label = ({ children, label, ...props }) => (
  <label>
    {React.Children.map(children, child =>
      React.cloneElement(child, {
        ...props,
      })
    )}
    {label}
  </label>
)

export default PageRadioGroup
