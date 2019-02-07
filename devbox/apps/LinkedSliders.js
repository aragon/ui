import React from 'react'
import styled from 'styled-components'
import { Slider, Button, unselectable } from '@aragon/ui'

const ROWS_MIN = 2
const ROWS_MAX = 7

class App extends React.Component {
  state = {
    distribution: [0.6, 0.3, 0.1],
  }

  distributionPairs() {
    const { distribution } = this.state
    const pairs = distribution.map(value => ({
      value,
      percentage: Math.round(value * 100),
    }))

    // Add / remove the missing percentage after rounding the values
    pairs[0].percentage += pairs.reduce(
      (total, { percentage }) => total - percentage,
      100
    )
    return pairs
  }

  // Update the distribution by changing one of the values
  updateDistributionValue(index, value, distribution) {
    // Other values than the one being directly updated
    const othersTotal = distribution.reduce(
      (total, v, i) => total + (i === index ? 0 : v),
      0
    )

    const updateOtherValue = prevValue =>
      prevValue === 0
        ? 0
        : prevValue - ((othersTotal + value - 1) * prevValue) / othersTotal

    return distribution.map((prevValue, i) =>
      i === index ? value : updateOtherValue(prevValue)
    )
  }

  handleUpdate = (index, value) => {
    const { distribution } = this.state
    this.setState({
      distribution: this.updateDistributionValue(index, value, distribution),
    })
  }

  add = () => {
    this.setState(({ distribution }) => ({
      distribution: this.updateDistributionValue(
        0,
        distribution[0],
        [...distribution, 0.1].slice(0, ROWS_MAX)
      ),
    }))
  }

  remove = () => {
    this.setState(({ distribution }) => ({
      distribution: this.updateDistributionValue(0, distribution[0], [
        ...distribution.slice(0, ROWS_MIN),
        ...distribution.slice(ROWS_MIN, -1),
      ]),
    }))
  }

  render() {
    const distributionPairs = this.distributionPairs()
    return (
      <Main>
        <Col>
          {distributionPairs.map(({ value, percentage }, i) => (
            <PercentageRow
              key={i}
              index={i}
              value={value}
              percentage={percentage}
              onUpdate={this.handleUpdate}
            />
          ))}
        </Col>
        <Buttons>
          <Button mode="secondary" compact onClick={this.remove}>
            remove
          </Button>
          <Button mode="secondary" compact onClick={this.add}>
            add
          </Button>
        </Buttons>
      </Main>
    )
  }
}

class PercentageRow extends React.Component {
  handleUpdate = value => {
    this.props.onUpdate(this.props.index, value)
  }
  render() {
    const { value, percentage } = this.props
    return (
      <Row>
        <SliderWrapper>
          <Slider value={value} onUpdate={this.handleUpdate} />
        </SliderWrapper>
        <Percentage>{Math.round(percentage)}%</Percentage>
      </Row>
    )
  }
}

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const SliderWrapper = styled.div`
  width: 100%;
`

const Percentage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 40px;
  flex-shrink: 0;
`

const Col = styled.div`
  width: 400px;
`

const Buttons = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  > :first-child {
    margin-right: 20px;
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

export default App
