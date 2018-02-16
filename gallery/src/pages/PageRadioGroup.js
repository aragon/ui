import React from 'react'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/Radio/README.md'
import { RadioGroup } from '@aragon/ui'
import Container from '../components/Page/DemoContainer'

class PageRadioGroup extends React.Component {
  state = {
    selectedItem: 0,
  }
  handleChange = index => {
    this.setState({ selectedItem: index })
  }
  render() {
    const { title } = this.props
    const { selectedItem } = this.state
    return (
      <Page title={title} readme={readme}>
        <Page.Demo height={400}>
          <Container>
            <RadioGroup
              title="This is a radio group"
              description="Make a choice: "
              onChange={this.handleChange}
              items={[
                {
                  title: 'A choice',
                  description: 'A description of the choice',
                },
                {
                  title: 'Another choice',
                  description:
                    'A long, long description of the choice, which should wrap around if we give it a lot of text!',
                },
                {
                  title: 'A third choice',
                  description: 'Yet another choice!',
                },
              ]}
              selected={selectedItem}
            />
          </Container>
        </Page.Demo>
      </Page>
    )
  }
}

export default PageRadioGroup
