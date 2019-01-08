import React from 'react'
import styled from 'styled-components'
import { AragonApp, PartitionBar, theme, Text } from '@aragon/ui'

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
    percentage: 46,
    tokenAmount: '3.129325 ETH',
    proportion: '3,500.83 USD',
  },
  {
    name: 'ANT',
    percentage: 24,
    tokenAmount: '352.2342 ANT',
    proportion: '2,253.22 USD',
  },
  {
    name: 'SNT',
    percentage: 12,
    tokenAmount: '215.3950 SNT',
    proportion: '1,242.25 USD',
  },
]

class App extends React.Component {
  render() {
    const itemsWithDescripttion = ITEMS_DESCRIPTION.map(item => {
      return {
        ...item,
        description: <Description {...item} />,
      }
    })

    return (
      <AragonApp publicUrl="/aragon-ui/">
        <Main>
          <div>
            <Container>
              <h2>No Caption</h2>
              <PartitionBar data={ITEMS} caption={false} />
            </Container>
            <Container>
              <h2>Default Caption</h2>
              <PartitionBar data={ITEMS} />
            </Container>
            <Container>
              <h2>Custom Caption</h2>
              <PartitionBar data={itemsWithDescripttion} />
            </Container>
          </div>
        </Main>
      </AragonApp>
    )
  }
}

const Description = props => {
  const { name, tokenAmount, proportion, percentage } = props

  return (
    <AllocationDescription>
      <div>
        <Text color={theme.textSecondary}>{name}</Text>
      </div>
      <div>
        <Text weight="bold">{tokenAmount}</Text>
      </div>
      <div>
        <StyledFormattedProportion>{proportion}</StyledFormattedProportion>
      </div>
      <div>
        <Text weight="bolder">{percentage}%</Text>
      </div>
    </AllocationDescription>
  )
}

const Main = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100vh;
  grid-gap: 0;
`

const Container = styled.div`
  width: 400px;
  margin: 60px 0;
`

const AllocationDescription = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 8fr 2fr;
  justify-items: end;
  column-gap: 0.5em;
`

const StyledFormattedProportion = styled.span`
  color: #b0b0b0;
`

export default App
