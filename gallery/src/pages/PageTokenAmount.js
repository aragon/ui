import React from 'react'
import { TokenAmount } from '@tecommons/ui'

import Page from 'comps/Page/Page'
import DemoContainer from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/TokenAmount/README.md'

const PageTokenAmount = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo opaque>
      <DemoContainer centered css="height: 200px">
        <TokenAmount
          address="0x6B175474E89094C44Da98b954EedeAC495271d0F"
          amount="1049228954700000000000"
          decimals={18}
          symbol="DAI"
        />
      </DemoContainer>
    </Page.Demo>
  </Page>
)

export default PageTokenAmount
