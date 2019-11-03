import React, { useState } from 'react'
import styled from 'styled-components'
import {
  RadioGroup,
  Radio,
  RadioList,
  unselectable,
  useKeyDown,
} from '@aragon/ui'
import CheckboxDemo from './Checkbox'

const items = [
  ['Strawberry', 'Banana', 'Apple', 'Cherry'],
  ['Cherry', 'Strawberry', 'Banana', 'Apple'],
]

const MODES = ['Radio', 'RadioGroup', 'RadioList']

class App extends React.Component {
  state = {
    selected: [-1, -1],
  }
  updateSelected(groupIndex, newId) {
    this.setState(({ selected }) => ({
      selected: selected.map((id, index) =>
        index === groupIndex ? newId : id
      ),
    }))
  }
  render() {
    const { mode } = this.props
    const { selected } = this.state

    if (mode === 0) {
      return <CheckboxDemo radioMode />
    }

    return (
      <Main>
        <div
          css={`
            display: flex;
            flex-direction: column;
          `}
        >
          <h1
            css={`
              margin-bottom: 20px;
              font-size: 20px;
            `}
          >
            {MODES[mode]}
          </h1>

          <div
            css={`
              display: flex;
            `}
          >
            {mode === 1 &&
              items.map((localItems, i) => (
                <List key={i}>
                  <RadioGroup
                    selected={selected[i]}
                    onChange={id => {
                      this.updateSelected(i, id)
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

            {mode === 2 && (
              <RadioList
                title="Action Requirement"
                description="Here are some options you can use to perform it:"
                items={items[0].map(item => ({
                  title: item,
                  description: item,
                }))}
                onChange={id => {
                  this.updateSelected(0, id)
                }}
                selected={selected[0]}
              />
            )}
          </div>
        </div>
      </Main>
    )
  }
}

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  & + & {
    margin-left: 20px;
  }
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

export default () => {
  const [mode, setMode] = useState(0)

  useKeyDown(39 /* right */, () => {
    setMode(mode => (mode + 1) % MODES.length)
  })

  useKeyDown(37 /* left */, () => {
    setMode(mode => (mode + (MODES.length - 1)) % MODES.length)
  })

  return <App mode={mode} />
}
