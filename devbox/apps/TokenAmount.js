import React from 'react'
import { TokenAmount, GU } from '@aragon/ui'

function App() {
  return (
    <div
      css={`
        display: grid;
        place-items: center;
        height: 100vh;
      `}
    >
      <div
        css={`
          display: grid;
          gap: ${3 * GU}px;
        `}
      >
        <TokenAmount
          address="0x6B175474E89094C44Da98b954EedeAC495271d0F"
          amount="10492200000000000000"
          decimals={18}
          digits={3}
        />
        <TokenAmount
          address="0x960b236A07cf122663c4303350609A66A7B288C0"
          amount="100490000000000000000"
        />
        <TokenAmount
          address="0x6B175474E89094C44Da98b954EedeAC495271d0F"
          amount="100491340000000000000"
          decimals={18}
          size="large"
        />
        <TokenAmount
          address="0x60075474E89094C44Da98b954EedeAC495271d0F"
          amount="100491340000000000000"
          decimals={18}
          size="large"
          symbol="FKE"
        />
      </div>
    </div>
  )
}

export default App
