import React from 'react'
import styled from 'styled-components'
import { TokenBadge } from '@aragon/ui'

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
            address: '0x960b236a07cf122663c4303350609a66a7b288c0',
            symbol: 'ANT',
            name: 'Aragon',
          },
          {
            address: '0x960b236a07cf122663c4303350609a66a7b288c0',
            symbol: 'ANT',
          },
          {
            address: '0x960b236a07cf122663c4303350609a66a7b288c0',
            symbol: 'ANT',
            name: 'Aragon very very very very long name',
            width: '120px',
          },
          {
            address: '0x960b236a07cf122663c4303350609a66a7b288c0',
            symbol: 'ANT',
            name: 'Aragon very very very very long name',
            width: '200px',
          },
          {
            address: '0x960b236a07cf122663c4303350609a66a7b288c0',
            symbol: 'ANT',
            name: 'Aragon very very very very long name',
            width: '300px',
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
