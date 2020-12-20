import React, { useState } from 'react'
import styled from 'styled-components'
import { DateRangePicker, unselectable } from '@tecommons/ui'

export default function() {
  const [selectedDateRange, setSelectedDateRange] = useState({
    start: null,
    end: null,
  })
  return (
    <Wrapper>
      <DateRangePicker
        startDate={selectedDateRange.start}
        endDate={selectedDateRange.end}
        onChange={setSelectedDateRange}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${unselectable};
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f5f7fa;
`
