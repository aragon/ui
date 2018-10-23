import React from 'react'
import styled from 'styled-components'

import { theme, font, unselectable } from '../..'

class TabBar extends React.Component {
  state = {
    displayFocusRing: false,
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
  }
  enableFocusRing() {
    this.setState({ displayFocusRing: true })
  }
  disableFocusRing() {
    this.setState({ displayFocusRing: false })
  }
  selectElement(element) {
    if (!element || !this.barElement) {
      return
    }
    const index = [...this.barElement.childNodes].indexOf(element)
    if (index > -1) {
      this.props.onSelect(index)
    }
  }
  handleMouseDown = e => {
    this.disableFocusRing()
  }
  handleKeydown = e => {
    if (e.key === 'Enter') {
      this.selectElement(document.activeElement)
      this.enableFocusRing()
    }
    if (e.key === 'Tab') {
      this.enableFocusRing()
    }
  }
  handleTabMouseDown = e => {
    // We would usually avoid using the DOM when possible, and prefer using a
    // separate component (`Tab`) to keep the `index` in a prop, then pass it
    // using an event prop. But since `this.selectElement()` is needed (so we
    // can pass `document.activeElement` to it for the keyboard), and we have
    // `e.currentTarget` in the event object, we might as well use it for the
    // pointer device too.
    this.selectElement(e.currentTarget)
  }
  handleBarRef = el => {
    this.barElement = el
  }
  render() {
    const { displayFocusRing } = this.state
    const { items, selected } = this.props
    return (
      <nav onMouseDown={this.handleMouseDown}>
        <Bar innerRef={this.handleBarRef}>
          {items.map((item, i) => (
            <Tab
              key={i}
              tabIndex="0"
              selected={i === selected}
              focusRing={displayFocusRing}
              onMouseDown={this.handleTabMouseDown}
            >
              <Label selected={i === selected}>{item}</Label>
              {displayFocusRing && <FocusRing />}
            </Tab>
          ))}
        </Bar>
      </nav>
    )
  }
}

const Bar = styled.ul`
  display: flex;
  border-bottom: 1px solid ${theme.contentBorder};
`

const FocusRing = styled.span`
  display: none;
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 2px solid ${theme.accent};
  border-radius: 2px;
`

const Tab = styled.li`
  position: relative;
  list-style: none;
  padding: 0 30px;
  cursor: pointer;
  ${p => font({ weight: p.selected ? 'bold' : 'normal' })};
  ${unselectable()};
  &:focus {
    outline: 0;
    ${FocusRing} {
      display: block;
    }
  }
`

const Label = styled.span`
  display: flex;
  margin-bottom: -1px;
  padding: 10px 0 11px;
  border-bottom: 4px solid ${p => (p.selected ? theme.accent : 'transparent')};
`

export default TabBar
