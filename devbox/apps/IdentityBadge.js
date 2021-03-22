import React from 'react'
import styled from 'styled-components'
import { IconLabel, IdentityBadge, GU } from '@tecommons/ui'

function App({ layout = true }) {
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
        justify-content: center;

        ${layout ? `height: 100vh` : ''};
      `}
    >
      {[
        <IdentityBadge
          label="Olive Oyl"
          entity="0xc41e4c10b37d3397a99d4a90e7d85508a69a5c4c"
          connectedAccount
        />,
        <IdentityBadge
          label="Popeye"
          entity="0x2c9341a52cfa3f2c2554ca1803134137b9366b3c"
          connectedAccount
          popoverAction={{
            label: (
              <div
                css={`
                  display: flex;
                  align-items: center;
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
        />,
        <IdentityBadge
          entity="0x7c708ac7db979fa06705f8880f29f82cfc406993"
          connectedAccount
        />,
        <IdentityBadge
          entity="0x7c708ac7db979fa06705f8880f29f82cfc406993"
          compact={true}
          connectedAccount
        />,
        <IdentityBadge
          label="Badge only"
          entity="0xc41e4c10b37d3397a99d4a90e7d85508a69a5c4c"
          badgeOnly
        />,
      ].map((node, i) => (
        <div
          key={i}
          css={`
            & + & {
              margin-top: 20px;
            }
          `}
        >
          {node}
        </div>
      ))}
    </div>
  )
}

export default App
