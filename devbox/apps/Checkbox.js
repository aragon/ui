import React from 'react'
import styled from 'styled-components'
import { AragonApp, Checkbox, unselectable } from '@aragon/ui'

const items = ['Strawberry', 'Banana', 'Apple', 'Cherry']

class App extends React.Component {
  state = {
    selected: items.map(item => false),
  }

  onCheckboxClick(index, e) {
    this.setState({
      selected: this.state.selected.splice(index, 0, e.target.checked),
    })
  }

  render() {
    const { selected } = this.state
    return (
      <AragonApp publicUrl="/aragon-ui/">
        <Main>
          <List>
            {items.map((item, i) => (
              <Item key={item}>
                <Checkbox
                  checked={selected[i]}
                  onChange={e => this.onCheckboxClick(i, e)}
                />
                {item}
              </Item>
            ))}
          </List>
        </Main>
      </AragonApp>
    )
  }
}

const List = styled.div``

const Item = styled.label`
  display: flex;
  align-items: baseline;
  height: 40px;
  cursor: pointer;
  color: #000;
  &:active {
    color: #666;
  }
`

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

export default App
