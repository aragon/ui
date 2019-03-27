import React from 'react'
import styled from 'styled-components'
import { Checkbox, unselectable } from '@aragon/ui'

const ITEMS = ['Strawberry', 'Banana', 'Apple', 'Cherry']

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
    const items = ITEMS.map((name, i) => ({
      name,
      checked: this.isSelected(i),
    }))
    const checkedItems = items.filter(({ checked }) => checked)
    const allChecked = checkedItems.length === ITEMS.length
    const noneChecked = checkedItems.length === 0
    return (
      <Main>
        <List>
          <li>
            <Label>
              <Checkbox
                indeterminate={!(allChecked ^ noneChecked)}
                checked={allChecked}
                onChange={check => {
                  this.setState({
                    selectedItems: check ? Object.keys(items).map(Number) : [],
                  })
                }}
              />
              <Item>Check all</Item>
            </Label>
          </li>
          {items.map(({ name, checked }, i) => (
            <li key={name}>
              <Label>
                <Checkbox
                  checked={checked}
                  onChange={check => this.onCheckboxClick(i, check)}
                />
                <Item>{name}</Item>
              </Label>
            </li>
          ))}
        </List>
      </Main>
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
