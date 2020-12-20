import React from 'react'
import { TokenBadge } from '@tecommons/ui'

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
            address: '0x0000000000000000000000000000000000000000',
            symbol: 'ETH',
            name: 'Ethereum',
          },
          {
            address: '0x960b236A07cf122663c4303350609A66A7B288C0',
            symbol: 'ANT',
            name: 'Aragon',
          },
          {
            address: '0x960b236A07cf122663c4303350609A66A7B288C0',
            symbol: 'ANT',
          },
          {
            address: '0x960b236A07cf122663c4303350609A66A7B288C0',
            symbol: 'ANT',
            name: 'Aragon very very very very long name',
            width: '120px',
          },
          {
            address: '0x960b236A07cf122663c4303350609A66A7B288C0',
            symbol: 'ANT',
            name: 'Aragon very very very very long name',
            width: '200px',
          },
          {
            address: '0x960b236A07cf122663c4303350609A66A7B288C0',
            symbol: 'ANT',
            name: 'Aragon very very very very long name',
            width: '300px',
          },
          {
            address: '0x960b236A07cf122663c4303350609A66A7B288C0',
            symbol: 'ANT',
            name: 'Aragon badge only',
            width: '250px',
            badgeOnly: true,
          },
          {
            address: '0x960b236A07cf122663c4303350609A66A7B288C0',
            symbol: 'ANT',
            name: 'Aragon compact and very very very very long name',
            width: '250px',
            compact: true,
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
            <TokenBadge {...props} />
          </div>
        ))}
      </div>
    )
  }
}

export default App
