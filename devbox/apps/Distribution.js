import React from 'react'
import styled from 'styled-components'
import { Box, Distribution } from '@aragon/ui'

class App extends React.Component {
  render() {
    return (
      <Main>
        <div css="width: 260px">
          <Box>
            <Distribution
              heading="Fruit shares"
              display="all"
              values={[
                { value: 'Bananas', percentage: 37 },
                { value: 'Apples', percentage: 22 },
                { value: 'Cherries', percentage: 15 },
                { value: 'Oranges', percentage: 12 },
                { value: 'Grapefruits', percentage: 12 },
                { value: 'Rest', percentage: 2 },
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
