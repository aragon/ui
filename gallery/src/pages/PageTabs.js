import React, { useState } from 'react'
import styled from 'styled-components'
import { Tabs } from '@tecommons/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/Tabs/README.md'

const ITEMS = ['Strawberry', 'Banana', 'Apple', 'Cherry']

const PageTabs = ({ title }) => {
  const [selected, setSelected] = useState(0)
  return (
    <Page title={title} readme={readme}>
      <Page.Demo opaque>
        <div
          css={`
            display: flex;
            width: 100%;
            height: 200px;
            overflow-x: auto;
            justify-content: center;
            align-items: center;
          `}
        >
          <Tabs items={ITEMS} selected={selected} onChange={setSelected} />
        </div>
      </Page.Demo>
    </Page>
  )
}

export default PageTabs
