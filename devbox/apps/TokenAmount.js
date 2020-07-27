import React from 'react'
import { TokenAmount } from '@aragon/ui'

class App extends React.Component {
  render() {
    return (
      <div
        css={`
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100vh;
          width: 400px;
          margin: 0 auto;
        `}
      >
        {[
          {
            address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            amount: '10492200000000000000',
            decimals: 18,
            digits: 3,
          },
          {
            address: '0x960b236A07cf122663c4303350609A66A7B288C0',
            amount: '100490000000000000000',
          },
          {
            address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            amount: '100491340000000000000',
            decimals: 18,
            size: 'large',
          },
          {
            address: '0x60075474E89094C44Da98b954EedeAC495271d0F',
            amount: '100491340000000000000',
            decimals: 18,
            size: 'large',
            symbol: 'FKE',
          },
        ].map(({ width, ...props }, i) => (
          <div
            key={i}
            css={`
              display: flex;
              width: ${width || 'auto'};
              margin-top: 20px;
            `}
          >
            <TokenAmount {...props} />
          </div>
        ))}
      </div>
    )
  }
}

export default App
