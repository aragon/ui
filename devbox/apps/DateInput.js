import React from 'react'
import styled from 'styled-components'
import { AragonApp, DateInput, unselectable } from '@aragon/ui'

import { startOfDay } from 'date-fns'

class App extends React.Component {
  state = { currentDate: new Date() }

  handleSelect = (date) => {
    this.setState({ currentDate: date })
  }

  render() {
    const { currentDate } = this.state

    return (
      <AragonApp publicUrl="/aragon-ui/">
        <Main>
          <Container>
            <DateInput
              value={currentDate}
              onChange={this.handleSelect}
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
  width: 150px;
`

const DateWrapper = styled.span`
  margin-right: 10px;
`

export default App
