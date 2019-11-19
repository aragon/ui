import React from 'react'
import styled from 'styled-components'
import { PartitionBar, useTheme } from '@aragon/ui'

const ITEMS = [
  {
    name: '0xa0b8084BFa960F50E309c242e19417375b4c427c',
    percentage: 40,
  },
  {
    name: '0xb5c994DBaC8c086f574867D6791eb6F356141BA5',
    percentage: 50,
  },
  {
    name: '0xb5c994DBaC8c086f574867D6791eb6F356141BA5',
    percentage: 10,
  },
]

const ITEMS_DESCRIPTION = [
  {
    name: 'ETH',
    percentage: 51,
    tokenAmount: '3.129325 ETH',
    proportion: '3,500.83 USD',
  },
  {
    name: 'ANT',
    percentage: 31,
    tokenAmount: '352.2342 ANT',
    proportion: '2,253.22 USD',
  },
  {
    name: 'SNT',
    percentage: 12,
    tokenAmount: '215.3950 SNT',
    proportion: '1,242.25 USD',
  },
  {
    name: 'ZRX',
    percentage: 6,
    tokenAmount: '4.22 ZRX',
    proportion: '22.5 USD',
  },
]

const CUSTOM_COLORS = [
  'hsl(40, 70%, 60%)',
  'hsl(80, 70%, 60%)',
  'hsl(120, 70%, 60%)',
  'hsl(180, 70%, 60%)',
]

class App extends React.Component {
  render() {
    return (
      <div
        css={`
          display: grid;
          align-items: center;
          justify-content: center;
          height: 100vh;
          grid-gap: 0;
        `}
      >
        <div>
          <Container>
            <h2>Default</h2>
            <PartitionBar data={ITEMS} />
          </Container>
          <Container>
            <h2>Custom caption and colors</h2>
            <PartitionBar
              data={ITEMS_DESCRIPTION}
              caption={({ index, name, bullet, percentage, color }) => (
                <React.Fragment>
                  {bullet}
                  <Description
                    name={name}
                    tokenAmount={ITEMS_DESCRIPTION[index].tokenAmount}
                    proportion={ITEMS_DESCRIPTION[index].proportion}
                    percentage={percentage}
                    color={color}
                  />
                </React.Fragment>
              )}
              colors={CUSTOM_COLORS}
            />
          </Container>
          <Container>
            <h2>No Caption</h2>
            <PartitionBar data={ITEMS} caption={null} />
          </Container>
        </div>
      </div>
    )
  }
}

function Description(props) {
  const theme = useTheme()
  const { name, tokenAmount, proportion, percentage, color } = props
  return (
    <div
      css={`
        display: grid;
        grid-template-columns: 1fr 8fr 8fr 2fr;
        justify-items: end;
        column-gap: 0.5em;
      `}
    >
      <div>
        <span style={{ color: theme.surfaceContentSecondary }}>{name}</span>
      </div>
      <div>
        <strong>{tokenAmount}</strong>
      </div>
      <div>
        <span css="color: #b0b0b0">{proportion}</span>
      </div>
      <div style={{ color }}>{percentage}%</div>
    </div>
  )
}

const Container = styled.div`
  width: 400px;
  margin: 60px 0;
`

export default App
