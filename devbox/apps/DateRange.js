import React, { useState } from 'react'
import styled from 'styled-components'
import { _DateRange as DateRange, unselectable } from '@aragon/ui'

export default function() {
  const [selectedDateRange, setSelectedDateRange] = useState({
    start: null,
    end: null,
  })
  return (
    <Main>
      <Container>
        <DateRange
          startDate={selectedDateRange.start}
          endDate={selectedDateRange.end}
          onChange={setSelectedDateRange}
        />
      </Container>
    </Main>
  )
}

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
  width: 400px;
`
