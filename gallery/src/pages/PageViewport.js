
import React from 'react'
import styled from 'styled-components'
import { Viewport, Text } from '@aragon/ui'
import Page from 'comps/Page/Page'
import readme from 'ui-src/providers/Viewport/README.md'

class PageViewport extends React.Component {

  render() {
    const { title } = this.props
    return (
      <Page title={title} readme={readme}>
        <Page.Demo>
          <Text>Resize the screen to see how the text changes.</Text>
          <Viewport>
            {({ within, below, above }) => (
              <div>
                {below('medium') && <div>small</div>}
                {within('medium', 'large') && <div>medium</div>}
                {above('large') && <div>large</div>}
              </div>
            )}
          </Viewport>
        </Page.Demo>
      </Page>
    )
  }
}

export default PageViewport
