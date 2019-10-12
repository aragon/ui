import React, { useState } from 'react'
import styled from 'styled-components'
import { _DateRange as DateRange, unselectable } from '@aragon/ui'

export default function() {
	const initialState = {
    start: null,
    end: null,
  }
  const [selectedDateRange, setSelectedDateRange] = useState(initialState)
  const [selectedStartDateRange, setSelectedStartDateRange] = useState(initialState)
  const [selectedEndDateRange, setSelectedEndDateRange] = useState(initialState)
  return (
    <Main>
      <Container>
        <DateRange
          startDate={selectedDateRange.start}
          endDate={selectedDateRange.end}
          onChange={setSelectedDateRange}
        />
				With partial = 'start'
        <DateRange
          startDate={selectedStartDateRange.start}
          endDate={selectedStartDateRange.end}
          onChange={setSelectedStartDateRange}
					partial="start"
        />
				With partial = 'end'
        <DateRange
          startDate={selectedEndDateRange.start}
          endDate={selectedEndDateRange.end}
          onChange={setSelectedEndDateRange}
					partial="end"
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
