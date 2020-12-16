import React from 'react'
import styled from 'styled-components'
import { Main, Viewport } from '@tecommons/ui'

const CodeItem = ({ label, ok }) => (
  <div
    css={`
      display: flex;
      justify-content: space-between;
      padding: 2px 0;
      font-size: 13px;
    `}
  >
    <span>{label}: </span>
    <span
      css={`
        display: inline-block;
        width: 20px;
        color: ${ok ? 'hsl(100, 60%, 50%)' : 'hsl(0, 70%, 70%)'};
        margin-left: 20px;
        font-size: 11px;
      `}
    >
      {ok ? 'YES' : 'NO'}
    </span>
  </div>
)

class App extends React.Component {
  render() {
    return (
      <Main>
        <Viewport>
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
                  border-radius: 0 0 5px 0;
                  background: hsl(180, 60%, 90%, 0.5);
                  max-width: 100vw;
                  overflow-x: auto;
                `}
              >
                <div
                  css={`
                    padding: 2px 0;
                    font-size: 13px;
                  `}
                >
                  Current size: {width}x{height}
                </div>
                <CodeItem label={'within(400, 500)'} ok={within(400, 500)} />
                <CodeItem label={'within(500, 600)'} ok={within(500, 600)} />
                <CodeItem
                  label={'within("small", "medium")'}
                  ok={within('small', 'medium')}
                />
                <CodeItem label={'above("small")'} ok={above('small')} />
                <CodeItem label={'below("medium")'} ok={below('medium')} />
                <CodeItem label={'above("medium")'} ok={above('medium')} />
                <CodeItem label={'above("large")'} ok={above('large')} />
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
                            right: '-3px',
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
        </Viewport>
      </Main>
    )
  }
}

export default App
