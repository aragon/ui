import React from 'react'
import styled from 'styled-components'
import { RadioGroup, Radio, RadioList, unselectable } from '@aragon/ui'

const items = [
  ['Strawberry', 'Banana', 'Apple', 'Cherry'],
  ['Cherry', 'Strawberry', 'Banana', 'Apple'],
]

const showRadioList = false

class App extends React.Component {
  state = {
    selected: [],
  }
  render() {
    const { selected } = this.state
    return (
      <Main>
        <div style={{ display: 'flex' }}>
          {!showRadioList &&
            items.map((localItems, i) => (
              <List key={i}>
                <RadioGroup
                  selected={selected[i]}
                  onChange={id => {
                    const newSelected = [...selected]
                    newSelected[i] = id
                    this.setState({ selected: newSelected })
                  }}
                >
                  {localItems.map((item, i) => (
                    <li key={item}>
                      <Label>
                        <Radio id={item} />
                        <Item>{item}</Item>
                      </Label>
                    </li>
                  ))}
                </RadioGroup>
              </List>
            ))}
        </div>

        {showRadioList && (
          <RadioList
            title="Action Requirement"
            description="Here are some options you can use to perform it:"
            items={items.map(item => ({ title: item, description: item }))}
            onSelect={selected => this.setState({ selected })}
            selected={selected}
          />
        )}
      </Main>
    )
  }
}

const List = styled.ul`
  list-style: none;
  margin: 0 20px;
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
