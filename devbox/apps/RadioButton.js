import React from 'react'
import styled from 'styled-components'
import { AragonApp, RadioButton, RadioList, unselectable } from '@aragon/ui'

const items = ['Strawberry', 'Banana', 'Apple', 'Cherry']

const showRadioList = false

class App extends React.Component {
  state = {
    selected: 0,
  }

  render() {
    const { selected } = this.state
    return (
      <AragonApp publicUrl="/aragon-ui/">
        <Main>
          {!showRadioList && (
            <List>
              {items.map((item, i) => (
                <Item key={item}>
                  <RadioButton
                    checked={i === selected}
                    onChange={e => {
                      this.setState({ selected: e.target.checked ? i : -1 })
                    }}
                  />
                  {item}
                </Item>
              ))}
            </List>
          )}
          {showRadioList && (
            <List>
              <RadioList
                title="Action Requirement"
                description="Here are some options you can use to perform it:"
                items={items.map(item => ({ title: item, description: item }))}
                onSelect={selected => this.setState({ selected })}
                selected={selected}
              />
            </List>
          )}
        </Main>
      </AragonApp>
    )
  }
}

const List = styled.div``

const Item = styled.label`
  display: flex;
  align-items: center;
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
