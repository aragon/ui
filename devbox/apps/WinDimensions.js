import React from 'react'
import styled from 'styled-components'
import { Main, WinDimensions } from '@aragon/ui'

const yesno = condition =>
  condition ? (
    <span
      css={`
        display: inline-block;
        width: 20px;
        color: hsl(100, 60%, 50%);
      `}
    >
      yes
    </span>
  ) : (
    <span
      css={`
        display: inline-block;
        width: 20px;
        color: hsl(0, 70%, 70%);
      `}
    >
      no
    </span>
  )

const Item = styled.div`
  padding: 2px 0;
  font-size: 13px;
`

class App extends React.Component {
  render() {
    return (
      <Main>
        <WinDimensions>
          {({ width, height, within, below, above, breakpoints }) => (
            <div
              css={`
                display: flex;
                align-items: center;
                height: 100vh;
                width: 100vw;
                overflow: hidden;
              `}
            >
              <div
                css={`
                  position: absolute;
                  left: 0;
                  top: 0;
                  z-index: 2;
                  padding: 10px 20px;
                  white-space: nowrap;
                  border-radius: 0 0 10px 0;
                  background: hsl(180, 60%, 90%, 0.5);
                  max-width: 100vw;
                  overflow-x: auto;
                `}
              >
                <Item>
                  Current size: {width}x{height}
                </Item>
                <Item>
                  <code>within(400, 500)</code>: {yesno(within(400, 500))}
                </Item>
                <Item>
                  <code>within(500, 600)</code>: {yesno(within(500, 600))}
                </Item>
                <Item>
                  <code>within('small', 'medium')</code>:{' '}
                  {yesno(within('small', 'medium'))}
                </Item>
                <Item>
                  <code>above('small')</code>: {yesno(above('small'))}
                </Item>
                <Item>
                  <code>below('medium')</code>: {yesno(below('medium'))}
                </Item>
                <Item>
                  <code>above('medium')</code>: {yesno(above('medium'))}
                </Item>
                <Item>
                  <code>above('large')</code>: {yesno(above('large'))}
                </Item>
              </div>

              <div
                css={`
                  position: relative;
                  display: flex;
                  width: 100%;
                  height: 100vh;
                  background: hsl(200, 40%, 80%);
                `}
              >
                <div
                  css={`
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    background: hsl(200, 0%, 90%);
                    transform: translate(-50%, -50%);
                    height: 300px;
                  `}
                  style={{
                    width: `${300 * (width / height)}px`,
                  }}
                >
                  {Object.entries(breakpoints).map(
                    ([name, w], i, { length }) => (
                      <div
                        key={name}
                        style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          height: '100%',
                          width: `${100 * (w / width)}%`,
                          background: [
                            '#900c3f',
                            '#c70039',
                            '#ff5733',
                            '#ffc300',
                          ][i],
                          zIndex: length - i,
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            top: '-25px',
                            right: '-2px',
                          }}
                        >
                          {name} ↓
                        </div>
                      </div>
                    )
                  )}
                  <div
                    css={`
                      position: absolute;
                      top: -5px;
                      left: -5px;
                      right: -5px;
                      bottom: -5px;
                      z-index: 20;
                      border: 5px solid hsl(200, 0%, 40%);
                      border-radius: 5px;
                    `}
                  />
                </div>
              </div>
            </div>
          )}
        </WinDimensions>
      </Main>
    )
  }
}

export default App
