import React, { useState } from 'react'
import {
  Grid,
  GridItem,
  StyledText,
  Box,
  TEXT_STYLES,
  textStyle,
} from '@aragon/ui'

function App() {
  return (
    <React.Fragment>
      <Grid layout style={{ marginTop: 20 }}>
        <GridItem gridColumn={'1 / -1'}>
          <Box>
            <Grid>
              <GridItem gridColumn={'1 / 2'}>
                <StyledText>Title 1</StyledText>
              </GridItem>
              <GridItem gridColumn={'2 / 3'} alignVertical={'center'}>
                <StyledText name={'title4'}>
                  {'<StyledText>Title 1</StyledText>'}
                </StyledText>
              </GridItem>
            </Grid>
          </Box>
        </GridItem>
        <GridItem gridColumn={'1 / -1'}>
          <Box>
            <Grid>
              <GridItem gridColumn={'1 / 2'}>
                <StyledText name={'title2'}>Title 2</StyledText>
              </GridItem>
              <GridItem gridColumn={'2 / 3'} alignVertical={'center'}>
                <StyledText name={'title4'}>
                  {'<StyledText name={"title2"}>Title 2</StyledText>'}
                </StyledText>
              </GridItem>
            </Grid>
          </Box>
        </GridItem>
        <GridItem gridColumn={'1 / -1'}>
          <Box>
            <Grid>
              <GridItem gridColumn={'1 / 2'}>
                <StyledText name={'title3'}>Title 3</StyledText>
              </GridItem>
              <GridItem gridColumn={'2 / 3'} alignVertical={'center'}>
                <StyledText name={'title4'}>{'... and so on'}</StyledText>
              </GridItem>
            </Grid>
          </Box>
        </GridItem>
        <GridItem gridColumn={'1 / -1'}>
          <Box>
            {Object.keys(TEXT_STYLES).map(name => (
              <div
                css={`
                  ${textStyle(name)};
                `}
              >
                {name[0].toUpperCase() +
                  name.slice(1, -1) +
                  ' ' +
                  name.slice(-1)}
              </div>
            ))}
          </Box>
        </GridItem>
      </Grid>
    </React.Fragment>
  )
}

export default App
