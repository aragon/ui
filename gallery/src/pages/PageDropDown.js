import React from 'react'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/DropDown/README.md'
import { DropDown } from '@tecommons/ui'
import Container from '../components/Page/DemoContainer'

class PageDropDown extends React.Component {
  state = {
    activeItem: -1,
  }
  handleChange = index => {
    this.setState({ activeItem: index })
  }
  render() {
    const { title } = this.props
    const { activeItem } = this.state

    return (
      <Page title={title} readme={readme}>
        <Page.Demo container={false}>
          <div>
            <DropDown
              active={activeItem}
              onChange={this.handleChange}
              selected={activeItem}
              items={[
                'Wandering Thunder',
                'Black Wildflower',
                'Ancient Paper',
                'Green Fire',
              ]}
            />
          </div>
        </Page.Demo>
      </Page>
    )
  }
}

export default PageDropDown
