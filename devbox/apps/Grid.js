import React, { useState } from 'react'
import { useLayout, Grid, GridItem } from '@aragon/ui'

function App() {
  const { layoutName, layoutWidth } = useLayout()
  const itemStyle = {
    background: '#ddd',
    padding: 10,
  }

  const [contentWdith, setContentWidth] = useState([])

  const getSize = (id, index) => {
    console.log('id, index', id, index)
    console.log('div width', document.getElementById(id).clientWidth)
    const w = document.getElementById(id).clientWidth
    let newArr = [...contentWdith]
    newArr[index] = w
    setContentWidth(newArr)
  }

  return (
    <Grid>
      <GridItem
        gridColumn={'1/-1'}
        alignVertical={'center'}
        alignHorizontal={'center'}
        style={itemStyle}
      >
        Layout: {layoutName}, layout breakpoint at width: {layoutWidth}
      </GridItem>
      <GridItem gridColumn={'1/13'} style={itemStyle}>
        1: lines 1/11
      </GridItem>
      <GridItem gridColumn={'1/10'} style={itemStyle}>
        3: lines 1/9
      </GridItem>
      <GridItem gridColumn={'10/13'} style={itemStyle}>
        4: lines 10/11
      </GridItem>
      <GridItem gridColumn={'1/6'} style={itemStyle}>
        5: lines 1/6
      </GridItem>
      <GridItem gridColumn={'6/13'} style={itemStyle}>
        6: lines 7/11
      </GridItem>
      <GridItem
        gridRow={layoutName === 'large' ? '2/5' : undefined}
        gridColumn={layoutName === 'large' ? '13/17' : '1 / -1'}
        style={{
          ...itemStyle,
          background: 'red',
        }}
      >
        2: lines 12/16 gird Row 2/5
      </GridItem>
      <GridItem gridColumn={'1/13'} style={itemStyle}>
        7: lines 1/11
      </GridItem>
      <GridItem gridColumn={'1/6'} style={itemStyle}>
        8: lines 1/6
      </GridItem>
      <GridItem gridColumn={'6/13'} style={itemStyle}>
        Content 9: lines 7/11
      </GridItem>
      <GridItem
        id={'id-1'}
        // gridRow={'7'}
        gridColumn={'1/2'}
        style={itemStyle}
      >
        <a onClick={() => getSize('id-1', 1)}>W {contentWdith[1]}</a>
      </GridItem>
      <GridItem
        id={'id-2'}
        // gridRow={'7'}
        gridColumn={'2/3'}
        style={itemStyle}
      >
        <a onClick={() => getSize('id-2', 2)}>W {contentWdith[2]}</a>
      </GridItem>
    </Grid>
  )
}

export default App
