import React, { useState } from 'react'
import { Pagination } from '@tecommons/ui'

import Page from 'comps/Page/Page'
import Container from '../components/Page/DemoContainer'
import readme from 'ui-src/components/Pagination/README.md'

function PagePagination({ title }) {
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
          `}
        >
          <Pagination
            pages={20}
            selected={selected}
            onChange={setSelected}
            touchMode
          />
        </div>
      </Page.Demo>
    </Page>
  )
}

export default PagePagination
