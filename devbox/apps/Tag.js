import React from 'react'
import styled from 'styled-components'
import { Box, IconCheck, Badge, Tag, GU } from '@tecommons/ui'

const ITEMS = new Map([
  [
    'indicator',
    [
      { icon: <IconCheck size="tiny" /> },
      { icon: <IconCheck size="tiny" />, label: 'Voted' },
      { label: 'Voted' },
      { label: '2' },
      { label: 'You', size: 'small' },
      { label: 893278, size: 'small', limitDigits: 4 },
    ],
  ],
  ['identifier', ['!', 'w', 'woa!', 'Custom label']],
  ['new', ['!', 'w', 'New version', 'New new new new new new new new']],
  [
    'activity',
    [
      { label: 0 },
      { label: <span>test</span> },
      { limitDigits: true, label: 1 },
      { limitDigits: true, label: 9879 },
      { limitDigits: 4, label: 9877987 },
      { limitDigits: true, label: 9879, size: 'normal' },
      { label: 4237 },
      { label: 4237, size: 'normal' },
    ],
  ],
])

const CUSTOM_ITEMS = [
  ['#8bc', '#fff'],
  ['#987', '#fff'],
  ['#4ad', '#fff'],
  ['#daf', '#a00'],
  ['#7b7', '#fff'],
  ['#449', '#fff'],
]

function DeprecatedBadges() {
  return (
    <div
      css={`
        display: flex;
        gap: 20px;
        justify-content: center;
        background: white;
        padding: 200px 0;
      `}
    >
      <Badge>default</Badge>
      <Badge shape="disc">disc</Badge>
      <Badge shape="smalldisc">smalldisc</Badge>
      <Badge background="tomato" foreground="ivory">
        custom
      </Badge>
      <Badge.Notification>Notification</Badge.Notification>
      <Badge.Notification label={99999} />
      <Badge.Notification label={99999} small />
      <Badge.Identity>0x9898793287197398173298321798</Badge.Identity>
      <Badge.App>App</Badge.App>
      <Badge.Info label="?" />
      <Badge.Info label={999999} />
    </div>
  )
}

class App extends React.Component {
  render() {
    // return <DeprecatedBadges />
    return (
      <div
        css={`
          display: grid;
          grid-template-columns: repeat(4, 200px);
          grid-gap: ${3 * GU}px;
          align-items: start;
          justify-content: center;
          padding-top: ${6 * GU}px;
        `}
      >
        {[...ITEMS.keys()].map(key => (
          <Box
            key={key}
            heading={key}
            css={`
              height: 100%;
              & + & {
                margin-top: 0;
              }
            `}
          >
            {ITEMS.get(key).map((item, i) => (
              <div
                key={i}
                css={`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100%;
                  & + & {
                    margin-top: ${1 * GU}px;
                  }
                `}
              >
                <Tag
                  mode={key}
                  {...(typeof item === 'string' ? { children: item } : item)}
                />
              </div>
            ))}
          </Box>
        ))}
        <div key="custom" css="text-align: center">
          <Box heading="Custom">
            <div
              css={`
                display: grid;
                grid-gap: ${1 * GU}px;
              `}
            >
              {CUSTOM_ITEMS.map(([background, color], i) => (
                <div
                  key={`custom-${i}`}
                  css={`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  `}
                >
                  <Tag
                    background={background}
                    color={color}
                    size={i < 4 ? 'small' : 'normal'}
                    uppercase={i % 2 === 1 || i > 3}
                  >
                    {'custom'.substr(0, i + 1)}
                  </Tag>
                </div>
              ))}
            </div>
          </Box>
        </div>
      </div>
    )
  }
}

export default App
