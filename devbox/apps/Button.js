import React from 'react'
import styled from 'styled-components'
import { Button, Text, theme } from '@aragon/ui'

const MODES = ['normal', 'secondary', 'strong', 'outline', 'text']
const SIZES = ['normal', 'small', 'mini']
const EMPHASES = ['none', 'positive', 'negative']
const DISABLED = [false, true]

class App extends React.Component {
  renderAllButtons() {
    return EMPHASES.map((emphasis, emphasisIndex) => (
      <div key={[emphasisIndex].join('')} className="emphasis">
        <h2>
          <Text size="xlarge">
            emphasis=
            {emphasis}
          </Text>
        </h2>
        <div>
          {DISABLED.map((disabled, disabledIndex) =>
            SIZES.map((size, sizeIndex) => (
              <div
                key={[emphasisIndex, disabledIndex, sizeIndex].join('')}
                className="row"
              >
                {MODES.map((mode, modeIndex) => (
                  <span
                    key={[
                      emphasisIndex,
                      disabledIndex,
                      sizeIndex,
                      modeIndex,
                    ].join('')}
                  >
                    <Button
                      size={size}
                      mode={mode}
                      emphasis={emphasis}
                      disabled={disabled}
                    >
                      {mode}
                      {disabled && size !== 'normal' ? ` (${size} & off)` : ''}
                      {disabled && size === 'normal' ? ` (off)` : ''}
                      {!disabled && size !== 'normal' ? ` (${size})` : ''}
                    </Button>
                  </span>
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    ))
  }
  renderSomeButtons() {
    return (
      <div style={{ padding: '100px 0' }}>
        {['normal', 'strong', 'secondary'].map(mode => (
          <div className="row" key={mode}>
            {SIZES.map(size => (
              <span key={mode + size}>
                <Button mode={mode} size={size}>
                  {size}
                </Button>
              </span>
            ))}
          </div>
        ))}
      </div>
    )
  }
  render() {
    // const buttons = this.renderSomeButtons()
    const buttons = this.renderAllButtons()
    return (
      <Main>
        <Container>
          <h1>
            <Text size="xxlarge">Button variations</Text>
          </h1>
          {buttons}
        </Container>
      </Main>
    )
  }
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  background: hsl(200, 30%, 85%);
`

const Container = styled.div`
  min-height: 0;
  h1 {
    margin: 40px 0;
    text-align: center;
  }
  h2 {
    margin: 20px 0;
    text-align: center;
  }
  .emphasis {
    padding: 20px 0 80px;
  }
  .row {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    > span {
      margin-left: 10px;
    }
  }
`

export default App
