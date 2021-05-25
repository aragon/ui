import React from 'react'
import { useLayout, Grid, GridItem } from '@aragon/ui'

function App() {
  const { layoutName, layoutWidth } = useLayout()
  const itemStyle = {
    background: '#ddd',
    padding: 10,
  }
  const gridStyle = {
    margin: 20,
  }

  return (
    <Grid rowHeight={80} style={gridStyle}>
      <GridItem
        gridColumn={'1/17'}
        alignVertical={'center'}
        alignHorizontal={'center'}
        style={itemStyle}
      >
        Layout: {layoutName}, layout breakpoint at width: {layoutWidth}
      </GridItem>
      <GridItem gridColumn={'1/12'} style={itemStyle}>
        1: grid Column 1/11
      </GridItem>
      <GridItem gridColumn={'1/10'} style={itemStyle}>
        3: grid Column 1/9
      </GridItem>
      <GridItem gridColumn={'10/12'} style={itemStyle}>
        4: grid Column 10/11
      </GridItem>
      <GridItem gridColumn={'1/6'} style={itemStyle}>
        5: grid Column 1/6
      </GridItem>
      <GridItem
        gridRow={'2/5'}
        gridColumn={'12/17'}
        style={{
          ...itemStyle,
          background: 'red',
        }}
      >
        2: grid Column 12/16 gird Row 2/5
      </GridItem>
      <GridItem gridColumn={'6/12'} style={itemStyle}>
        6: grid Column 7/11
      </GridItem>
      <GridItem gridColumn={'1/12'} style={itemStyle}>
        7: grid Column 1/11
      </GridItem>
      <GridItem gridColumn={'1/6'} style={itemStyle}>
        8: grid Column 1/6
      </GridItem>
      <GridItem gridColumn={'6/12'} style={itemStyle}>
        Content 9: grid Column 7/11
      </GridItem>
    </Grid>
  )
}

export default App
