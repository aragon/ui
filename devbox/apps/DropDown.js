import React from 'react'
import styled from 'styled-components'
import { IdentityBadge, DropDown, GU, unselectable } from '@tecommons/ui'

const items = [
  'Strawberry',
  'Banana',
  'Apple',
  'Cherry',
  <span
    style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
    }}
  >
    <span>Test</span>
    <IdentityBadge entity="0xc41e4c10b37d3397a99d4a90e7d85508a69a5c4c" />
  </span>,
]

class App extends React.Component {
  state = { active: -1 }
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
            placeholder="Which fruit?"
            header="Fruits"
            selected={active}
            onChange={this.handleChange}
            wide
          />
          <DropDown
            items={items}
            placeholder="Which fruit?"
            header="Fruits"
            selected={active}
            onChange={this.handleChange}
            disabled
            wide
            css={`
              margin-top: ${2 * GU}px;
            `}
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
  width: 400px;
`

export default App
