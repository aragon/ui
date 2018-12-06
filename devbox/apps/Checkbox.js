import React from 'react'
import styled from 'styled-components'
import { AragonApp, Checkbox, unselectable } from '@aragon/ui'

const items = ['Strawberry', 'Banana', 'Apple', 'Cherry']

class App extends React.Component {
  state = {
    selectedItems: [],
  }

  isSelected(index) {
    return (
      this.state.selectedItems.findIndex(itemIndex => itemIndex === index) > -1
    )
  }

  onCheckboxClick(index, check) {
    this.setState(({ selectedItems }) => ({
      selectedItems: !check
        ? selectedItems.filter(i => i !== index)
        : [...selectedItems, index],
    }))
  }

  render() {
    return (
      <AragonApp publicUrl="/aragon-ui/">
        <Main>
          <List>
            {items.map((item, i) => (
              <li key={item}>
                <Label>
                  <Checkbox
                    checked={this.isSelected(i)}
                    onChange={check => this.onCheckboxClick(i, check)}
                  />
                  <Item>{item}</Item>
                </Label>
              </li>
            ))}
          </List>
        </Main>
      </AragonApp>
    )
  }
}

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Label = styled.label`
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
  color: #000;
  &:active {
    color: #666;
  }
`

const Item = styled.span`
  margin-left: 5px;
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
