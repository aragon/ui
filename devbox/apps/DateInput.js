import React from 'react'
import styled from 'styled-components'
import { AragonApp, DateInput, DateRangeInput, unselectable } from '@aragon/ui'

import { startOfDay, addMonths } from 'date-fns'

class App extends React.Component {
  state = {
    dateInput: new Date(),
    startDate: new Date(),
    endDate: addMonths(new Date(), 2)
  }

  handleDateInputChange = (date) => {
    this.setState({ currentDate: date })
  }

  handleStartDateChange = (date) => {
    const { onChange } = this.props
    const { startDate, endDate } = this.state
    this.setState({ startDate: date })
  }

  handleEndDateChange = (date) => {
    const { onChange } = this.props
    const { startDate, endDate } = this.state
    this.setState({ endDate: date })
  }

  render() {
    const { dateInput, startDate, endDate } = this.state

    return (
      <AragonApp publicUrl="/aragon-ui/">
        <Main>
          <Container>
            <DateInput
              value={dateInput}
              onChange={this.handleDateInputChange}
            />
          </Container>
          <Container>
            <DateRangeInput
              startDate={startDate}
              endDate={endDate}
              onStartDateChange={this.handleStartDateChange}
              onEndDateChange={this.handleEndDateChange}
            />
          </Container>
        </Main>
      </AragonApp>
    )
  }
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
  margin-top: 30px;
  width: 150px;
`

const DateWrapper = styled.span`
  margin-right: 10px;
`

export default App
