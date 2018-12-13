import React from 'react'
import styled from 'styled-components'
import { AragonApp, Text, Button, DatePicker, unselectable } from '@aragon/ui'

import { format as formatDate } from 'date-fns'

class App extends React.Component {
  state = { currentDate: new Date() }

  componentWillUnmount () {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.showPicker !== prevState.showPicker) {
      if (this.state.showPicker) {
        document.addEventListener('mousedown', this.handleClickOutside)
      } else {
        document.removeEventListener('mousedown', this.handleClickOutside)
      }
    }
  }

  handleClick = (event) => {
    event.stopPropagation()
    this.setState({ showPicker: true })
  }

  handleClickOutside = (event) => {
    console.log('handleClickOutside', this.rootRef)
    if (this.rootRef && !this.rootRef.contains(event.target)) {
      this.setState({ showPicker: false })
    }
  }

  handleSelect = (date) => {
    console.log('handleSelect', date)
    this.setState({ currentDate: date, showPicker: false })
  }

  render() {
    const { currentDate } = this.state
    return (
      <AragonApp publicUrl="/aragon-ui/">
        <Main>
          <Container>
            <DateWrapper>
              {formatDate(currentDate, 'LL/dd/yyyy')}
            </DateWrapper>
            <span ref={el => this.rootRef = el}>
              <Button mode="secondary" onClick={this.handleClick} compact >
                Date
              </Button>
            {this.state.showPicker && (
              <DatePicker
                currentDate={currentDate}
                onSelect={this.handleSelect}
                overlay={true}
              />
            )}
            </span>
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
  position: relative;
  width: 150px;
`

const DateWrapper = styled.span`
  margin-right: 10px;
`

export default App
