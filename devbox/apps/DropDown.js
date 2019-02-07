import React from 'react'
import styled from 'styled-components'
import { DropDown, unselectable } from '@aragon/ui'

const items = ['Strawberry', 'Banana', 'Apple', 'Cherry']

class App extends React.Component {
  state = { active: 0 }
  handleChange = index => {
    this.setState({ active: index })
  }
  render() {
    const { active } = this.state
    return (
      <Main>
        <Container>
          <DropDown
            items={items}
            active={active}
            onChange={this.handleChange}
          />
        </Container>
      </Main>
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

export default App
