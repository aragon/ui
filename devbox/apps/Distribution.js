import React from 'react'
import styled from 'styled-components'
import { Box, Distribution } from '@tecommons/ui'

class App extends React.Component {
  render() {
    return (
      <Main>
        <div css="width: 260px">
          <Box>
            <Distribution
              heading="Fruit shares"
              items={[
                { item: 'Bananas', percentage: 37 },
                { item: 'Apples', percentage: 22 },
                { item: 'Cherries', percentage: 15 },
                { item: 'Oranges', percentage: 12 },
                { item: 'Grapefruits', percentage: 12 },
                { item: 'Rest', percentage: 2 },
              ]}
            />
          </Box>
        </div>
      </Main>
    )
  }
}

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 24px);
  padding: 20px;
`

export default App
