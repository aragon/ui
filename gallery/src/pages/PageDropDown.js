import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from '@aragon/ui/components/DropDown/README.md'
import { DropDown } from '@aragon/ui'

const Container = styled.div`
  display: flex;
  max-width: 800px;
  & > div {
    margin-left: 20px;
  }
  & > div:first-child {
    margin: 0;
  }
`

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
        <Page.Demo>
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
