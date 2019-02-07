import React from 'react'
import styled from 'styled-components'
import { LineChart, unselectable } from '@aragon/ui'

class App extends React.Component {
  _cachedLines = [[], [], []]
  state = { count: 5, total: 10 }
  updateCount(increment) {
    this.setState(({ count }) => ({ count: Math.max(0, count + increment) }))
  }
  updateTotal(increment) {
    this.setState(({ total }) => ({ total: Math.max(0, total + increment) }))
  }
  getLines(count) {
    let lines = this._cachedLines
    if (lines[0].length < count) {
      while (lines[0].length < count) {
        lines = lines.map(values => [...values, Math.random()])
      }
    }
    this._cachedLines = lines
    return lines.map(values => values.slice(0, count))
  }
  render() {
    const { count, total } = this.state
    const lines = this.getLines(count)
    return (
      <Main>
        <Container>
          <ButtonGroup>
            <button onClick={() => this.updateCount(-1)}>-</button>
            <span>Values: {count}</span>
            <button onClick={() => this.updateCount(1)}>+</button>
          </ButtonGroup>
          <ButtonGroup>
            <button onClick={() => this.updateTotal(-1)}>-</button>
            <span>Total: {total}</span>
            <button onClick={() => this.updateTotal(1)}>+</button>
          </ButtonGroup>
          <LineChart lines={lines} total={total} captionsHeight={20} />
        </Container>
      </Main>
    )
  }
}

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
  width: '100%';
  height: 40px;
  justify-content: space-between;
  align-items: center;
  color: #999;
  font-weight: 300;
  button {
    cursor: pointer;
    border: 0;
    background: #bed;
    width: 40px;
    height: 40px;
    color: #fff;
    border-radius: 3px;
    &:active {
      background: #adc;
    }
  }
`

const Main = styled.div`
  ${unselectable};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
`

const Container = styled.div`
  width: 360px;
`

export default App
