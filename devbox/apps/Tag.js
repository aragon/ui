import React from 'react'
import styled from 'styled-components'
import { Tag } from '@aragon/ui'

const ITEMS = new Map([
  ['info', ['i', '?', 'You', 'You', 'Info', 'Here']],
  ['warning', ['!', 'w', 'woa!', 'woa!', 'warning', 'Watch out!']],
  ['help', ['i', '?', 'help', 'help', '999+', 'Learn more']],
  ['tag', ['a', 'b', 'tag', 'tag', 'wanted', 'first issue']],
  ['app', ['c', 'd', 'app', 'app', 'App Tag', 'Other app tag']],
  ['identity', ['e', 'f', 'id', 'id', 'Identity tag', 'It is me!']],
  ['notification', ['1', '2', 'here!', 'here!', 'Notifications', 'Hello?']],
])

const CUSTOM_ITEMS = [
  ['#0f0', '#f00'],
  ['#00f', '#fff'],
  ['#f00', 'darkred'],
  ['orange', 'green'],
  ['cyan', 'darkblue'],
  ['black', 'white'],
]

class App extends React.Component {
  render() {
    return (
      <div
        css={`
          display: grid;
          grid-template-columns: auto auto auto auto auto auto auto auto;
          grid-gap: 10px;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 30vh;
          left: 10vw;
          right: 10vw;
          bottom: 30vh;
          overflow-y: scroll;
          overflow-x: hidden;
        `}
      >
        {Array.from(ITEMS.keys()).map(key => (
          <div key={key} css="text-align: center;">
            <div>{key}</div>
            <div
              css={`
                display: grid;
                grid-template-columns: auto;
                grid-gap: 5px;
              `}
            >
              {ITEMS.get(key).map((item, i) => (
                <div key={i} css="text-align: center;">
                  <Tag
                    size={i < 4 ? 'small' : 'normal'}
                    uppercase={i % 2 === 0}
                    mode={key}
                  >
                    {item}
                  </Tag>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div key="custom" css="text-align: center;">
          <div>Custom</div>
          <div
            css={`
              display: grid;
              grid-template-columns: auto;
              grid-gap: 5px;
            `}
          >
            {CUSTOM_ITEMS.map(([background, color], i) => (
              <div key={`custom-${i}`} css="text-align: center;">
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
        </div>
      </div>
    )
  }
}

export default App
