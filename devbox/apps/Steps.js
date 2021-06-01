import React, { useState } from 'react'
import { Grid, GridItem, Box, Steps } from '@aragon/ui'

function App() {
  const stepsArr = [
    'Step-1',
    'Step-2',
    'Step-3',
    'Step-4',
    'Step-5',
    'Step-Final',
  ]
  return (
    <React.Fragment>
      <Grid layout style={{ marginTop: 20 }}>
        {stepsArr.map((step, index) => {
          return (
            <GridItem key={step} gridColumn={'1 / -1'}>
              <Box key={step}>
                <Steps key={step} steps={stepsArr} activeIdx={index} />
              </Box>
            </GridItem>
          )
        })}
      </Grid>
    </React.Fragment>
  )
}

export default App
