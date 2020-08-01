import React from 'react'
import { TokenAmount } from '@aragon/ui'

import Page from 'comps/Page/Page'
import DemoContainer from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/TokenAmount/README.md'

const PageTokenAmount = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo opaque>
      <DemoContainer>
        <div
          css={`
            display: inline-flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
            gap: 24px;
          `}
        >
          <TokenAmount
            address={'0x6B175474E89094C44Da98b954EedeAC495271d0F'}
            amount={'1049228954700000000000'}
            symbol={'DAI'}
          />
          <TokenAmount
            address={'0x6B175474E89094C44Da98b954EedeAC495271d0F'}
            amount={'100491340000000000000'}
            decimals={18}
            digits={3}
            size={'large'}
          />
          <TokenAmount
            address={'0x960b236A07cf122663c4303350609A66A7B288C0'}
            amount={'100490000000000000000'}
          />
        </div>
      </DemoContainer>
    </Page.Demo>
  </Page>
)

export default PageTokenAmount
