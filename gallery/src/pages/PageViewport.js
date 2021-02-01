import React from 'react'
import { Viewport } from '@tecommons/ui'
import Page from 'comps/Page/Page'
import readme from 'ui-src/providers/Viewport/README.md'

function PageViewport({ title }) {
  return (
    <Page title={title} readme={readme}>
      <div>
        <h2>Demonstration</h2>
        <p>
          <span>Current viewport size: </span>
          <Viewport>
            {({ within, below, above }) => (
              <strong>
                {below('medium') && <span>small</span>}
                {within('medium', 'large') && <span>medium</span>}
                {above('large') && <span>large</span>}
              </strong>
            )}
          </Viewport>
        </p>
      </div>
    </Page>
  )
}

export default PageViewport
