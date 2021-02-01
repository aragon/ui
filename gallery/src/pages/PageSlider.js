import React, { Component } from 'react'
import { Slider } from '@tecommons/ui'

import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/Slider/Slider.md'

class PageSlider extends Component {
  state = {
    progress: 0,
  }
  render() {
    const { progress } = this.state
    return (
      <Page title={this.props.title} readme={readme}>
        <Page.Demo opaque>
          <Container>
            <Slider
              value={progress}
              onUpdate={value => {
                this.setState({ progress: value })
              }}
            />
          </Container>
        </Page.Demo>
      </Page>
    )
  }
}

export default PageSlider
