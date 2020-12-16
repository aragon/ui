import React from 'react'
import { AppBadge, IconLabel, GU } from '@tecommons/ui'
import votingAppIconSvg from '../assets/app-voting-icon.svg'

function App({ layout = true }) {
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
        justify-content: center;

        ${layout
          ? `
            height: 100vh;
            width: 400px;
            margin: 0 auto;
          `
          : ''};
      `}
    >
      {[
        {
          appAddress: '0x658A4e5B1B7F1AF79aE2bDecF4368923b4419d4e',
          label: 'Default',
        },
        {
          appAddress: '0x658A4e5B1B7F1AF79aE2bDecF4368923b4419d4e',
          iconSrc: votingAppIconSvg,
          label: 'App with action',
          popoverAction: {
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
          },
        },
        {
          appAddress: '0x658A4e5B1B7F1AF79aE2bDecF4368923b4419d4e',
          iconSrc: votingAppIconSvg,
          identifier: '50% 50%',
          label: 'App with identifier',
        },
        {
          appAddress: '0x658A4e5B1B7F1AF79aE2bDecF4368923b4419d4e',
          iconSrc: votingAppIconSvg,
          identifier: '50% 50%',
          label: 'Badge only app',
          badgeOnly: true,
        },
        {
          appAddress: '0x960b236a07cf122663c4303350609a66a7b288c0',
          iconSrc: votingAppIconSvg,
          identifier: '50% 50%',
          label: 'Compact app',
          compact: true,
        },
      ].map(({ width, ...props }, i) => (
        <div
          key={i}
          css={`
            display: flex;
            width: ${width || 'auto'};
            & + & {
              margin-top: 20px;
            }
          `}
        >
          <AppBadge {...props} />
        </div>
      ))}
    </div>
  )
}

export default App
