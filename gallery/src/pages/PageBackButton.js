import React, { useState } from 'react'
import { Bar, BackButton, GU } from '@aragon/ui'

import Page from 'comps/Page/Page'
import Container from '../components/Page/DemoContainer'
import readme from 'ui-src/components/BackButton/README.md'

function PageBackButton({ title }) {
  const [selected, setSelected] = useState(9)
  return (
    <Page title={title} readme={readme}>
      <Page.Demo opaque height={150}>
        <div
          css={`
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            width: 100vw;
          `}
        >
          <div
            css={`
              width: calc(100vw - ${6 * GU}px);
            `}
          >
            <Bar
              primary={<BackButton onClick={() => goBack()} />}
              css="margin: 0"
            />
          </div>
        </div>
      </Page.Demo>
    </Page>
  )
}

export default PageBackButton
