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
        <Page.Demo height={350}>
          <Container>
            <div
              style={{
                display: 'flex',
                height: '100%',
                width: '100%',
                paddingTop: '40px',
                justifyContent: 'center',
              }}
            >
              <div>
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
              </div>
            </div>
          </Container>
        </Page.Demo>
      </Page>
    )
  }
}

export default PageDropDown
