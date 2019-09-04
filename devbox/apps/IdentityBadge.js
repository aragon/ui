import React from 'react'
import styled from 'styled-components'
import { IconLabel, IdentityBadge, GU } from '@aragon/ui'

class App extends React.Component {
  render() {
    return (
      <div
        css={`
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 30px;
          height: 100vh;
        `}
      >
        <IdentityBadge
          label="Olive Oyl"
          entity="0xc41e4c10b37d3397a99d4a90e7d85508a69a5c4c"
          connectedAccount
        />
        <IdentityBadge
          label="Has action"
          entity="0x2c9341a52cfa3f2c2554ca1803134137b9366b3c"
          connectedAccount
          popoverAction={{
            label: (
              <div
                css={`
                  display: flex;
                  align-content: center;
                `}
              >
                <IconLabel
                  css={`
                    margin-right: ${1 * GU}px;
                  `}
                />
                Add name
              </div>
            ),
            onClick: () => console.log('clicked action'),
          }}
        />
        <IdentityBadge
          entity="0x7c708ac7db979fa06705f8880f29f82cfc406993"
          connectedAccount
        />
        <IdentityBadge
          entity="0x7c708ac7db979fa06705f8880f29f82cfc406993"
          compact={true}
          connectedAccount
        />
        <IdentityBadge
          label="Badge only"
          entity="0xc41e4c10b37d3397a99d4a90e7d85508a69a5c4c"
          badgeOnly
        />
      </div>
    )
  }
}

export default App
