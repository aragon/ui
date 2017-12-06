/* @flow */
import type { Node } from 'react'
import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import { unselectable } from '../../shared-styles'

const NON_BREAKING_SPACE = '\xa0'

const { accent, contentBackgroundActive } = theme

const StyledDropDownItem = styled.div.attrs({ tabIndex: '0' })`
  position: relative;
  padding: 8px 15px;
  cursor: pointer;
  outline: 0;
  ${unselectable};
  &:after {
    content: '';
    opacity: 0;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: -1px -2px;
    border: 2px solid ${accent};
    transition: all 100ms ease-in-out;
  }
  &:active {
    background-color: ${contentBackgroundActive};
  }
  &:hover,
  &:focus {
    color: ${accent};
  }
  &:focus:after {
    opacity: ${({ displayFocus }) => (displayFocus ? 1 : 0)};
  }
`

type Props = {
  active: boolean,
  children: Node,
  className: string,
  index: number,
  mainRef: mixed,
  onActivate: mixed,
}

type State = {
  displayFocus: boolean,
  pressed: boolean,
}

class DropDownItem extends React.Component<Props, State> {
  state = {
    pressed: false,
    displayFocus: false,
  }
  handleActivate = event => {
    const keyboard = event.type === 'keydown'
    if (keyboard && event.keyCode !== 13) {
      return
    }
    this.props.onActivate(this.props.index, { keyboard })
  }
  handleMouseDown = () => {
    this.setState({ pressed: true })
  }
  handleMouseUp = () => {
    this.setState({ pressed: false })
  }
  handleFocus = () => {
    this.setState({ displayFocus: !this.state.pressed })
  }
  render() {
    const {
      children = NON_BREAKING_SPACE,
      className,
      mainRef,
      active,
    } = this.props
    const { displayFocus } = this.state
    return (
      <StyledDropDownItem
        innerRef={mainRef}
        className={className}
        active={active}
        displayFocus={displayFocus}
        onClick={this.handleActivate}
        onKeyDown={this.handleActivate}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onFocus={this.handleFocus}
      >
        {children}
      </StyledDropDownItem>
    )
  }
}

export default DropDownItem
