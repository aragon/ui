import React from 'react'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/DropDown/README.md'
import { DropDown } from '@aragon/ui'
import Container from '../components/Page/DemoContainer'

class PageDropDown extends React.Component {
  state = {
    activeItem: 0,
  }
  handleChange = index => {
    this.setState({ activeItem: index })
  }
  render() {
    const { title } = this.props
    const { activeItem } = this.state
    return (
      <Page title={title} readme={readme}>
        <Page.Demo height={300}>
          <Container>
            <DropDown
              active={activeItem}
              onChange={this.handleChange}
              items={[
                'Wandering Thunder',
                'Black Wildflower',
                'Ancient Paper',
                'Green Fire',
              ]}
            />
          </Container>
        </Page.Demo>
      </Page>
    )
  }
}

export default PageDropDown
