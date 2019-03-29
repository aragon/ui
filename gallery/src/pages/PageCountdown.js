import React from 'react'
import styled from 'styled-components'
import { Countdown, Table, TableRow, TableHeader, TableCell } from '@aragon/ui'

import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/Countdown/README.md'

const DAY_IN_MS = 1000 * 60 * 60 * 24

const endDate = new Date(Date.now() + 5 * DAY_IN_MS)

const PageContextMenu = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo opaque>
      <div
        css={`
          display: flex;
          align-items: center;
          justify-content: center;
          height: 200px;
        `}
      >
        <Countdown end={endDate} />
      </div>
    </Page.Demo>
  </Page>
)

const Label = styled.span`
  margin-left: 15px;
  white-space: nowrap;
`

export default PageContextMenu
