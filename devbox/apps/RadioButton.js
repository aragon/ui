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
                <li key={item}>
                  <Label>
                    <RadioButton
                      checked={i === selected}
                      onChange={check => {
                        if (check) {
                          this.setState({ selected: i })
                        }
                      }}
                    />
                    <Item>{item}</Item>
                  </Label>
                </li>
              ))}
            </List>
          )}

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
